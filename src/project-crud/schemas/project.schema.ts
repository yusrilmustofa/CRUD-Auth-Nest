import * as mongoose from 'mongoose'

export const Schema = new mongoose.Schema({
    title:{
        type:String,
        index:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        default:"Project-CRUD",
        index:true
    },
    timestamp:{
        type:Number,
        default:Date.now
    }
})