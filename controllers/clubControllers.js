const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Clubs = require("../models/ClubsModel");
exports.registerClub = asyncHandler(async (req, res, next) => {
  const { clubname, clubaddress, phone } = req.body;
  const user = req.user;
  try {
    const Club = await Clubs.create({
      clubname,
      clubaddress,
      phone,
      admin: user,
    });

    return res.send({ status: true, message: "Sucessfull Register club" });
  } catch (error) {
    console.log("Fail to register club", error.message);
    return next(new ErrorResponse("Fail to Register Club ", 400));
  }
});

exports.getMyClub = asyncHandler(async (req, res, next) => {
  // console.log("getMyClub executed");
  // console.log(req.user._id);
  const myClub = await Clubs.findOne({ admin: req.user._id });
  console.log(myClub);

  res.send({ sucess: true, data: myClub });
});
