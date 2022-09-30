const path = require("path");
/***
 * @description 服务器全局配置
 * @author LJ
 * @version 1.0
 */
//服务器全局配置
const APP_CONFIG = {
  ROOT: "http://127.0.0.1", //服务地址url
  RESOURCE_ROOT: `D:${path.sep}gisserver`, //雪碧图和缩略图以及字体等资源根目录
  RABBITMQ_SERVER: "amqp://admin:123456@127.0.0.1:5672", //rabbitmq消息队列服务器配置
  EXPIRE_HOUR: 2, //jwt过期小时
  //数据库配置
  DB: {
    host: "127.0.0.1",
    user: "postgres",
    password: "123456",
    database: "cs_gis",
    port: 5432,
    max: 20, // 连接池最大连接数
    idleTimeoutMillis: 30000, // 连接最大空闲时间 3s
    connectionTimeoutMillis: 0,
  },
  VT: {
    //用于将数据坐标变换与vt切片规则坐标系一致
    crsArray: [2437],
  },
};
if (process.env.APP_VER == "public") {
  //阿里云线上版本配置
  APP_CONFIG.ROOT = "http://www.zcloud-tech.com:3000";
  APP_CONFIG.RESOURCE_ROOT = "/usr/local/src/zcloud";
  APP_CONFIG.RABBITMQ_SERVER = "amqp://admin:123456@172.20.244.68:5672";
  APP_CONFIG.EXPIRE_HOUR = 2;
  APP_CONFIG.DB.host = "172.20.244.68";
}
const { ROOT, RESOURCE_ROOT, RABBITMQ_SERVER, EXPIRE_HOUR, DB, VT } =
  APP_CONFIG;
/***
 * @description rest api
 */
const URI_ROOT = "/api/v1";
/****
 * @description 服务器根目录DIR
 */
let DIR_ROOT = process.cwd();

//TRUNCATE TABLE table_name RESTART IDENTITY;
module.exports = {
  appTitle: "智云地图",
  uploadFileSize: 500 * 1024 * 1024, //文件上传大小500Mb
  dbConfig: DB, //数据库配置
  jwtExpires: 60 * 60 * EXPIRE_HOUR, //登录jwt 授权时效2小时
  uriRoot: URI_ROOT, //
  root: ROOT, //服务器根地址
  imageUrl: ROOT + "/images/", //图片网络地址根目录
  imageDir: DIR_ROOT + "/public/images/", //图片存储根目录
  UPLOAD_ROOT: RESOURCE_ROOT + `${path.sep}temp${path.sep}upload`,
  rabbitServer: RABBITMQ_SERVER,
  secret: "4fd0badf4f86ed1b94e2c026313d4c13", //md5('zcloud'),jwt加密密钥
  authorizationKey: "authorization", //jwt header auth key
  tilesStoreMode: "scatter", //切片文件存储模式scatter|compact,scatter表示离散文件存储,compact表示紧凑db文件存储2020-12-21
  unlogin: [
    /viewDatavis\/*/,
    /datavis\/*/,
    /api\/*/,
    /map\/*/,
    /styles\/*/,
    /wmts\/*/,
    /indoormap\/*/,
    /resources\/*/, //资源
    "/",
    "/keys",
    "/test",
    "/home",
    "/docs",
    "/data",
    "/map",
    "/apps/edit/vector",
    "/apps/map/edit",
    /images\/*/,
    "/images/choose_icon.png",
    "/dashboard",
    "/dashboard/",
    // '/app/edit/data',
    // '/app/indoor/platform',
    // '/app/import/tool',
    // '/app/map/edit',
    "/auth/login",
    "/auth/register",
    "/auth/verification_signin",
    "/auth/forgot",
    "/auth/forgot/phone",
    "/auth/forgot/sms",
    "/auth/captcha",
    "/auth/reset-pwd",
    "/auth/reset-phone-pwd",
    "/auth/active",
    "/auth/terms",
    "/auth/emailcheck",
    "/auth/phonecheck",
    // '/app/datavis/edit',
  ], //不控制API
  MQ_COUNT: 1, //启动消费者服务数量
  /***
   * 雪碧图存储根目录
   * 目录结构类似:
   * /user/sprites/{style-id}/sprite@1x.png|sprite@2x.png
   * /user/sprites/{style-id}/sprite@1x.json|sprite@2x.json
   */
  spriteRootDir: `${RESOURCE_ROOT}${path.sep}sprites`,
  /***
   * @description 地图style缩略图存储根目录,名称为{style-id}.png
   *
   */
  thumbRootDir: `${RESOURCE_ROOT}${path.sep}thumbs`,
  /***
   * @description 字体资源存储根目录,格式`{fontRootDir}/${uid}/xx.ttf|.otf`,字体切片存储目录格式`{fontRootDir}/${uid}/font_name
   */
  fontRootDir: `${RESOURCE_ROOT}${path.sep}fonts`,
  /***
   * @description 矢量切片根目录,格式`{tileRootDir}/${tile_id}/${gridset_id}`,
   */
  tileRootDir: `${RESOURCE_ROOT}${path.sep}tiles`,
  /***
   * @description 栅格数据存储目录
   * 说明:1.rasterRootDir为根目录;
   *      2.具体数据存储格式`{rasterRootDir}/${uid}/${guid}`,
   */
  rasterRootDir: `${RESOURCE_ROOT}${path.sep}rasters`,
  /***
   * @description 影像配置
   */
  raster: {
    blockSize: 128, //影像数据默认分块大小[64, 128, 256, 512],//影像数据分块大小
    // GRA_NearestNeighbour
    // 选取最邻近的像元
    // GRA_Bilinear
    // 邻近4个像元加权平均
    // GRA_Cubic
    // 邻近的16个像元平均
    // GRA_CubicSpline
    // 16个像元的三次B样条
    // GRA_Lanczos
    // 36个像元Lanczos窗口
    // GRA_Average
    // 求均值
    // GRA_Mode
    // 出现频率最多的像元值
    resample: "", //金字塔重采样算法
  },
  vtConfig: VT,
  /***
   * 2022-09-05
   * @description 三维切片根目录,格式`{tile3dRootDir}/${tileset3d_id}`,
   */
  tile3dRootDir: `${RESOURCE_ROOT}${path.sep}tiles3d`,
  /***
   * 2022-09-14
   * @description 单体模型根目录,格式`{modelRootDir}/${model_id}`,
   */
  modelRootDir: `${RESOURCE_ROOT}${path.sep}models`,
  /**
   * 是否需要压缩生成的缓存切片文件,一般用于矢量pbf,3dtiles,以及字体切片等二进制文件
   */
  isGzipTile: true,
  /***
   * 四叉树
   */
  quadTree: {
    maxLevel: 5,
    maxNum: 5000,
  },
  frustum: {
    sseDenominator: 0.5635179189902909,
    sse: 16,
    height: 936, //视口高度,单位为像素
  },
  generator: "zcloud",
  //3d 相关配置
  tile3dConf: {
    offsetZoom: 4,
    grid: {
      num: 4, //网格索引分块数量
    },
    storeTexture: false, //是否把纹理存储到磁盘上,目前主要用于osgb纹理转换调试,默认false
    batchCount: 10, //生成3dtile批量更新数据库数量,目前用于osgb
    //是否为每块切片存储为一个单独的tilesetjson,目前用于osgb,true表示一个osgb文件对应一个json,默认false
    singleJson: false,
  },
  softAuth: {
    // secret: "8df4a9b6a73cd1ce5253c3d36d1c6c38", //密钥
    // active_code: "cpkcKulVL/ndXxEzFdRYzq09N58=", //激活码
    // expire_date: "2055-12-31", //到期日期
    secret: "5db0c12ded7f6c565f3cdd3dfebc241d", //个人
    active_code: "LO3s0WglQsPXfIH0nZT4joR5qCA=",
    expire_date: "2055-12-31",
    // secret: "f3c8bbbcb9486dd064daec5cfea32391",//云服务器
    // active_code: "RZG/LA2kNIqcR/mPLZGVMiq3cuM=",
    // expire_date: "2022-12-31"
    isRegister: false, //2022-02-13 true表示需要用seret等参数进行授权验证,false表示不需要，目前到期日期2022-12-31
  },
};
