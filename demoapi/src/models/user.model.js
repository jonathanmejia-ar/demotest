import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    webs: [{
        type: Schema.Types.ObjectId,
        ref: 'Web'
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model('User', UserSchema);