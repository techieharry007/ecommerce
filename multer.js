const multer=require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./multer/images");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const fileFiltering = (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("limited images"));
    }
  };
  const upload = multer({ storage: storage,limits: {
    fileSize: 1024 * 1024 * 15,
  },
  fileFilter: fileFiltering, })
  module.exports={upload}