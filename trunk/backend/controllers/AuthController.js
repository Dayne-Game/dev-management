import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// @DESC    Decode Token & Check Expiry
// @ROUTE   /api/auth/validate-token-expiry
// @ACCESS  PRIVATE
const ValidateTokenExpiry = asyncHandler(async (req, res) => {
    let token = req.headers.authorization.split(" ")[1];

    let response = {};

    let decoded = jwt.verify(token, process.env.JWT_SECRET);

    let expiry = decoded.exp - 120;

    if(Date.now() >= expiry * 1000) {
        response = false;
    } else {
        response = true;
    }

    res.json(response);
})

export { ValidateTokenExpiry };