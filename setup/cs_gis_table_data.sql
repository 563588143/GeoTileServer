/*
 数据库初始化数据

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
-- INSERT DATA for tb_user
-- ----------------------------
TRUNCATE TABLE "tb_user" RESTART IDENTITY;

INSERT INTO "tb_user"("username", "email", "avatar", "password", "country_code", "mobile", "salt", "register_time", "update_time", "last_login_time", "login_count", "code", "login_ip", "nickname", "gender", "is_active", "is_online", "is_sys_user") VALUES ('admin', 'admin@qq.com', NULL, '14e1b600b1fd579f47433b88e8d85291', NULL, NULL, NULL, '2020-09-29 09:23:05', NULL, '2020-12-04 15:03:45', 5, NULL, NULL, NULL, 0, NULL, 't', 'f');

-- ----------------------------
-- INSERT DATA for tb_user
-- ----------------------------
TRUNCATE TABLE "cs_apikey" RESTART IDENTITY;

INSERT INTO "cs_apikey"("name", "token", "is_default", "create_time", "update_time", "uid", "usage") VALUES ('Default public token', 'pk.2a18c2a0ea1511eaa84bad503b828ee6', 't', '2020-09-29 09:23:05', '2020-09-29 09:23:05', 1, 'pk');


-- ----------------------------
-- INSERT DATA for cs_srs_detail
-- ----------------------------
TRUNCATE TABLE "cs_srs_detail";

INSERT INTO "cs_srs_detail"("srid", "bounds", "lnglat_bounds") VALUES (4326, '{"min_x":-180,"min_y":-90,"max_x":180,"max_y":90}', '{"min_x":-180,"min_y":-90,"max_x":180,"max_y":90}');
INSERT INTO "cs_srs_detail"("srid", "bounds", "lnglat_bounds") VALUES (3857, '{"min_x":-20037508.34,"min_y":-20037508.34,"max_x":20037508.34,"max_y":20037508.34}', '{"min_x":-180,"min_y":-85.0511287798,"max_x":180,"max_y":85.0511287798}');
INSERT INTO "cs_srs_detail"("srid", "bounds", "lnglat_bounds") VALUES (900913, '{"min_x":-20037508.34,"min_y":-20037508.34,"max_x":20037508.34,"max_y":20037508.34}', '{"min_x":-180,"min_y":-85.0511287798,"max_x":180,"max_y":85.0511287798}');

-- ----------------------------
-- INSERT DATA for cs_gridset
-- ----------------------------
TRUNCATE TABLE "cs_gridset" RESTART IDENTITY;

INSERT INTO "cs_gridset"("name", "srid", "tile_width", "tile_height", "min_x", "min_y", "max_x", "max_y") VALUES ('EPSG:3857', 3857, 256, 256, '-20037508.34', '-20037508.34', '20037508.34', '20037508.34');
INSERT INTO "cs_gridset"("name", "srid", "tile_width", "tile_height", "min_x", "min_y", "max_x", "max_y") VALUES ('EPSG:4326', 4326, 256, 256, '-180', '-90', '180', '90');

-- ----------------------------
-- INSERT DATA for cs_gridset_detail
-- ----------------------------
TRUNCATE TABLE "cs_gridset_detail" RESTART IDENTITY;

INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES ( NULL, 19, '0.29858214169740680000000000000000000000000000000000', '1066.36479177645', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 0, '156543.03390625000000000000000000000000000000000000000000', '559082263.950893', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 1, '78271.51695312500000000000000000000000000000000000000000', '279541131.975446', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 2, '39135.75847656250000000000000000000000000000000000000000', '139770565.987723', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 3, '19567.87923828125000000000000000000000000000000000000000', '69885282.9938616', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 4, '9783.93961914062500000000000000000000000000000000000000', '34942641.4969308', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 5, '4891.96980957031250000000000000000000000000000000000000', '17471320.7484654', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 6, '2445.98490478515620000000000000000000000000000000000000', '8735660.3742327', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 7, '1222.99245239257810000000000000000000000000000000000000', '4367830.18711635', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 8, '611.49622619628910000000000000000000000000000000000000', '2183915.09355818', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 9, '305.74811309814453000000000000000000000000000000000000', '1091957.54677909', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 10, '152.87405654907226000000000000000000000000000000000000', '545978.773389544', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 11, '76.43702827453613000000000000000000000000000000000000', '272989.386694772', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 12, '38.21851413726806600000000000000000000000000000000000', '136494.693347386', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 13, '19.10925706863403300000000000000000000000000000000000', '68247.346673693', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 14, '9.55462853431701700000000000000000000000000000000000', '34123.6733368465', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 15, '4.77731426715850800000000000000000000000000000000000', '17061.8366684232', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 16, '2.38865713357925400000000000000000000000000000000000', '8530.91833421162', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 17, '1.19432856678962700000000000000000000000000000000000', '4265.45916710581', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 18, '0.59716428339481350000000000000000000000000000000000', '2132.72958355291', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 20, '0.14929107084870340000000000000000000000000000000000', '533.182395888226', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 21, '0.07464553542435170000000000000000000000000000000000', '266.591197944113', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 22, '0.03732276771217580000000000000000000000000000000000', '133.295598972057', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 23, '0.01866138385608790000000000000000000000000000000000', '66.6477994860283', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 24, '0.00933069192804400000000000000000000000000000000000', '33.3238997430142', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 25, '0.00466534596402200000000000000000000000000000000000', '16.6619498715071', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 26, '0.00233267298201100000000000000000000000000000000000', '8.33097493575354', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 27, '0.00116633649100550000000000000000000000000000000000', '4.16548746787677', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 28, '0.00058316824550270000000000000000000000000000000000', '2.08274373393838', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 29, '0.00029158412275140000000000000000000000000000000000', '1.04137186696919', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 30, '0.00014579206137570000000000000000000000000000000000', '0.520685933484596', 1);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 0, '0.70312500000000000000000000000000000000000000000000', '279541132.014359', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 1, '0.35156250000000000000000000000000000000000000000000', '139770566.007179', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 2, '0.17578125000000000000000000000000000000000000000000', '69885283.0035897', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 3, '0.08789062500000000000000000000000000000000000000000', '34942641.5017949', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 4, '0.04394531250000000000000000000000000000000000000000', '17471320.7508974', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 5, '0.02197265625000000000000000000000000000000000000000', '8735660.37544871', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 6, '0.01098632812500000000000000000000000000000000000000', '4367830.18772436', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 7, '0.00549316406250000000000000000000000000000000000000', '2183915.09386218', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 9, '0.00137329101562500000000000000000000000000000000000', '545978.773465545', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 8, '0.00274658203125000000000000000000000000000000000000', '1091957.54693109', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 10, '0.00068664550781250000000000000000000000000000000000', '272989.386732772', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 11, '0.00034332275390620000000000000000000000000000000000', '136494.693366386', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 12, '0.00017166137695310000000000000000000000000000000000', '68247.3466831931', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 14, '0.00004291534423830000000000000000000000000000000000', '17061.8366707983', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 15, '0.00002145767211910000000000000000000000000000000000', '8530.91833539914', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 16, '0.00001072883605960000000000000000000000000000000000', '4265.45916769957', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 18, '0.00000268220901490000000000000000000000000000000000', '1066.36479192489', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 17, '0.00000536441802980000000000000000000000000000000000', '2132.72958384978', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 13, '0.00008583068847660000000000000000000000000000000000', '34123.6733415965', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 19, '0.00000134110450740000000000000000000000000000000000', '533.182395962446', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 20, '0.00000067055225370000000000000000000000000000000000', '266.591197981223', 2);
INSERT INTO "cs_gridset_detail"("name", "level", "resolution", "scale", "gridset_id") VALUES (NULL, 21, '0.00000033527612690000000000000000000000000000000000', '133.295598990612', 2);
