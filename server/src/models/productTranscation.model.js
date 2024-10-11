import mongoose, { model, Schema } from "mongoose";

const productTrascationSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    sold: { type: Boolean },
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
});

const ProductTranscation = mongoose.model("ProductTranscation", productTrascationSchema);

export default ProductTranscation;
