var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
let config = require("../config");
const { root, appTitle } = config;
const status = require("../utils/status");
const httpStatus = status.httpStatus;
const styleServiceImpl = require("../service/style-service-impl");
var fileUtil = require("../utils/file-util");
const zlib = require("zlib");
const obj2gltf = require("obj2gltf");
let DIR_ROOT = process.cwd();
/* GET home page. */
router.get("", function (req, res, next) {
  res.redirect("/auth/login");
});
/**
 * @fileOverview 用户登录注册模块
 * @author LJ
 * @version 0.1
 */
router.get("/auth/login", function (req, res, next) {
  res.render("login");
});
/****
 * @description 注册
 */
router.get("/auth/register", function (req, res, next) {
  res.render("register");
});
/****
 * @description 后台管理中心
 */
router.get("/dashboard", function (req, res, next) {
  res.render("dashboard");
});
/**
 * @description 编辑工具
 */
router.get("/apps/edit/vector", function (req, res, next) {
  res.writeHead(200, { "Content-Type": "text/html" });
  let filepath = `${DIR_ROOT}${path.sep}public${path.sep}apps${path.sep}edit${path.sep}index.html`;
  fs.readFile(filepath, "utf-8", function (err, data) {
    if (err) {
      next(err);
    }
    res.end(data);
  });
});
/**
 * @description 地图编辑器工具
 */
router.get("/apps/map/edit", function (req, res, next) {
  res.writeHead(200, { "Content-Type": "text/html" });
  let filepath = `${DIR_ROOT}${path.sep}public${path.sep}apps${path.sep}map${path.sep}index.html`;
  fs.readFile(filepath, "utf-8", function (err, data) {
    if (err) {
      next(err);
    }
    res.end(data);
  });
});
/****
 * @description 注册
 */
router.get(`/styles/v1/:id.html`, async function (req, res, next) {
  try {
    const { id } = req.params || {};
    const { access_token: accessToken } = req.query || {};
    let result = await styleServiceImpl.findStyleJSONByID(id, false);
    if (result) {
      res.render("preview", {
        title: `${result.name} | ${appTitle}`,
        host: root,
        accessToken,
        id: id,
        srid: result.srid,
      });
    } else {
      res.status(httpStatus.notFound.code);
      res.send(httpStatus.notFound.message);
    }
  } catch (err) {
    res.status(httpStatus.internalServerError.code);
    res.send(httpStatus.internalServerError.message);
  }
});

/* GET users listing. */
// router.get('/test', async function (req, res, next) {
//   var buffer = await fileUtil.readBuffer("D:\\Cell_Function.geojson");
//   var text = await fileUtil.readFile("D:\\Cell_Function.geojson");
//   res.header("Content-Type", "bytes");//application/x-protobuf

//   //data = JSON.parse(text);
//   res.header("Content-Encoding", "gzip");
//   res.status(200);
//   var str = "深入浅出node.js";
//   var buffer = await fileUtil.readBuffer("D:\\anli645887.fmap");
//   var d = {
//     a: "深入浅出node.js"
//   }
//   res.send(zlib.gzipSync(Buffer.from(JSON.stringify(d))));
//   //res.send(zlib.gzipSync(Buffer.from(JSON.stringify(data))) );
// });
router.get("/test", async function (req, res, next) {
  // const filePath =
  //   "E:\\wasm\\basis_transcoder.wasm";
  // const buffer = await fileUtil.readBuffer(filePath);
  // var BasisModule = {
  //   wasmBinary: buffer,
  //   onRuntimeInitialized: Promise.resolve,
  // };
  // BASIS(BasisModule).then(async () => {
  //   BasisModule.initializeBasis();

  //   if (BasisModule.KTX2File === undefined) {
  //     console.warn(
  //       "THREE.KTX2Loader: Please update Basis Universal transcoder."
  //     );
  //   }
  //   const filePath2 =
  //     "E:\\wasm\\sample_etc1s.ktx2";
  //   const buffer2 = await fileUtil.readBuffer(filePath2);
  //   var array = new Uint8Array(buffer2);
  //   const ktx2File = new BasisModule.KTX2File(array);
  //   if (!ktx2File.isValid()) {
  //     cleanup();
  //     throw new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
  //   }
  //   const basisFormat = ktx2File.isUASTC();
	// 	const width = ktx2File.getWidth();
	// 	const height = ktx2File.getHeight();
	// 	const levels = ktx2File.getLevels();
	// 	const hasAlpha = ktx2File.getHasAlpha();
	// 	const dfdTransferFn = ktx2File.getDFDTransferFunc();
	// 	const dfdFlags = ktx2File.getDFDFlags();
  // });
  // eslint-disable-line no-undef
  // const fs = require("fs");
  // let src = new Uint8Array(fs.readFileSync("./test.wasm"));
  // var mymemory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
  // var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
  // const env = {
  //   memoryBase: 0,
  //   tableBase: 0,
  //   memory: mymemory,
  //   table: tbl,
  //   abort: () => {
  //     throw "abort";
  //   },
  //   js_add: (x, y) => {
  //     return x + y;
  //   },
  //   vtest: () => {
  //     return env.memoryBase + 55;
  //   },
  //   mtest: () => {
  //     return env.memory;
  //   },
  //   tbtest: (x) => {
  //     if (x == 0) return env.table.get(0);
  //     else return env.table.get(1);
  //   },
  // };
  // WebAssembly.instantiate(src, { env: env })
  //   .then((result) => {
  //     var va = result.instance.exports.varaddr();
  //     console.log("va:" + va);
  //     var i32 = new Uint32Array(mymemory.buffer);
  //     i32[0] = 99;
  //     i32[1] = 100;
  //     var ma = result.instance.exports.memaddr();
  //     console.log("ma:" + ma);
  //     var maa = result.instance.exports.memaddr_add();
  //     console.log("maa:" + maa);
  //     tbl.set(0, result.instance.exports.pfunc1);
  //     tbl.set(1, result.instance.exports.pfunc2);
  //     console.log(tbl.get(0));
  //     console.log(tbl.get(1)());
  //     var tb = result.instance.exports.memtb(0);
  //     console.log("tb:" + tb);
  //     console.log(tbl.get(1)());
  //     console.log(result.instance.exports.add(2000, 21));
  //   })
  //   .catch((e) => console.log(e));
  res.send("AAAA");
  // res.status(200);
  // var d = {
  //   "height": {
  //     "byteOffset": 88,
  //     "componentType": "FLOAT",
  //     "type": "SCALAR"
  //   },
  //   "id": [
  //     "9980",
  //     "15797",
  //     "15805",
  //     "15827",
  //     "17670",
  //     "17671",
  //     "22009",
  //     "23100",
  //     "23423",
  //     "25409",
  //     "25828",
  //     "36277",
  //     "42094",
  //     "42102",
  //     "42124",
  //     "43967",
  //     "43968",
  //     "48306",
  //     "49397",
  //     "49720",
  //     "51706",
  //     "52125"
  //   ],
  //   "name": [
  //     "火星科技5332701",
  //     "火星科技5345857",
  //     "火星科技5345865",
  //     "火星科技5345887",
  //     "火星科技5349620",
  //     "火星科技5349621",
  //     "火星科技5358274",
  //     "火星科技5360841",
  //     "火星科技5361164",
  //     "火星科技5368064",
  //     "火星科技5369399",
  //     "火星科技15630184",
  //     "火星科技15643340",
  //     "火星科技15643348",
  //     "火星科技15643370",
  //     "火星科技15647103",
  //     "火星科技15647104",
  //     "火星科技15655757",
  //     "火星科技15658324",
  //     "火星科技15658647",
  //     "火星科技15665547",
  //     "火星科技15666882"
  //   ],
  //   "objectid": {
  //     "byteOffset": 0,
  //     "componentType": "INT",
  //     "type": "SCALAR"
  //   },
  //   "remark": [
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D",
  //     "Mars3D"
  //   ]
  // }

  // var file = `${DIR_ROOT}${path.sep}routes${path.sep}box${path.sep}box.obj`;
  // // obj2gltf(file).then(function (gltf) {
  // //   const data = Buffer.from(JSON.stringify(gltf));
  // //   fs.writeFileSync("E:\\out\\model.gltf", data);
  // // });
  // const options = {
  //   binary: true,
  // };
  // obj2gltf(file, options).then(function (glb) {
  //   fs.writeFileSync("E:\\out\\model.glb", glb);
  // });
  // // var buffer = Buffer.from(JSON.stringify(d), "utf8");
  // // var uin8 = new Uint8Array(buffer.buffer)
  // // res.header('Content-Type', 'application/x-protobuf');
  // // res.send(buffer);
});

module.exports = router;
