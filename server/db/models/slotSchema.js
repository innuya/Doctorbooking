// const mongoose = require('mongoose');
// const slotSchema = mongoose.Schema(
//   {
//     date: {
//       type: String,
//       required: true,
//     },
//     from: {
//       type: String,
//       required: true,
//     },
//     to: {
//       type: String,
//       required: true,
//     },
//     availableSlot: {
//       type: Number,
//       required: true,
//     },
//     doctorId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'doctorId',
//     },
//   },
//   { timestamps: true }
// );
// const Slot = mongoose.model('Slot', slotSchema);
// module.exports = Slot;

const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
  date: {
    type: Date,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  availableSlots: {
    type: Number,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
});

const Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;
