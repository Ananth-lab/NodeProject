const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../models/client");

const Agency = require("../models/agency");

const generateAccessToken = (id) => {
  return jwt.sign({ userid: id }, process.env.AUTH_SECRET_KEY);
};

exports.logInController = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result == true) {
          res
            .status(201)
            .json({
              message: "User login successful",
              userId: user._id,
              token: generateAccessToken(user.id),
            });
        } else {
          res.status(401).json({ error: "User is not authorized" });
        }
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDetailsController = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.query.userId });
    const details = {
      name: user.name,
      email: user.email,
      phonenumber: user.phone_number,
      bill: user.total_bill,
    };
    res.status(201).json({ details });
  } catch (err) {
    console.log(err);
  }
};

exports.updateDetailsController = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.query.userId, {
      name: req.body.username,
      email: req.body.email,
      phone_number: req.body.phonenumber,
      total_bill: req.body.bill,
    });
    res.status(201).json({ message: "User details updated" });
  } catch (err) {
    console.log(err);
  }
};

exports.getBillsController = async (req, res, next) => {
  try {
    User.find()
      .populate("agency_id", "name")
      .select("name total_bill")
      .exec((err, clients) => {
        if (err) {
          console.log(err);
          return;
        }
        clients.sort((a, b) => b.total_bill - a.total_bill);
        const results = clients.map((client) => ({
          agencyName: client.agency_id.name,
          clientName: client.name,
          totalBill: client.total_bill,
        }));
        res.status(201).json({ message: "data retrived", result: results });
      });
  } catch (err) {
    console.log(err);
  }
};
