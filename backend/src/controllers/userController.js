    import user from "../models/userModel.js";
    import bcrypt from "bcryptjs";
    import validator from "validator";
    import jwt from "jsonwebtoken";

    const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
    };

    export async function getLogin(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
        return res.status(400).json({ message: "All field need to be filled" });
        }
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
        return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = createToken(existingUser._id);
        return res
        .status(201)
        .json({ message: "Successfully logged in", user: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
    res.json({ message: "login" });
    }

    export async function getSignUp(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
        return res
            .status(400)
            .json({ message: "All fields are required to be filled" });
        }
        if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
        }
        if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Password Not Strong" });
        }
        const existingUser = await user.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: "User email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await user.create({ email, password: hashedPassword });
        const token = createToken(newUser._id);
        return res.status(201).json({
        message: "User registered successfully",
        user: { newUser },
        token,
        });
    } catch (error) {
        res.status(500).json({ message: "SignUp Failed", error });
    }
    // res.json({message: "signup"})
    }
