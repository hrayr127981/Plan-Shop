/**
 * Created by hrayr on 11/12/2017.
 */
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const AppConstants = require('./../settings/constants');
let photosShema = Schema ({

    name: {
        type: String,
        index: {unique: true}
    },
    mimetype:{
        type:String,
    }
});
module.exports = mongoose.model('photos',photosShema);
