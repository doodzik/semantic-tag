import semanticTag from './semantic-tag'

export default function validate(obj) {
  semanticTag(obj)
  if(obj.geometries instanceof Array) {
    obj.geometries.forEach((val) => {
      if(typeof val !== 'string')
        throw new Error(val + 'isnt a string')
    })
  } else {
    throw new Error('adresses isnt a string')
  }
}
