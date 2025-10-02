
const UserModel= require("../Models/user");


exports.register = async (req, res) => {
  try {
    const { email, name, photoUrl } = req.body;

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = new UserModel({ name, email, photoUrl });
      await user.save();
      return res.status(200).json({
        message: "User registered successfully",
        success: true,
        user,
      });
    }

    // 🔑 Always update with the latest Google info
    user.name = name;
    user.photoUrl = photoUrl;
    await user.save();

    return res.status(200).json({
      message: "Welcome back",
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in registering user",
      success: false,
      error: err.message,
    });
  }
};
