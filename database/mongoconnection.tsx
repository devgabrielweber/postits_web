"use server"

import mongoose from "mongoose"

let cache: any

export async function getMongoose() {
    if (cache == null) {
        cache = await mongoose.connect('mongodb+srv://lematraca:otn2CWNh7fdOZpT9@webercluster.ba6pj.mongodb.net/?retryWrites=true&w=majority&appName=WeberCluster')
    }
    return mongoose
}