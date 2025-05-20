import mongoose, { Schema } from 'mongoose'


const postSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
    },
    {
        desc: {
            type: String,
            require: true
        },
    },
    {
        img: {
            type: String,
            require: true
        },
    },
    {
        content: {
            type: String,
            require: true
        },
    },
    {
        usernamr: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }

);

export default mongoose.model("Post", postSchema);