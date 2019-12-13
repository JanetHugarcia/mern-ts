import mongoose from 'mongoose';

export const db = () => {
    mongoose
        .connect('mongodb://localhost/rent', {useNewUrlParser: true})
        .then(
            () => { console.log('connected!') },
            err => { throw err }
        );
}

interface IUser extends mongoose.Document {
    name: string;
}

const UserSchema = new mongoose.Schema({
    name: String
})

export const User = mongoose.model<IUser>('User', UserSchema);

