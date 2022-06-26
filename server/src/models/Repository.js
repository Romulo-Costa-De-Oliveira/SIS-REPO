import mongoose from 'mongoose';

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
        },
        url: {
            type: 'string',
            required: true,
            unique: true,
        },
        userId: {
            type: 'string',
            required: true,
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model('Repository', repositorySchema)