const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadImageSingle = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`);
    //setup path duong dan de luu file va ten file

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`);
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}${file.originalname}`);
        },
    });

    const upload = multer({
        storage,
        fileFilter: function (req, file, cb) {
            const extensionImageList = ["png", "jpg", ".jpeg"];
            const words = file.originalname.split(".");
            const extension = words[words.length - 1].toLowerCase();
            if (extensionImageList.includes(extension)) {
                cb(null, true);
            } else {
                cb(new Error("Extension khong hop le"));
            }
        },
    });
    return upload.single("avatar");
};

module.exports = {
    uploadImageSingle,
};
