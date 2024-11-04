// const Doctor = require('../db/models/doctorSchema');
// const dotenv = require('dotenv');
// dotenv.config({ path: './.env' });
// const genPassword = require('generate-password');
// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// module.exports.getDoctor = async (req, res) => {
//   const doctor = await Doctor.find();
//   res.status(200).json(doctor);
// };
// module.exports.postDoctor = async (req, res) => {
//   const body = req.body;
//   const doctor = await Doctor.create({
//     fistName: body.fistName,
//     lastName: body.lastName,
//     image: body.image,
//     email: body.email,
//     password: body.password,
//     department: body.department,
//     hospital: body.hospital,
//   });

//   res.status(200), json(doctor);
// };
// module.exports.postSignup = async (req, res) => {
//   const body = req.body;
//   const doctor = await Doctor.findOne({ email: body.email });
//   if (doctor) {
//     return res.status(403).json({ message: 'Email already exist' });
//   }
//   const docPassword = genPassword.generate({
//     length: 10,
//     Number: true,
//   });
//   const hashedPassword = await bcrypt.hash(docPassword, 2);
//   const imageLink = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
//   console.log(imageLink);
//   console.log(hashedPassword);
//   console.log(docPassword);

//   const response = await Doctor.create({
//     ...body,
//     image: imageLink,
//     password: hashedPassword,
//   });

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'reshmashaji26929@gmail.com',
//       pass: 'ixoj klew ssdi aiui',
//     },
//   });
//   let mailOption = {
//     from: 'reshmashaji26929@gmail.com',
//     to: body.email,
//     subject: 'Login creds for DoctorBooking App',
//     text: `Hi Doctor, Your email id :${body.email} and Password :${docPassword}`,
//   };
//   transporter.sendMail(mailOption, error => {
//     if (error) {
//       return res.status(404).json({ message: error });
//     } else return res.status(200).json({ message: 'mail send', response });
//   });

//   // res.status(201).json({ message: 'signed up' });
// };

// module.exports.loginDoctor = async (req, res) => {
//   const body = req.body;
//   const doctor = await Doctor.findOne({ email: body.email });
//   console.log(doctor);
//   if (!doctor) {
//     return res.status(403).json({ message: 'Email or password incorrect' });
//   }
//   // res.status(200).json(doctor);
//   console.log('doc', doctor.password);

//   const isMatching = await bcrypt.compare(body.password, doctor.password);
//   if (!isMatching) {
//     return res.status(403).json({ message: ' password incorrect' });
//   }
//   const token = jwt.sign({ id: doctor._id, role: 'DOCTOR' }, process.env.KEY, {
//     expiresIn: '365d',
//   });
//   return res
//     .status(200)
//     .json({ message: 'You are logged in', token, id: doctor._id });
// };

// module.exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   const doctor = await Doctor.findOne({ email: email });
//   if (!doctor) {
//     return res.status(403).json({ message: 'Email doesnt match' });
//   }
//   const resetToken = jwt.sign(
//     { email: email },
//     process.env.FORGOT_PASSWORD_KEY,
//     { expiresIn: '1h' }
//   );
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'learnmern3675@gmail.com',
//       pass: 'ixoj klew ssdi aiui',
//     },
//   });
//   let mailOption = {
//     from: 'learnmern3675@gmail.com',
//     to: email,
//     subject: 'Login creds for DoctorBooking App',
//     text: `please reset your password using the link http://localhost:${process.env.PORT}/doctor /reset/${resetToken}`,
//   };
//   transporter.sendMail(mailOption, error => {
//     if (error) {
//       return res.status(404).json({ message: error });
//     } else return res.status(200).json({ message: 'mail send' });
//   });
// };
// module.exports.resetPassword = async (req, res) => {
//   const { token } = req.params;
//   const { password, confirmPassword } = req.body;
//   try {
//     const isValid = jwt.varify(token, password.env.FORGOT_PASSWORD_KEY);
//     if (password != confirmPassword) {
//       return res.status(403).json({ message: 'password doesnt match' });
//     }
//     const email = isValid.email;
//     const hashedPassword = await bcrypt.hash(password, 2);
//     const doctor = await Doctor.findOneAndUpdate(
//       { email: email },
//       { password: hashedPassword }
//     );
//     res.status(200).json({ message: 'password reset successfully' });
//   } catch (e) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// };
// module.exports.getDoctorById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const doctor = await Doctor.findById(id);

//     res.status(200).json(doctor);
//   } catch (e) {
//     return res.status(500).json(e);
//   }
// };

const Doctor = require('../db/models/doctorSchema');
const genPassword = require('generate-password');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports.signupDoctor = async (req, res) => {
  const body = req.body;
  const doctor = await Doctor.findOne({ email: body.email });
  if (doctor) {
    return res.status(403).json({ Message: 'Email already exist' });
  }
  const docPassword = genPassword.generate({
    length: 10,
    numbers: true,
  });

  const hashedPassword = await bcrypt.hash(docPassword, 2);

  const imageLink = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;

  console.log(imageLink);
  console.log(hashedPassword);
  console.log(docPassword);

  const response = await Doctor.create({
    ...body,
    image: imageLink,
    password: hashedPassword,
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'learnmern27389@gmail.com',
      pass: 'djue eviw rusk hcgc',
    },
  });

  let mailOptions = {
    from: 'learnmern27389@gmail.com',
    to: body.email,
    subject: 'Login creds for DocBooking App',
    text: `Your email id: ${body.email} and password is : ${docPassword}`,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ message: error });
    } else return res.status(200).json({ message: 'Mail send', response });
  });

  // res.status(201).json({ message: 'signed up' });
};

module.exports.loginDoctor = async (req, res) => {
  const body = req.body;
  const doctor = await Doctor.findOne({ email: body.email });
  if (!doctor) {
    return res.status(403).json({ message: 'Email or password incorrect' });
  }

  const isMatching = await bcrypt.compare(body.password, doctor.password);

  if (!isMatching) {
    return res.status(403).json({ message: 'Email or password incorrect' });
  }

  const token = jwt.sign({ id: doctor._id, role: 'DOCTOR' }, process.env.KEY, {
    expiresIn: '365d',
  });
  res
    .status(200)
    .json({ message: 'you are logged in', token: token, id: doctor._id });
};

module.exports.getDoctor = async (req, res) => {
  const doctor = await Doctor.find();
  res.status(200).json(doctor);
};

module.exports.getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);

    res.status(200).json(doctor);
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports.getDoctorByDepartmentId = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const doctor = await Doctor.find({ department: id }).populate('department');
    // console.log(doctor);
    res.status(200).json(doctor);
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports.getDoctorByHospitalAndDepartment = async (req, res) => {
  try {
    const { hospitalid, departmentid } = req.params;

    const doctor = await Doctor.find({
      hospital: hospitalid,
      department: departmentid,
    }).populate('hospital department');
    res.status(200).json(doctor);
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports.patchDoctor = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const doctor = await Doctor.findByIdAndUpdate(id, body);

  res.status(200).json({ message: 'doctor edited' });
};

module.exports.deleteDoctor = async (req, res) => {
  const { id } = req.params;
  const doctor = await Slot.findByIdAndDelete(id);
  res.status(200).json({ message: 'doctor deleted' });
};

module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const doctor = await Doctor.findOne({ email: email });
  if (!doctor) {
    return res.status(403).json({ message: 'Email doesnt match' });
  }

  const resetToken = jwt.sign(
    { email: email },
    process.env.FORGOT_PASSWORD_KEY,
    { expiresIn: 30000 }
  );

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'learnmern27389@gmail.com',
      pass: 'djue eviw rusk hcgc',
    },
  });

  let mailOptions = {
    from: 'learnmern27389@gmail.com',
    to: email,
    subject: 'PASSWORD RESET EMAIL',
    text: `Please reset your password using the link http://localhost:5173/doctor/reset/${resetToken} `,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ message: error });
    } else return res.status(200).json({ message: 'Mail send', resetToken });
  });
};
module.exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;
  try {
    const isValid = jwt.verify(token, process.env.FORGOT_PASSWORD_KEY);
    if (password != confirmPassword) {
      return res.status(403).json({ message: 'Password doesnt match' });
    }
    const email = isValid.email;
    const hashedPassword = await bcrypt.hash(password, 2);
    const doctor = await Doctor.findOneAndUpdate(
      { email: email },
      { password: hashedPassword }
    );
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (e) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
