import * as mongoose from 'mongoose';

export const HelloSchema = new mongoose.Schema({
    greeting: String,
})