// const mongoose = require('mongoose');
// const Slot = require('./slotSchema');
// const Doctor = require('./doctorSchema');

// const appointmentSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//     slot: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Slot',
//     },
//     Doctor: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Doctor',
//     },
//   },
//   { Timestamp: true }
// );
// const Appointment = mongoose.model('Appointment', appointmentSchema);
// module.exports = Appointment;

const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },

  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
