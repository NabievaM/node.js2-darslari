const path = require("path");
const Io = require("../utils/Io");
const About = require("../models/about.model");
const { serviceValidation } = require("../validations/Services.validation");
const { v4 } = require("uuid");
const Abouts = new Io("./database/about.json");

const create = async (req, res) => {
    try {
        const { title, description } = req.body;
        const file = req.files?.photo;

        const error = serviceValidation({ title, description, file });
   
        if (error) return res.status(400).json({ message: error.message });

        const abouts = await Abouts.read();

        const id = (abouts[abouts.length - 1]?.id || 0) + 1;

        const photoName = v4() + path.extname(file.name);
        file.mv(process.cwd() + "/uploads/" + photoName);
    
        const about = new About(
            id,
            title,
            description,
            photoName,
        );

        const data = abouts.length ? [...abouts, about] : [about];

        await Abouts.write(data);

        res.status(201).json({ message: "Success", data: about });
    } catch (error) {
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
};

const get = async (req, res) => {
    try {
        const abouts = await Abouts.read();

        res.json({ data: abouts });
    } catch (error) {
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    const abouts = await Abouts.read();

    const filter = abouts.filter((about) => about.id != id);

    await Abouts.write(filter);

    res.json({ message: "Deleted" });
};

module.exports = {
  create,
  get,
  remove,
};