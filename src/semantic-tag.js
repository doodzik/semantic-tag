export default {
  "id":          "#/semanticTag",
  "$schema":     "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type":        "object",
  "required":    ["name", "sis"],
  "properties":  {
    "name": "string",
    "sis":  {
      "type":     "string",
      "pattern":  "#\b(([\w-]+://?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|/)))#iS" // uri pattern from https://mathiasbynens.be/demo/url-regex @gruber
    }
  }
}
