import semanticTag from './semantic-tag'

export default function validate(obj) {
  semanticTag(obj)
  if(obj.time instanceof Array) {
    obj.time.forEach((val) => {
      if(typeof val.from !== 'number' && typeof val.from !== 'number')
        throw new Error(val.toString() + 'isnt a string')
    })
  } else {
    throw new Error('time isnt a correct')
  }
}
