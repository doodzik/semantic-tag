import semanticTag from './semantic-tag'

const Direction = Model({
  direction: String,
})

export default semanticTag.extend({
  directions: Model.Array(Direction)
})
