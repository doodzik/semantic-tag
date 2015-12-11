import semanticTag from './semantic-tag'

const Time = Model({
  from: Number,
  to: Number,
})

export default semanticTag.extend({
  times: Model.Array(Adress)
})
