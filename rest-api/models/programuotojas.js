import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DevSchema = new Schema({
    vardas: {
        type: String,
        required:[true, 'Prasome irasyti savo varda']
    }, 
    tech: {
        type: [String],
        required:[true, 'Prasome irasyti technologijas']
    },
    laisvas: {
        type: Boolean,
        default: false
    },
    location: {
        type: {
           type: String,
           enum: ['Point'],
           default: 'Point'
        },
        coordinates: {
           type: [Number],
           required: true
        }
    }

})

DevSchema.index({location: '2dsphere'})
const Dev = mongoose.model('Dev', DevSchema)

export default Dev