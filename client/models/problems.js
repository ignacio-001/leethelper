const mongoose =require('mongoose');
const problems=new mongoose.Schema({
    name:{
        type: String,
        required:[true,'problemname is must'],
        trim: true,
    },
    topic:{
        type: String,
        required:[true,'problemname is must'],
        trim: true,
    },
    url:{
        type: String,
        required:[true,'url is must'],
        trim: true,
    },
    firattempted:{
        type: Boolean,
        required:[true,'firstattempt is must'],
        default: false,
    },
    important:{
        type: Boolean,
        required:[true,'imp is must'],
        default: false,
    },  
    solved:{
        type: Boolean,
        required:[true,'solved is must'],
        default: false,
    },    
    secattempt:{
        type: Boolean,
        required:[true,'secattempt is must'],
        default: false,
    },      

})
module.exports=mongoose.model('Problem',problems)