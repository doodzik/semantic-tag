export default {
    "id":          "#/semanticTag/peer",
    "$schema":     "http://json-schema.org/draft-04/schema#",
    "description": "",
    "type":        "object",
    "required":    ["adress"],
    "properties":  {
      "$ref":   "#/semanticTag",
      "adress": {
        "type":     "string",
        "pattern":  "" // gcf
      }
    }
}
