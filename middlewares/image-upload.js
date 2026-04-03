const path = require('path');
const multer = require('multer');
const uuid = require('uuid').v4;

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', 'product-data', 'images'),
    filename: function(req, file, cb) {
      cb(null, uuid() + '-' + file.originalname);
    }
  })
});

const configuredMulterMiddleware = upload.single('image');

module.exports = configuredMulterMiddleware;