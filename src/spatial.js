import semanticTag from './semantic-tag'

const Geometrie = Model({
  geometrie: String,
})

export default semanticTag.extend({
  geometries: Model.Array(Geometrie),
})
