const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor ingrese un nombre"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Por favor ingrese una descripcion"],
  },
  price: {
    type: Number,
    required: [true, "Por favor ingrese el precio del producto"],
    maxLength: [8, "El precio no puede exceder los 8 caracteres"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Por favor ingrese una categoria"],
  },
  Stock: {
    type: Number,
    required: [true, "Por favor ingrese el stock de productos"],
    maxLength: [8, "El stock de productos no puede exceder las 8 cifras"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
