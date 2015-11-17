export default {
  "id":          "#/semanticTag/spatial",
  "$schema":     "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type":        "object",
  "required":    ["geometries"],
  "properties":  {
    "$ref": "#/semanticTag",
    "geometries": {
      "type": "array",
      "items": {
        "type":    "string"
        "pattern": "" // ewktString
      }
    }
  }
}
