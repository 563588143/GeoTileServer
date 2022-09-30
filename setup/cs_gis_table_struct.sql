/*
 Navicat Premium Data Transfer

 Source Server         : local-PG
 Source Server Type    : PostgreSQL
 Source Server Version : 90602
 Source Host           : localhost:5432
 Source Catalog        : cs_gis
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 90602
 File Encoding         : 65001

 Date: 11/12/2020 14:52:39
*/

-- ----------------------------
-- SEQUENCE structure for cs_apikey_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_apikey_id_seq";
CREATE SEQUENCE "public"."cs_apikey_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_apikey_id_seq"', 1, true);


ALTER SEQUENCE "public"."cs_apikey_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_apikey
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_apikey";
CREATE TABLE "public"."cs_apikey" (
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "token" varchar(255) COLLATE "pg_catalog"."default",
  "is_default" bool DEFAULT false,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "uid" int4,
  "usage" varchar(32) COLLATE "pg_catalog"."default",
  "id" int4 NOT NULL DEFAULT nextval('cs_apikey_id_seq'::regclass)
)
;
COMMENT ON COLUMN "public"."cs_apikey"."name" IS '名称';
COMMENT ON COLUMN "public"."cs_apikey"."token" IS 'api key';
COMMENT ON COLUMN "public"."cs_apikey"."is_default" IS '是否默认token';
COMMENT ON COLUMN "public"."cs_apikey"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."cs_apikey"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."cs_apikey"."uid" IS '用户ID';
COMMENT ON COLUMN "public"."cs_apikey"."usage" IS 'token类型,api时pk,web时tk';
COMMENT ON COLUMN "public"."cs_apikey"."id" IS '主键';

-- ----------------------------
-- SEQUENCE structure for cs_layer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_layer_id_seq";
CREATE SEQUENCE "public"."cs_layer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_layer_id_seq"', 1, true);


ALTER SEQUENCE "public"."cs_layer_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_dataset
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_dataset";
CREATE TABLE "public"."cs_dataset" (
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "table_name" varchar(255) COLLATE "pg_catalog"."default",
  "version" int4 NOT NULL DEFAULT 1,
  "min_x" float8,
  "max_x" float8,
  "min_y" float8,
  "max_y" float8,
  "srid" int4,
  "count" int8,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "id" int4 NOT NULL DEFAULT nextval('cs_layer_id_seq'::regclass),
  "type" int2,
  "uid" int4
)
;
COMMENT ON COLUMN "public"."cs_dataset"."name" IS '数据集名称,用于显示';
COMMENT ON COLUMN "public"."cs_dataset"."table_name" IS '表名，格式"data"+"_"+key，key为20位的全局唯一整数的字符串';
COMMENT ON COLUMN "public"."cs_dataset"."version" IS '版本,从1开始';
COMMENT ON COLUMN "public"."cs_dataset"."min_x" IS 'x最小值';
COMMENT ON COLUMN "public"."cs_dataset"."max_x" IS 'x最大值';
COMMENT ON COLUMN "public"."cs_dataset"."min_y" IS 'y最小值';
COMMENT ON COLUMN "public"."cs_dataset"."max_y" IS 'y最大值';
COMMENT ON COLUMN "public"."cs_dataset"."srid" IS '空间参考线SRID值';
COMMENT ON COLUMN "public"."cs_dataset"."count" IS '记录数';
COMMENT ON COLUMN "public"."cs_dataset"."create_time" IS '创建日期时间';
COMMENT ON COLUMN "public"."cs_dataset"."update_time" IS '更新日期时间';
COMMENT ON COLUMN "public"."cs_dataset"."id" IS '主键,自增加';
COMMENT ON COLUMN "public"."cs_dataset"."type" IS '图层类型 1表示点，2表示线，3表示多边形';
COMMENT ON COLUMN "public"."cs_dataset"."uid" IS '用户UID,目前未用到';

-- ----------------------------
-- SEQUENCE structure for cs_field_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_field_id_seq";
CREATE SEQUENCE "public"."cs_field_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_field_id_seq"', 1, true);



ALTER SEQUENCE "public"."cs_field_id_seq" OWNER TO "postgres";
-- ----------------------------
-- Table structure for cs_field
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_field";
CREATE TABLE "public"."cs_field" (
  "id" int4 NOT NULL DEFAULT nextval('cs_field_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "table_name" varchar(255) COLLATE "pg_catalog"."default",
  "type" int4,
  "width" int4,
  "is_null" bool,
  "precision" int4,
  "is_gid" bool,
  "is_sys" bool,
  "dataset_id" int4
)
;
COMMENT ON COLUMN "public"."cs_field"."name" IS '字段名称';
COMMENT ON COLUMN "public"."cs_field"."table_name" IS '表名';
COMMENT ON COLUMN "public"."cs_field"."type" IS '类型';
COMMENT ON COLUMN "public"."cs_field"."width" IS '长度';
COMMENT ON COLUMN "public"."cs_field"."is_null" IS '是为为NULL';
COMMENT ON COLUMN "public"."cs_field"."precision" IS '精度';

-- ----------------------------
-- SEQUENCE structure for cs_font_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_font_id_seq";
CREATE SEQUENCE "public"."cs_font_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_font_id_seq"', 1, true);



ALTER SEQUENCE "public"."cs_font_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_font
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_font";
CREATE TABLE "public"."cs_font" (
  "id" int4 NOT NULL DEFAULT nextval('cs_font_id_seq'::regclass),
  "family_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "font_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "file_name" varchar(255) COLLATE "pg_catalog"."default",
  "is_default" bool DEFAULT false,
  "uid" int4
)
;
COMMENT ON COLUMN "public"."cs_font"."id" IS '主键,自增加';
COMMENT ON COLUMN "public"."cs_font"."family_name" IS '字体家族名称';
COMMENT ON COLUMN "public"."cs_font"."font_name" IS '字体名称,格式:family_name+" "+style_name';
COMMENT ON COLUMN "public"."cs_font"."file_name" IS '文件名称';
COMMENT ON COLUMN "public"."cs_font"."is_default" IS '是否为默认字体,true表示系统默认字体';
COMMENT ON COLUMN "public"."cs_font"."uid" IS '用户ID';

-- ----------------------------
-- SEQUENCE structure for cs_gridset_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_gridset_id_seq";
CREATE SEQUENCE "public"."cs_gridset_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_gridset_id_seq"', 1, true);



ALTER SEQUENCE "public"."cs_gridset_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_gridset
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_gridset";
CREATE TABLE "public"."cs_gridset" (
  "id" int4 NOT NULL DEFAULT nextval('cs_gridset_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "srid" int4,
  "tile_width" int2 DEFAULT 256,
  "tile_height" int2 DEFAULT 256,
  "min_x" float8,
  "min_y" float8,
  "max_x" float8,
  "max_y" float8
)
;
COMMENT ON COLUMN "public"."cs_gridset"."id" IS '主键';
COMMENT ON COLUMN "public"."cs_gridset"."name" IS '网格集名称,名称唯一';
COMMENT ON COLUMN "public"."cs_gridset"."srid" IS '坐标系编号';
COMMENT ON COLUMN "public"."cs_gridset"."tile_width" IS '宽度';
COMMENT ON COLUMN "public"."cs_gridset"."tile_height" IS '高度';
COMMENT ON COLUMN "public"."cs_gridset"."min_x" IS '最小范围X';
COMMENT ON COLUMN "public"."cs_gridset"."min_y" IS '最小范围Y';
COMMENT ON COLUMN "public"."cs_gridset"."max_x" IS '最大范围X';
COMMENT ON COLUMN "public"."cs_gridset"."max_y" IS '最大范围Y';

-- ----------------------------
-- SEQUENCE structure for cs_gridset_detail_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_gridset_detail_id_seq";
CREATE SEQUENCE "public"."cs_gridset_detail_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_gridset_detail_id_seq"', 1, true);



ALTER SEQUENCE "public"."cs_gridset_detail_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_gridset_detail
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_gridset_detail";
CREATE TABLE "public"."cs_gridset_detail" (
  "id" int4 NOT NULL DEFAULT nextval('cs_gridset_detail_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "level" int2 DEFAULT 0,
  "resolution" numeric(100,50),
  "scale" float8,
  "gridset_id" int4
)
;
COMMENT ON COLUMN "public"."cs_gridset_detail"."id" IS '主键';
COMMENT ON COLUMN "public"."cs_gridset_detail"."name" IS '名称';
COMMENT ON COLUMN "public"."cs_gridset_detail"."level" IS '级别';
COMMENT ON COLUMN "public"."cs_gridset_detail"."resolution" IS '分辨率';
COMMENT ON COLUMN "public"."cs_gridset_detail"."scale" IS '比例尺';

-- ----------------------------
-- Table structure for cs_srs_detail
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_srs_detail";
CREATE TABLE "public"."cs_srs_detail" (
  "srid" int4 NOT NULL,
  "bounds" json,
  "lnglat_bounds" json
)
;
COMMENT ON COLUMN "public"."cs_srs_detail"."srid" IS '坐标系ID,';
COMMENT ON COLUMN "public"."cs_srs_detail"."bounds" IS '坐标系范围,格式：{min_x:最小X,min_y:最小Y，max_x:最大X,max_y:最大Y}';
COMMENT ON COLUMN "public"."cs_srs_detail"."lnglat_bounds" IS '坐标系对应的地理范围,格式：{min_x:最小X,min_y:最小Y，max_x:最大X,max_y:最大Y}';

-- ----------------------------
-- Table structure for cs_style
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_style";
CREATE TABLE "public"."cs_style" (
  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "zoom" float4 DEFAULT 0,
  "bearing" float4,
  "pitch" float4,
  "center" json,
  "visibility" varchar(32) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "uid" int4,
  "version" int2 DEFAULT 8,
  "is_template" bool DEFAULT false,
  "layers" json,
  "light" json,
  "metadata" json,
  "sources" json,
  "sprite" json,
  "srid" int4 DEFAULT 3857,
  "username" varchar(64) COLLATE "pg_catalog"."default",
  "trees" json
)
;
COMMENT ON COLUMN "public"."cs_style"."id" IS '主键,uuid';
COMMENT ON COLUMN "public"."cs_style"."name" IS '样式名称';
COMMENT ON COLUMN "public"."cs_style"."zoom" IS '层级';
COMMENT ON COLUMN "public"."cs_style"."bearing" IS '旋转角度';
COMMENT ON COLUMN "public"."cs_style"."pitch" IS '倾斜角度';
COMMENT ON COLUMN "public"."cs_style"."center" IS '中心点';
COMMENT ON COLUMN "public"."cs_style"."visibility" IS '公开或私有,值为public或private';
COMMENT ON COLUMN "public"."cs_style"."uid" IS '用户uid';
COMMENT ON COLUMN "public"."cs_style"."version" IS '版本,只能为8';
COMMENT ON COLUMN "public"."cs_style"."is_template" IS '是否为模板,true表示标准模板';
COMMENT ON COLUMN "public"."cs_style"."light" IS '目前未用到';
COMMENT ON COLUMN "public"."cs_style"."metadata" IS '元数据结构';
COMMENT ON COLUMN "public"."cs_style"."sources" IS '切片源';
COMMENT ON COLUMN "public"."cs_style"."sprite" IS '雪碧图配置JSON数据,pixelRatio=1,已废弃';
COMMENT ON COLUMN "public"."cs_style"."srid" IS '坐标系ID';
COMMENT ON COLUMN "public"."cs_style"."username" IS '用户名';
COMMENT ON COLUMN "public"."cs_style"."trees" IS '图层树';

-- ----------------------------
-- SEQUENCE structure for cs_task_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_task_id_seq";
CREATE SEQUENCE "public"."cs_task_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_task_id_seq"', 1, true);


ALTER SEQUENCE "public"."cs_task_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_task
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_task";
CREATE TABLE "public"."cs_task" (
  "id" int4 NOT NULL DEFAULT nextval('cs_task_id_seq'::regclass),
  "success_count" int4,
  "total_count" int4,
  "fail_count" int4,
  "group_id" varchar(100) COLLATE "pg_catalog"."default",
  "dataset_id" int4,
  "dataset_name" varchar(255) COLLATE "pg_catalog"."default",
  "status" int2,
  "create_time" timestamp(0),
  "update_time" timestamp(0),
  "uid" int4,
  "log" varchar(255) COLLATE "pg_catalog"."default",
  "current_count" int4,
  "detail" varchar COLLATE "pg_catalog"."default",
  "table_name" varchar(255) COLLATE "pg_catalog"."default",
  "type" varchar(255) COLLATE "pg_catalog"."default"
)
;
COMMENT ON COLUMN "public"."cs_task"."id" IS '主键';
COMMENT ON COLUMN "public"."cs_task"."success_count" IS '成功数';
COMMENT ON COLUMN "public"."cs_task"."total_count" IS '总数';
COMMENT ON COLUMN "public"."cs_task"."fail_count" IS '失败数';
COMMENT ON COLUMN "public"."cs_task"."group_id" IS '任务组编号,目前未用到';
COMMENT ON COLUMN "public"."cs_task"."dataset_id" IS '数据集ID';
COMMENT ON COLUMN "public"."cs_task"."dataset_name" IS '数据集名称';
COMMENT ON COLUMN "public"."cs_task"."status" IS '任务状态:0表示未开始,1表示处理中,2已完成';
COMMENT ON COLUMN "public"."cs_task"."create_time" IS '创建日期';
COMMENT ON COLUMN "public"."cs_task"."update_time" IS '更新日期';
COMMENT ON COLUMN "public"."cs_task"."uid" IS '创建人UID';
COMMENT ON COLUMN "public"."cs_task"."log" IS '日记信息';
COMMENT ON COLUMN "public"."cs_task"."current_count" IS '当前记录数';
COMMENT ON COLUMN "public"."cs_task"."detail" IS '导入任务详情';
COMMENT ON COLUMN "public"."cs_task"."table_name" IS '表名';
COMMENT ON COLUMN "public"."cs_task"."type" IS '导入任务任务类型,目前值为:vector_import、raster_import';

-- ----------------------------
-- Table structure for cs_tileset
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_tileset";
CREATE TABLE "public"."cs_tileset" (
  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "minzoom" int2,
  "maxzoom" int2,
  "description" varchar(255) COLLATE "pg_catalog"."default",
  "tilejson" varchar(255) COLLATE "pg_catalog"."default" DEFAULT '2.2.0'::character varying,
  "version" varchar(50) COLLATE "pg_catalog"."default" DEFAULT '1.0.0'::character varying,
  "attribution" varchar(255) COLLATE "pg_catalog"."default",
  "scheme" varchar(50) COLLATE "pg_catalog"."default" DEFAULT 'xyz'::character varying,
  "format" varchar(50) COLLATE "pg_catalog"."default" DEFAULT 'pbf'::character varying,
  "is_private" bool DEFAULT false,
  "bounds" json DEFAULT '[-180,-85.0511287798,180,85.0511287798]'::json,
  "center" json,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "uid" int4,
  "gridset_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status" int2 DEFAULT 0,
  "enable_cache" bool DEFAULT false
)
;
COMMENT ON COLUMN "public"."cs_tileset"."id" IS '主键,uuid';
COMMENT ON COLUMN "public"."cs_tileset"."name" IS '名称';
COMMENT ON COLUMN "public"."cs_tileset"."minzoom" IS '最小级别,范围0-20';
COMMENT ON COLUMN "public"."cs_tileset"."maxzoom" IS '最大级别,范围0-20';
COMMENT ON COLUMN "public"."cs_tileset"."description" IS '描述';
COMMENT ON COLUMN "public"."cs_tileset"."tilejson" IS 'TileJSON版本。';
COMMENT ON COLUMN "public"."cs_tileset"."version" IS 'version';
COMMENT ON COLUMN "public"."cs_tileset"."attribution" IS '地图的所有者信息';
COMMENT ON COLUMN "public"."cs_tileset"."scheme" IS 'xyz或tms,目前只支持xyz';
COMMENT ON COLUMN "public"."cs_tileset"."format" IS '只支持pbf';
COMMENT ON COLUMN "public"."cs_tileset"."is_private" IS '是否为私有,true表示私有,预留字段';
COMMENT ON COLUMN "public"."cs_tileset"."bounds" IS '表示地图瓦片的最大范围。这个范围**必须**覆盖到所有的缩放级别。范围用WGS84坐标系下的经纬度来表示，顺序为左、下、右、上。范围值可能是整数或者浮点数。';
COMMENT ON COLUMN "public"."cs_tileset"."center" IS '// **可选**。默认值：null。
    // 第一个值是经度，第二个是纬度（都为WGS84坐标系），第三个是表示缩放级别的整数。
    // 经度和纬度**必须**在bounds范围内。缩放级别**必须**在minzoom和maxzoom之间。
    // 实现可以根据这个值设置地图的默认显示位置。
    // 如果这个值为null，实现可以根据自己的算法自行决定默认位置。';
COMMENT ON COLUMN "public"."cs_tileset"."create_time" IS '创建日期和时间';
COMMENT ON COLUMN "public"."cs_tileset"."update_time" IS '更新日期和时间';
COMMENT ON COLUMN "public"."cs_tileset"."uid" IS '用户UID,目前未用到';
COMMENT ON COLUMN "public"."cs_tileset"."gridset_name" IS '网格矩阵名称,指定生成切片需要的分辨率等参数';
COMMENT ON COLUMN "public"."cs_tileset"."status" IS '切片状态';
COMMENT ON COLUMN "public"."cs_tileset"."enable_cache" IS '是否启用缓存';

-- ----------------------------
-- SEQUENCE structure for cs_tileset_detail_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_tileset_detail_id_seq";
CREATE SEQUENCE "public"."cs_tileset_detail_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_tileset_detail_id_seq"', 1, true);


ALTER SEQUENCE "public"."cs_tileset_detail_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_tileset_detail
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_tileset_detail";
CREATE TABLE "public"."cs_tileset_detail" (
  "id" int4 NOT NULL DEFAULT nextval('cs_tileset_detail_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "dataset_id" int4,
  "fields" json,
  "filter" json,
  "minzoom" int2,
  "maxzoom" int2,
  "tileset_id" varchar(255) COLLATE "pg_catalog"."default",
  "description" varchar(255) COLLATE "pg_catalog"."default",
  "dataset_type" int2
)
;
COMMENT ON COLUMN "public"."cs_tileset_detail"."id" IS '主键,自增加';
COMMENT ON COLUMN "public"."cs_tileset_detail"."name" IS '图层名称,同一矢量切片源不能有重复名称';
COMMENT ON COLUMN "public"."cs_tileset_detail"."dataset_id" IS '数据集ID';
COMMENT ON COLUMN "public"."cs_tileset_detail"."fields" IS '存储矢量切片里需要的字段,格式{fieldname:类型}';
COMMENT ON COLUMN "public"."cs_tileset_detail"."filter" IS '过滤条件,mapbox过滤表达式,预览字段';
COMMENT ON COLUMN "public"."cs_tileset_detail"."minzoom" IS '最小层级,预览字段';
COMMENT ON COLUMN "public"."cs_tileset_detail"."maxzoom" IS '最大层级,,预览字段';
COMMENT ON COLUMN "public"."cs_tileset_detail"."tileset_id" IS '矢量切片源ID';
COMMENT ON COLUMN "public"."cs_tileset_detail"."description" IS '描述';
COMMENT ON COLUMN "public"."cs_tileset_detail"."dataset_type" IS '数据集类型';

-- ----------------------------
-- Table structure for cs_tileset_task
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_tileset_task";
CREATE TABLE "public"."cs_tileset_task" (
  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status" int2,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "uid" int4,
  "detail" json NOT NULL,
  "current" json,
  "log" varchar(255) COLLATE "pg_catalog"."default",
  "success_count" int8 DEFAULT 0,
  "total_count" int8 DEFAULT 0,
  "fail_count" int8 DEFAULT 0,
  "current_count" int8 DEFAULT 0
)
;
COMMENT ON COLUMN "public"."cs_tileset_task"."id" IS 'tileset_id,缓存切片任务表';
COMMENT ON COLUMN "public"."cs_tileset_task"."name" IS '任务名称,默认为切片数据源名称';
COMMENT ON COLUMN "public"."cs_tileset_task"."status" IS '任务状态';
COMMENT ON COLUMN "public"."cs_tileset_task"."create_time" IS '创建任务日期';
COMMENT ON COLUMN "public"."cs_tileset_task"."update_time" IS '更新任务日期';
COMMENT ON COLUMN "public"."cs_tileset_task"."uid" IS '用户ID';
COMMENT ON COLUMN "public"."cs_tileset_task"."detail" IS '格式:{min_zoom,max_zoom}';
COMMENT ON COLUMN "public"."cs_tileset_task"."current" IS '记录当前正在处理的的tile,格式{x,y,z}';
COMMENT ON COLUMN "public"."cs_tileset_task"."log" IS '日志';
COMMENT ON COLUMN "public"."cs_tileset_task"."success_count" IS '成功数';
COMMENT ON COLUMN "public"."cs_tileset_task"."total_count" IS '总数';
COMMENT ON COLUMN "public"."cs_tileset_task"."fail_count" IS '失败数量';
COMMENT ON COLUMN "public"."cs_tileset_task"."current_count" IS '已处理到那块瓦片';

-- ----------------------------
-- SEQUENCE structure for tb_user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tb_user_id_seq";
CREATE SEQUENCE "public"."tb_user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."tb_user_id_seq"', 1, true);



ALTER SEQUENCE "public"."tb_user_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."tb_user";
CREATE TABLE "public"."tb_user" (
  "username" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "avatar" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "country_code" varchar(20) COLLATE "pg_catalog"."default",
  "mobile" varchar(50) COLLATE "pg_catalog"."default",
  "salt" varchar(50) COLLATE "pg_catalog"."default",
  "register_time" timestamp(6),
  "update_time" timestamp(6),
  "last_login_time" timestamp(6),
  "login_count" int4,
  "code" varchar(100) COLLATE "pg_catalog"."default",
  "login_ip" varchar(50) COLLATE "pg_catalog"."default",
  "nickname" varchar(255) COLLATE "pg_catalog"."default",
  "gender" int2 DEFAULT 0,
  "is_active" bool,
  "is_online" bool,
  "is_sys_user" bool DEFAULT false,
  "id" int4 NOT NULL DEFAULT nextval('tb_user_id_seq'::regclass)
)
;
COMMENT ON COLUMN "public"."tb_user"."username" IS '用户名,用户登录';
COMMENT ON COLUMN "public"."tb_user"."email" IS '邮箱,用户登录';
COMMENT ON COLUMN "public"."tb_user"."avatar" IS '头像地址';
COMMENT ON COLUMN "public"."tb_user"."password" IS '密码';
COMMENT ON COLUMN "public"."tb_user"."country_code" IS '国家区号';
COMMENT ON COLUMN "public"."tb_user"."mobile" IS '手机号,用户登录';
COMMENT ON COLUMN "public"."tb_user"."salt" IS '密码盐';
COMMENT ON COLUMN "public"."tb_user"."register_time" IS '注册时间';
COMMENT ON COLUMN "public"."tb_user"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."tb_user"."last_login_time" IS '最后登录时间';
COMMENT ON COLUMN "public"."tb_user"."login_count" IS '登录次数';
COMMENT ON COLUMN "public"."tb_user"."code" IS '邮箱激活码,';
COMMENT ON COLUMN "public"."tb_user"."login_ip" IS '登录IP';
COMMENT ON COLUMN "public"."tb_user"."nickname" IS '昵称,默认格式map_uid';
COMMENT ON COLUMN "public"."tb_user"."gender" IS '性别,0表示未知,1表示男,2表示女';
COMMENT ON COLUMN "public"."tb_user"."is_active" IS '用户状态,true表示激活,false表示未激活';
COMMENT ON COLUMN "public"."tb_user"."is_online" IS '用户是否在线,true表示已在线,false表示离线';
COMMENT ON COLUMN "public"."tb_user"."is_sys_user" IS '是否为系统用户';
COMMENT ON COLUMN "public"."tb_user"."id" IS '主键自增';

-- ----------------------------
-- SEQUENCE structure for tb_user_login_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tb_user_login_id_seq";
CREATE SEQUENCE "public"."tb_user_login_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."tb_user_login_id_seq"', 1, true);


ALTER SEQUENCE "public"."tb_user_login_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for tb_user_login
-- ----------------------------
DROP TABLE IF EXISTS "public"."tb_user_login";
CREATE TABLE "public"."tb_user_login" (
  "uid" int4,
  "api_token" varchar(128) COLLATE "pg_catalog"."default",
  "jwt_token" varchar(255) COLLATE "pg_catalog"."default",
  "expire_time" timestamp(6),
  "id" int4 NOT NULL DEFAULT nextval('tb_user_login_id_seq'::regclass)
)
;
COMMENT ON COLUMN "public"."tb_user_login"."uid" IS '用户id';
COMMENT ON COLUMN "public"."tb_user_login"."api_token" IS '登录成功后,生成相应的api token,以tk.开头';
COMMENT ON COLUMN "public"."tb_user_login"."jwt_token" IS '登录成功后jwt token';
COMMENT ON COLUMN "public"."tb_user_login"."expire_time" IS '到期时间';
COMMENT ON COLUMN "public"."tb_user_login"."id" IS '主键,用户登录token记录';

-- ----------------------------
-- SEQUENCE structure for cs_soft_key_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_soft_key_id_seq";
CREATE SEQUENCE "public"."cs_soft_key_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

SELECT setval('"public"."cs_soft_key_id_seq"', 1, true);

ALTER SEQUENCE "public"."cs_soft_key_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for cs_soft_key
-- ----------------------------
DROP TABLE IF EXISTS "public"."cs_soft_key";
CREATE TABLE "public"."cs_soft_key" (
  "id" int4 NOT NULL DEFAULT nextval('cs_soft_key_id_seq'::regclass),
  "org_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "contactor" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "secret" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "active_code" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "expire_date" date NOT NULL,
  "mac" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "create_time" timestamp(6),
  "update_time" timestamp(6)
)
;
COMMENT ON COLUMN "public"."cs_soft_key"."id" IS '主键';
COMMENT ON COLUMN "public"."cs_soft_key"."org_name" IS '组织名称,或个人名称';
COMMENT ON COLUMN "public"."cs_soft_key"."contactor" IS '联系人';
COMMENT ON COLUMN "public"."cs_soft_key"."phone" IS '联系电话';
COMMENT ON COLUMN "public"."cs_soft_key"."secret" IS '密钥';
COMMENT ON COLUMN "public"."cs_soft_key"."active_code" IS '激活吗';
COMMENT ON COLUMN "public"."cs_soft_key"."expire_date" IS '到期日期';
COMMENT ON COLUMN "public"."cs_soft_key"."mac" IS '机器mac地址';
COMMENT ON COLUMN "public"."cs_soft_key"."create_time" IS '创建日期';
COMMENT ON COLUMN "public"."cs_soft_key"."update_time" IS '更新日期';


-- ----------------------------
-- Table structure for cs_tileset3d
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_tileset3d_id_seq";
CREATE SEQUENCE "public"."cs_tileset3d_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

SELECT setval('"public"."cs_tileset3d_id_seq"', 1, true);

ALTER SEQUENCE "public"."cs_tileset3d_id_seq" OWNER TO "postgres";




DROP TABLE IF EXISTS "public"."cs_tileset3d";
CREATE TABLE "public"."cs_tileset3d" (
  "id" int4 NOT NULL DEFAULT nextval('cs_tileset3d_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "uid" int4,
  "is_private" bool DEFAULT false,
  "status" int2,
  "type" int2,
  "detail" json,
  "log" varchar(255) COLLATE "pg_catalog"."default",
  "process_msg" varchar(256) COLLATE "pg_catalog"."default"
)
;
COMMENT ON COLUMN "public"."cs_tileset3d"."id" IS '主键';
COMMENT ON COLUMN "public"."cs_tileset3d"."name" IS '名称';
COMMENT ON COLUMN "public"."cs_tileset3d"."create_time" IS '创建日期和时间';
COMMENT ON COLUMN "public"."cs_tileset3d"."update_time" IS '更新日期时间';
COMMENT ON COLUMN "public"."cs_tileset3d"."uid" IS '用户UID,目前未用到';
COMMENT ON COLUMN "public"."cs_tileset3d"."is_private" IS '是否为私有,true表示私有,预留字段';
COMMENT ON COLUMN "public"."cs_tileset3d"."status" IS '切片状态，0表示未切片,1表示切片中，2表示已切片';
COMMENT ON COLUMN "public"."cs_tileset3d"."type" IS '来源类型，通用模型,倾斜摄影等';
COMMENT ON COLUMN "public"."cs_tileset3d"."detail" IS '存储身材切片服务的配置';
COMMENT ON COLUMN "public"."cs_tileset3d"."log" IS '处理日记';
COMMENT ON COLUMN "public"."cs_tileset3d"."process_msg" IS '瓦片处理过程中信息';


-- ----------------------------
-- Table structure for cs_model
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cs_model_id_seq";
CREATE SEQUENCE "public"."cs_model_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

SELECT setval('"public"."cs_model_id_seq"', 1, true);

DROP TABLE IF EXISTS "public"."cs_model";
CREATE TABLE "public"."cs_model" (
  "id" int4 NOT NULL DEFAULT nextval('cs_model_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "format" varchar(255) COLLATE "pg_catalog"."default",
  "mode" int2,
  "size" int8,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "log" varchar(255) COLLATE "pg_catalog"."default",
  "uid" int4,
  "detail" json,
  "status" int2,
  "process_msg" varchar(255) COLLATE "pg_catalog"."default",
  "is_private" bool DEFAULT false
)
;
COMMENT ON COLUMN "public"."cs_model"."id" IS '主键,自增加';
COMMENT ON COLUMN "public"."cs_model"."name" IS '模型名称';
COMMENT ON COLUMN "public"."cs_model"."format" IS '存储.glb或.gltf';
COMMENT ON COLUMN "public"."cs_model"."mode" IS '与webgl mode保持一致,预留';
COMMENT ON COLUMN "public"."cs_model"."size" IS '文件大小，单位字节';
COMMENT ON COLUMN "public"."cs_model"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."cs_model"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."cs_model"."log" IS '处理日记';
COMMENT ON COLUMN "public"."cs_model"."uid" IS '用户ID';
COMMENT ON COLUMN "public"."cs_model"."detail" IS '模型来源详情';
COMMENT ON COLUMN "public"."cs_model"."status" IS '转换状态,0表示未切片,1表示切片中，2表示已切片';
COMMENT ON COLUMN "public"."cs_model"."process_msg" IS '处理过程中信息';
COMMENT ON COLUMN "public"."cs_model"."is_private" IS '是否为私有,true表示私有,预留字段';





-- ----------------------------
-- Primary Key structure for table cs_apikey
-- ----------------------------
ALTER TABLE "public"."cs_apikey" ADD CONSTRAINT "cs_apikey_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_dataset
-- ----------------------------
ALTER TABLE "public"."cs_dataset" ADD CONSTRAINT "cs_layer_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_field
-- ----------------------------
ALTER TABLE "public"."cs_field" ADD CONSTRAINT "cs_field_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_font
-- ----------------------------
ALTER TABLE "public"."cs_font" ADD CONSTRAINT "cs_font_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_gridset
-- ----------------------------
ALTER TABLE "public"."cs_gridset" ADD CONSTRAINT "cs_gridset_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_gridset_detail
-- ----------------------------
ALTER TABLE "public"."cs_gridset_detail" ADD CONSTRAINT "cs_gridset_detail_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_srs_detail
-- ----------------------------
ALTER TABLE "public"."cs_srs_detail" ADD CONSTRAINT "cs_srs_detail_pkey" PRIMARY KEY ("srid");

-- ----------------------------
-- Indexes structure for table cs_style
-- ----------------------------
CREATE UNIQUE INDEX "id" ON "public"."cs_style" USING btree (
  "id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table cs_style
-- ----------------------------
ALTER TABLE "public"."cs_style" ADD CONSTRAINT "cs_style_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_task
-- ----------------------------
ALTER TABLE "public"."cs_task" ADD CONSTRAINT "cs_task_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_tileset
-- ----------------------------
ALTER TABLE "public"."cs_tileset" ADD CONSTRAINT "cs_tileset_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_tileset_detail
-- ----------------------------
ALTER TABLE "public"."cs_tileset_detail" ADD CONSTRAINT "cs_tileset_detail_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_soft_key
-- ----------------------------
ALTER TABLE "public"."cs_soft_key" ADD CONSTRAINT "cs_soft_key_pkey" PRIMARY KEY ("id");
-- ----------------------------
-- Primary Key structure for table cs_tileset3d
-- ----------------------------
ALTER TABLE "public"."cs_tileset3d" ADD CONSTRAINT "cs_tileset3d_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cs_model
-- ----------------------------
ALTER TABLE "public"."cs_model" ADD CONSTRAINT "cs_model_pkey" PRIMARY KEY ("id");


-- ----------------------------
-- SEQUENCE for table cs_apikey
-- ----------------------------
ALTER SEQUENCE "public"."cs_apikey_id_seq"
OWNED BY "public"."cs_apikey"."id";

ALTER SEQUENCE "public"."cs_layer_id_seq"

OWNED BY "public"."cs_dataset"."id";

ALTER SEQUENCE "public"."cs_field_id_seq"
OWNED BY "public"."cs_field"."id";

ALTER SEQUENCE "public"."cs_font_id_seq"
OWNED BY "public"."cs_font"."id";

ALTER SEQUENCE "public"."cs_gridset_id_seq"
OWNED BY "public"."cs_gridset"."id";

ALTER SEQUENCE "public"."cs_gridset_detail_id_seq"
OWNED BY "public"."cs_gridset_detail"."id";


ALTER SEQUENCE "public"."cs_task_id_seq"
OWNED BY "public"."cs_task"."id";


ALTER SEQUENCE "public"."cs_tileset_detail_id_seq"
OWNED BY "public"."cs_tileset_detail"."id";

ALTER SEQUENCE "public"."tb_user_id_seq"
OWNED BY "public"."tb_user"."id";


ALTER SEQUENCE "public"."tb_user_login_id_seq"
OWNED BY "public"."tb_user_login"."id";

ALTER SEQUENCE "public"."cs_soft_key"
OWNED BY "public"."cs_soft_key"."id";

ALTER SEQUENCE "public"."cs_tileset3d_id_seq"
OWNED BY "public"."cs_tileset3d"."id";

ALTER SEQUENCE "public"."cs_model_id_seq"
OWNED BY "public"."cs_model"."id";

