import Web from '../models/web.model';

export const createWeb = async (req, res) => {
    const { user } = req.body;
    let { name } = req.body;
    name = name.toLowerCase();
    const createdWeb = new Web({ name, user: user });
    await createdWeb.save();
    res.status(201).json({ success: true, message: 'Web has been created', data: createdWeb });
};

export const getWebs = async (req, res) => {
    const webs = await Web.find();
    res.status(200).json({ success: true, data: webs });
}

export const getWeb = async (req, res) => {
    const webId = req.params.id;
    const web = await Web.findById(webId);
    res.status(200).json({ success: true, data: web });
}

export const getWebByName = async (req, res) => {
    const page = req.params.pagename;
    const web = await Web.findOne({ name: page }).populate('user');
    console.log(web);
    res.status(200).json({ success: true, data: web });
}