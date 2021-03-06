package com.goodpower.pvams.controller.power;

import com.alibaba.fastjson.JSONObject;
import com.goodpower.pvams.common.Page;
import com.goodpower.pvams.common.ResultMap;
import com.goodpower.pvams.mapper.PowerStationFileMapper;
import com.goodpower.pvams.model.*;
import com.goodpower.pvams.service.StationService;
import com.goodpower.pvams.service.StationTemplateService;
import com.goodpower.pvams.service.UnitService;
import com.goodpower.pvams.util.FileHandleUtil;
import com.google.common.collect.Maps;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("station")
public class StationController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    StationService stationService;

    @Autowired
    UnitService unitService;

    @Autowired
    PowerStationFileMapper fileMapper;

    @Autowired
    StationTemplateService stationTemplateService;

    @PostMapping("/add")
    public ResultMap add(@RequestBody JSONObject request){
        ResultMap resultMap = new ResultMap();
        try{
            Long companyId = request.getLong("companyId");
            String stationName = request.getString("stationName");
            String stationType = request.getString("stationType");
            if(companyId == null){
                return resultMap.fail().code(400).message("公司不能为空");
            }
            if(StringUtils.isBlank(stationType)){
                return resultMap.fail().code(400).message("电站类型不能为空");
            }
            if(StringUtils.isBlank(stationName)){
                return resultMap.fail().code(400).message("电站名称不能为空");
            }
            PowerStation powerStation = new PowerStation();
            powerStation.setStationName(stationName);
            powerStation.setCompanyId(companyId);
            powerStation.setStationType(stationType);
            Long stationId = unitService.addPowerStation(powerStation);
            JSONObject jsonObject = new JSONObject();
            if(stationId != null){
                try{
                    TreeNode treeNode = new TreeNode();
                    treeNode.setId("s"+stationId);
                    treeNode.setpId("c"+companyId);
                    treeNode.setShowName(stationName);
                    stationService.addMenu(treeNode);
                    jsonObject.put("data",treeNode);
                }catch (Exception e){
                    logger.error("添加菜单栏失败",e);
                }
            }
            resultMap.success().code(200).message("添加成功").setData(jsonObject);
        }catch (Exception e){
            logger.error("添加失败",e);
            resultMap.fail().code(400).message("添加失败");
        }
        return resultMap;
    }

    @GetMapping("/getStationInfo")
    public ResultMap getStationInfo(@RequestParam Long stationId){
        ResultMap resultMap = new ResultMap();
        try{
            if(stationId != null){
                JSONObject jsonObject = stationService.getStationInfo(stationId);
                resultMap.success().setData(jsonObject).code(200).message("查询成功");
            }else{
                resultMap.success().setData(new JSONObject()).code(200).message("查询成功");
            }
        }catch (Exception e){
            logger.error("查询失败",e);
            resultMap.fail().code(400).message("查询失败");
        }
        return resultMap;
    }

    @PostMapping("/uploadStationFile/{stationId}")
    public ResultMap uploadStationFile(@PathVariable Long stationId,@RequestParam("file") MultipartFile file) {
        String fileOriginalName = file.getOriginalFilename();
        String path = null;
        ResultMap resultMap = new ResultMap();
        if(stationId == null){
            return resultMap.fail().message("请先选择电站!");
        }
        try{
            String fileName = file.getOriginalFilename();
            if(StringUtils.isNotBlank(fileName) && fileName.endsWith("pdf")){
                path = FileHandleUtil.upload(file.getInputStream(),file.getOriginalFilename());
            }else{
                return resultMap.warn().setData(path).message("文件类型错误,只能上传pdf文件!");
            }
        }catch (Exception e){
            logger.error("上传图片失败",e);
        }
        if(StringUtils.isNotBlank(path)){
            //保存上传的信息
            PowerStationFile stationFile = new PowerStationFile();
            stationFile.setPath(path);
            stationFile.setFileName(fileOriginalName);
            stationFile.setStationId(stationId);
            stationService.uploadStationFile(stationFile);
        }else{
            return resultMap.warn().setData(path).message("上传遇到了点小问题!");
        }
        resultMap.success().setData(path).message("上传成功");
        return resultMap;
    }


    @GetMapping("/deleteStationFile/{fileId}")
    public ResultMap deleteStationFile(@PathVariable Long fileId){
        ResultMap resultMap = new ResultMap();
        try{
            String filePath = stationService.deleteStationFile(fileId);
            FileHandleUtil.delete(filePath);
            resultMap.success().message("删除成功").code(200);
        }catch (Exception e){
            resultMap.success().message("删除失败").code(400);
        }
        return resultMap;
    }

    @PostMapping("/uploadAccessPointFile/{stationId}/{picType}")
    public ResultMap uploadAccessPointFile(@PathVariable Long stationId,@PathVariable Integer picType,@RequestParam("file") MultipartFile file) {
        String path = null;
        ResultMap resultMap = new ResultMap();
        String originalFilename = file.getOriginalFilename();
        try{
            if(stationId == null){
                return resultMap.fail().message("请先选择电站!");
            }
            if(picType == null){
                return resultMap.fail().message("请先选择图片类别!");
            }

            if(StringUtils.isBlank(originalFilename)){
                return resultMap.fail().message("文件名不能为空!");
            }
            path = FileHandleUtil.upload(file.getInputStream(), originalFilename);
            if(StringUtils.isNotBlank(path)){
                //保存上传的信息
                GirdAccessFile girdAccessFile = new GirdAccessFile();
                girdAccessFile.setFileUrl(path);
                girdAccessFile.setStationId(stationId);
                girdAccessFile.setPicType(picType);
                girdAccessFile.setPicName(originalFilename.substring(0,originalFilename.lastIndexOf(".")));
                stationService.uploadAccessImg(girdAccessFile);
            }
        }catch (Exception e){
            logger.error("上传图片失败",e);
            resultMap.fail().message("上传图片失败");
        }
        resultMap.success().setData(path).message("上传成功");
        return resultMap;
    }

    @GetMapping("/getStationDevice")
    public ResultMap getStationDevice(@RequestParam(required = false,defaultValue = "1") Integer pageNo,
                            @RequestParam(required = false,defaultValue = "20") Integer pageSize,
                            @RequestParam("stationId") Long stationId,
                            String devicename){
        ResultMap resultMap = new ResultMap();
        try{
            Map<String,Object> param = Maps.newHashMap();
            if(StringUtils.isNotBlank(devicename)){
                param.put("deviceName",devicename);
            }
            List<PowerStationDevice> deviceList = stationService.getStationDevice(stationId,pageNo,pageSize,param);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("deviceList",deviceList);
            Page page = new Page();
            page.setPage(pageNo);
            page.setPageSize(pageSize);
            page.setCount(stationService.getStationDeviceCount(stationId,param));
            jsonObject.put("page",page);
            resultMap.success().setData(jsonObject).message("查询成功").code(200);
        }catch (Exception e){
            logger.error("查询电站设备列表失败",e);
            resultMap.fail().message("查询失败");
        }
        return resultMap;
    }

    @GetMapping("/template/{stationId}")
    public ResultMap template(@PathVariable Long stationId,HttpServletResponse response) throws IOException {
        ResultMap resultMap = new ResultMap();
        if(stationId == null){
            return resultMap.fail().message("请先选择电站!");
        }
        HSSFWorkbook wb = new HSSFWorkbook();
        PowerStation station = stationService.getStation(stationId);
        String name = "";
        if(station == null){
            return resultMap.fail().message("电站不存在");
        }
        stationTemplateService.createPositionSheet(wb);
        switch (station.getStationType()){
            case "1":
                name = "地面电站模板";
                stationTemplateService.createGroundStationTmp(wb);
                break;
            case "2":
                name = "山面电站模板";
                stationTemplateService.createGroundStationTmp(wb);
                break;
            case "3":
                name = "农光电站模板";
                stationTemplateService.createAgricultureStationTmp(wb);
                break;
            case "4":
                name = "渔光电站模板";
                stationTemplateService.createFishStationTmp(wb);
                break;
            case "5":
                name = "漂浮电站模板";
                stationTemplateService.createFloatStationTmp(wb);
                break;
            case "6":
                name = "分布式电站模板";
                stationTemplateService.createDistributedStationTmp(wb);
                break;
            case "7":
                name = "扶贫电站模板";
                stationTemplateService.createPoorStationTmp(wb);
                break;
            case "8":
                name = "户用分布式电站模板";
                stationTemplateService.createUserDistributedStationTmp(wb);
                break;
        }

        stationTemplateService.createBuildSheet(wb);
        stationTemplateService.createConstructSheet(wb);
        stationTemplateService.createSuperviseSheet(wb);
        stationTemplateService.createGirdSheet(wb);
        //输出Excel文件
        OutputStream output = response.getOutputStream();
        response.reset();
        String fileName = name+".xls";
        response.setContentType("application/msexcel;charset=UTF-8");
        response.setHeader("Content-Disposition", "attachment; fileName="+  fileName +";filename*=utf-8''"+ URLEncoder.encode(fileName,"UTF-8"));
        wb.write(output);
        output.close();
        return null;
    }

    @PostMapping("/import/{stationId}")
    public ResultMap importExcelData(@PathVariable Long stationId,@RequestParam("file") MultipartFile file){
        ResultMap resultMap = new ResultMap();
        try{
            if(stationId == null){
                return resultMap.fail().message("请先选择电站!");
            }
            String fileName = file.getOriginalFilename();
            if(StringUtils.isNotBlank(fileName)){
                Workbook workbook;
                if (fileName.endsWith("xlsx")){
                    workbook = new XSSFWorkbook(file.getInputStream());
                    stationService.importExcelData(stationId,workbook);
                    resultMap.success().message("导入成功");
                }else if(fileName.endsWith("xls")){
                    workbook = new HSSFWorkbook(file.getInputStream());
                    stationService.importExcelData(stationId,workbook);
                    resultMap.success().message("导入成功");
                }else{
                    resultMap.fail().message("文件格式错误").code(400);
                }
            }
        }catch (Exception e){
            if(e instanceof ParseException){
                logger.error("导入电站信息失败,转换错误",e);
                return resultMap.fail().message("导入失败,请检查文件格式是否正确!");
            }else{
                logger.error("导入电站信息失败",e);
                return resultMap.fail().message("导入失败!");
            }
        }
        return resultMap;
    }

    @GetMapping("/download/{fileId}")
    public ResultMap download(@PathVariable Long fileId,HttpServletRequest request, HttpServletResponse response) {
        response.setContentType("text/html;charset=utf-8");
        try {
            request.setCharacterEncoding("UTF-8");
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        }
        PowerStationFile file = fileMapper.selectByPrimaryKey(fileId);
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        String downLoadPath = file.getPath();
        try {
            long fileLength = new File(downLoadPath).length();
            response.setContentType("application/x-msdownload;");
            response.setHeader("Content-disposition", "attachment; filename=" + new String(file.getFileName().getBytes("utf-8"), "ISO8859-1"));
            response.setHeader("Content-Length", String.valueOf(fileLength));
            bis = new BufferedInputStream(new FileInputStream(downLoadPath));
            bos = new BufferedOutputStream(response.getOutputStream());
            byte[] buff = new byte[2048];
            int bytesRead;
            while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
                bos.write(buff, 0, bytesRead);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (bis != null)
                try {
                    bis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            if (bos != null)
                try {
                    bos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
        }
        return null;
    }

    @GetMapping("/deleteAssetsPic/{id}")
    public ResultMap deleteAssetsPic(@PathVariable Long id){
        ResultMap resultMap = new ResultMap();
        try{
            stationService.deleteAssetsPic(id);
        }catch (Exception e){
            logger.error("deleteAssetsPic error ",e);
            resultMap.fail().message("删除失败");
        }
        return resultMap.success().message("删除成功!");
    }

    @GetMapping("/getStationDeviceName/{stationId}")
    public ResultMap getStationDeviceName(@PathVariable Long stationId){
        ResultMap resultMap = new ResultMap();
        try{
            if(stationId == null){
                return resultMap.fail().message("请先选择电站!");
            }
            List<Map<String,Object>> deviceNameList = stationService.getDeviceName(stationId);
            resultMap.setData(deviceNameList).success();
        }catch (Exception e){
            logger.error("获取设备位置信息失败",e);
            return resultMap.fail().message("获取设备位置信息失败!");
        }
        return resultMap;
    }

}
