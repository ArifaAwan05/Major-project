const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

//Middle ware
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization; // Use req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ error: "You should be logged in" });
    }
    // Extract token assuming header format is 'Bearer <token>'
    const token = authHeader.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in" });
        }
        
        const { _id } = payload;
        try {
            const userData = await Users.findById(_id);
            if (!userData) {
                return res.status(401).json({ error: "User not found" });
            }
            req.user = userData; // Store user data in req.user
            next(); // Proceed to next middleware or route handler
        } catch (error) {
            return res.status(500).json({ error: "Server error" });
        }
    });
};
