export default {
  "id":          "#/semanticTag/time",
  "$schema":     "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type":        "object",
  "required":    ["times"],
  "properties":  {
    "$ref":  "#/semanticTag",
    "times": {
      "type": "array",
      "items": {
        "from":     { "type": "integer" },
        "duration": { "type": "integer" }
      }
    }
  }
}
