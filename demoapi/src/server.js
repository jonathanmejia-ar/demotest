import mongoose from 'mongoose';
import config from './config'

export default async function mongooseConnect() {
    try {
        await mongoose.connect(config.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database is connected');
    } catch (err) {
        console.log(err);
    };
};
