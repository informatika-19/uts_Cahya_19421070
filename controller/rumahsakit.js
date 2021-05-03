const  rumahsakitModel = require('../model/rumahsakit')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    rumahsakitModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil menginput data rumah sakit'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal menginput rumah sakit'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    rumahsakitpModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menampilkan semua rumah sakit',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gagal menampilkan semua rumah sakit',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
    rumahsakitModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menampilkan semua data sesuai id rumah sakit',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menampilkan semua data sesuai id rumah sakit',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    rumahsakitModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data rumah sakit'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data rumah sakit'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    rumahsakitModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data rumah sakit'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data rumah sakit'
    }))
})
