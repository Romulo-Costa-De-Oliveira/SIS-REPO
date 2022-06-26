import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: 'string',
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: 'string',
            required: true
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model('User', userSchema)