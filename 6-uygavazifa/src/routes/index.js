const authRouter = require("./auth.routes");
const servicesRouter = require("./services.routes");
const feedbackRouter = require("./feedback.routes");
const contactRouter = require("./contact.routes");
const aboutRouter = require("./about.routes");
const galleryRouter = require("./gallery.routes");

module.exports = [
    authRouter,
    servicesRouter,
    feedbackRouter,
    contactRouter,
    aboutRouter,
    galleryRouter
];