import { getUserByEmail, getUserByUsername, createUser } from "../models/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function signUp(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email and password are required' });
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    } else {
        // Hash the password and create the user
        const hash = await bcrypt.hash(password, saltRounds);
        const user = await createUser(username, email, hash);
        res.status(201).json({ id: user.id, username: user.username, email: user.email });
    }
}

export async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const user = await getUserByUsername(username);
    // Same message for unknown user and wrong password so we don't leak which usernames exist
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ id: user.id, username: user.username, email: user.email });
}
