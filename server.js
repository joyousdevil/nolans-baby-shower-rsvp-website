const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "frankeli.vincent.camacho@gmail.com",
    pass: "!N2.0@8669"
  },
});

const options = {
  from: "frankeli.vincent.camacho@gmail.com",
  to: "vincent.pcamacho@yahoo.com",
  subject: "sending email with nodejs",
  text: "this is a test"
};

transporter.sendMail(options, function (err, info){
  if(err){
    console.log(err);
    return;
  }
  console.log("Sent: " + info.response);
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "frankeli.vincent.camacho@gmail.comz",
    subject: "RSVP Form Submission - Baby Shower",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
