// const mongoose = require('mongoose');

// const addressSchema = mongoose.Schema({
//   city: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   pincode: {
//     type: Number,
//     required: true,
//     trim: true,
//   },

//   state: {
//     type: String,
//     required: true,
//     trim: true,
//   },
// });
// const hospitalSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       require: true,
//       trim: true,
//     },
//     image: {
//       type: String,
//       require: true,
//     },
//     address: addressSchema,
//     department: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Department',
//       },
//     ],
//   },
//   { timestamps: true }
// );
// const Hospital = mongoose.model('Hospital', hospitalSchema);
// module.exports = Hospital;

const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
});

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: addressSchema,
    image: {
      type: String,
      required: true,
    },
    department: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
      },
    ],
    doctorId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
      },
    ],
  },
  { timestamps: true }
);

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
