// const mongoose = require('mongoose');
// const Hospital = require('./hospitalSchema');
// const doctorSchema = mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     department: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Department',
//     },
//     hospital: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Hospital',
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// const Doctor = mongoose.model('Doctor', doctorSchema);
// module.exports = Doctor;

const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },

    email: {
      type: String,
    },
    password: {
      type: String,
    },

    qualification: {
      type: String,
    },

    position: {
      type: String,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
