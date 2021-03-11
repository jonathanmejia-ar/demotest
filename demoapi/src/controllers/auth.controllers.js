import User from '../models/user.model';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const createdUser = new User({ username, email, password });
    await createdUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) res.status(404).json(({ success: false, message: 'User not found' }));
    if (user.password !== password) res.status(401).json({ success: false, message: 'password is incorrect' });
    res.status(200).send({ success: true, message: 'Logged In successfully', data: user });
};

export const profile = (req, res) => {
    res.send('Profile');
};
