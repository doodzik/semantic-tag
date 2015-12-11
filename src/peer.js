import semanticTag from './semantic-tag'

const Adress = Model({
  adress: String,
})

export default semanticTag.extend({
  adresses: Model.Array(Adress)
})
