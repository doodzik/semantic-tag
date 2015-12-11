const Uri = Model({
  uri: new RegExp("#\b(([\w-]+://?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|/)))#iS")
})

const semanticTag = Model({
	name: String,
	sis:  Model.Array(Uri)
})

export Uri
export default semanticTag
