import semanticTag from './semantic-tag'

export default function validate(obj) {
  semanticTag(obj)
  if(obj.directions instanceof Array) {
    obj.directions.forEach((val) => {
      if(typeof val !== 'string')
        throw new Error(val + 'isnt a string')
    })
  } else {
    throw new Error('directions isnt a string')
  }
}
