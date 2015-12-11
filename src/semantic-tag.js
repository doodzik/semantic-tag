export const Uri = Model({
  uri: new RegExp("#\b(([\w-]+://?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|/)))#iS")
})

export default Model({
	name: String,
	sis:  Model.Array(Uri)
})
