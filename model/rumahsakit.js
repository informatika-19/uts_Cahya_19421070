const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rumahsakitSchema = new Schema({
   	namaRumahsakit:{
        type: String
        },
        alamat:{
        type: String
        },
        namaDokter : {
        type: String
        },
	namaPerawat :{
        type: String
        },
        namaPasien :{
        type: String
        },
        RuanganPasien : {
        type: String
        }
})
module.exports =mongoose.model('rumahsakit',rumahsakitSchema)