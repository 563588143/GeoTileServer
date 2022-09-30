const {
  BoundingRectangle,
  combine,
  defaultValue,
  defined,
  WebGLConstants,
  Math: CesiumMath,
  PolygonGeometry,
  Cartesian3,
  PolygonHierarchy,
  EllipsoidGeodesic,
  Cartographic,
  Rectangle,
  PrimitiveType,
  ComponentDatatype,
  Geometry,
  RuntimeError,
  Axis,
  Matrix4,
  Matrix3,
  BoundingSphere,
  Transforms,
  GeographicProjection,
} = require("cesium");
BoundingSphere.prototype.toJSON = function () {
  const { x, y, z } = this.center;
  const { radius } = this;
  return {
    sphere: [x, y, z, radius],
  };
};
module.exports = {
  BoundingRectangle,
  defaultValue,
  combine,
  defined,
  WebGLConstants,
  CesiumMath,
  PolygonGeometry,
  Cartesian3,
  PolygonHierarchy,
  EllipsoidGeodesic,
  Cartographic,
  Rectangle,
  PrimitiveType,
  ComponentDatatype,
  Geometry,
  RuntimeError,
  Axis,
  Matrix4,
  Matrix3,
  BoundingSphere,
  Transforms,
  GeographicProjection
};
