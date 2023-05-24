const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({

    email: {
        type: String, require: true,
    },
    longurl: {
        type: String, require: true,
    },
    shorturl: {
        type: String, require: true,
    },
    clicks: {
        type: Number, default:0
    },
    time: {
        type: Date, default: Date.now()
    }

}, { versionKey: false, collection: 'url' })

const UrlModel = mongoose.model('url', UrlSchema)//
module.exports = { UrlModel }

