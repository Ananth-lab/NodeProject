const Agency = require("../models/agency");

const Client = require("../models/client");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

exports.SignUpController = async (req, res, next) => {
  try {
    const cycles = 10;
    bcrypt.hash(req.body.password, cycles, async (err, hash) => {
      try {
        if (req.body.agid) {
          const client = new Client({
            agency_id: new mongoose.Types.ObjectId(req.body.agid),
            name: req.body.username,
            email: req.body.email,
            password: hash,
            phone_number: req.body.phonenumber,
            total_bill: req.body.bill,
          });
          const new_client = await client.save();
          res.status(200).json({
            newuser: new_client,
            message: "User added for the agency",
          });
        } else {
          const agency = new Agency({
            name: req.body.agname,
            address1: req.body.address1,
            address2: req.body.address2,
            state: req.body.state,
            city: req.body.city,
            phone_number: req.body.agphonenumber,
          });
          const new_agency = await agency.save();
          console.log(new_agency);
          const id = new_agency._id;
          const client = new Client({
            agency_id: id,
            name: req.body.username,
            email: req.body.email,
            password: hash,
            phone_number: req.body.phonenumber,
            total_bill: req.body.bill,
          });
          const new_client = await client.save();
          res.status(200).json({
            newuser: new_client,
            agency: new_agency,
            message: "Admin and Agency created",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(504).json({ error: error.name });
      }
    });
  } catch (error) {
    res.status(504).json({ error: error });
  }
};
