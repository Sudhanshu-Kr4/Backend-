import {v2 as cloudinary} from  'cloudinary';   //upload file to local server then to cloudinary database
import fs from "fs"  // node file system helps in open,read, write, remove in sync/async manner

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log("cloudinary is running");


// a method with parameter is path of local file, after successfully upload we unlink that local file

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type : "auto"
    })

    // file has been successfully uploaded 
    console.log("file is uploaded on cloudinary", response.url);

    return response;

  } catch (error) {
    fs.unlinkSync(localFilePath)  // remove local saved temporary file when upload operation got failed
  }
}

export {uploadOnCloudinary}

