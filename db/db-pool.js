/***
 * @description 创建数据库连接池
 * @author 
 * @version 1.0
 */
var pg = require('pg');
var types = pg.types;
var dbConfig = require('../config').dbConfig;
var pool = new pg.Pool(dbConfig);
const FIELD_TYPE = require("../enum/field_type");
/****
 * @description 字段类型转换
 */
(function convertTypes() {
    for (var key in FIELD_TYPE) {
        let cb = null;
        switch (FIELD_TYPE[key]) {
            case FIELD_TYPE.INT2:
            case FIELD_TYPE.INT4: {
                cb = function (val) {
                    return parseInt(val);
                }
                break;
            }
            case FIELD_TYPE.INT8:
            case FIELD_TYPE.FLOAT4:
            case FIELD_TYPE.FLOAT8:
            case FIELD_TYPE.NUMERIC:
                {
                    cb = function (val) {
                        return Number(val);
                    }
                    break;
                }
            case FIELD_TYPE.DATE:
            case FIELD_TYPE.TIME:
            case FIELD_TYPE.TIMESTAMP:
            case FIELD_TYPE.VARCHAR: {
                cb = function (val) {
                    return val;
                }
                break;
            }
        }
        if (cb) {
            types.setTypeParser(FIELD_TYPE[key], cb);
        }
    }
})();
module.exports = {
    pool: pool
}