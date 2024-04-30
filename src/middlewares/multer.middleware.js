// multer is a middleware, it saves the uploaded files to the server's file system (computer storage ?), where they can be accessed and managed


import multer from "multer";

// using multer we save the file to diskStorage
const storage = multer.diskStorage({

  // giving destination where file will be saved
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },

  // providing original name(given by user) for saving 
   filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer(
  { 
    storage, 
  }
)