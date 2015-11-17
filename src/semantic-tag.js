export { default as peer }           from './semantic-tag-peer'
export { default as spatial }        from './semantic-tag-spatial'
export { default as time }           from './semantic-tag-time'
export { default as direction }      from './semantic-tag-direction'

export const semanticTag = {
  "id":          "#/semanticTag",
  "$schema":     "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type":        "object",
  "required":    ["name", "sis"],
  "properties":  {
    "name": { "type": "string" },
    "sis":  {
      "type": "array",
      "items": {
        "type":     "string",
        "pattern":  "#\b(([\w-]+://?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|/)))#iS" // uri pattern from https://mathiasbynens.be/demo/url-regex @gruber
      }
    }
  }
}
