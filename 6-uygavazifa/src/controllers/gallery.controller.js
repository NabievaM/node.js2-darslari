const path = require("path");
const Io = require("../utils/Io");
const Gallery = require("../models/gallery.model");
const { serviceValidation } = require("../validations/Services.validation");
const { v4 } = require("uuid");
const Galleries = new Io("./database/gallery.json");

const create = async (req, res) => {
  try {
    const { title } = req.body; 
    const file = req.files?.photo;

    const error = serviceValidation({ title, file });
   
    if (error) return res.status(400).json({message: error.message});

    const galleries = await Galleries.read();

      const id = (galleries[galleries.length - 1]?.id || 0) + 1;

    const photoName = v4() + path.extname(file.name);
    file.mv(process.cwd() + "/uploads/" + photoName);
    
      const gallery = new Gallery(
          id,
          title,
          photoName,
      );

      const data = galleries.length ? [...galleries, gallery] : [gallery];

      await Galleries.write(data);

      res.status(201).json({ message: "Success", data: gallery });
  } catch (error) {
      res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

const get = async (req, res) => {
    try {
        const galleries = await Galleries.read();

        res.json({ data: galleries });
    } catch (error) {
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    const galleries = await Galleries.read();

    const filter = galleries.filter((gallery) => gallery.id != id);

    await Galleries.write(filter);

    res.json({ message: "Deleted" });
};

module.exports = {
  create,
  get,
  remove,
};
