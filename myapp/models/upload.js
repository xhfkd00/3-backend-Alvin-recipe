const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'image/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {
        files: 10,
        fileSize: 10 * 1024 * 1024
    }
});

module.exports = upload;
