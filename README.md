# gisserver

Gis Service

# 部署说明

- 修改 config 文件夹下面的配置

# api rest 接口说明

参考setup/GisServer.postman_collection.json,使用postman工具,线上地址https://www.postman.com/

# 消息中间件,RabbitMQ

https://blog.csdn.net/zhm3023/article/details/82217222
https://juejin.im/post/5ce644b9f265da1b6028dbcd
https://blog.csdn.net/qq_35781732/article/details/79807160

# 2020-04-18

数据库表 cs_tileset 增加 tile_status 字段

# 2020-04-22

数据库表 cs_srs_detail 增加
数据库表 cs_tileset 增加 enable_cache 字段

# 2020-04-23

数据库增加表 cs_tileset_task,结构见 doc 文件夹

# 2020-04-25

数据库表 cs_tileset 把 tile_status 字段改成 status 与 cs_tileset_task 中保持一致

# 2020-09-21

数据库表 cs_style 增加 trees 字段,存储图层树结构

# 2020-09-28

数据库表 cs_tileset_detail 增加 dataset_type 字段,存储数据集类型

# 2021-01-04

数据库表 cs_task 增加 type 字段,存储导入任务类型
数据库表 cs_raster 把 path_name 改成 path

# 2021-01-06

数据库表 cs_raster 增加 block_num 字段

# 2022-08-09

数据库表 cs_tileset3d,结构见 doc 文件夹

# 版本说明

1.未注册版本到期日期为 2022-12-31;

2.setup 文件夹下面有部署说明;

3.二维矢量切片发布;

4.三维切片发布,支持 osgb 和 shp 文件;
