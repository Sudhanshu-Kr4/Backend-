import { asyncHandler } from "../utils/asyncHandler.js" ;
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.model.js" ;
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res) => {
  // 1. get user details from frontend
  // 2. validation - not empty
  // 3. check if user already exists: username, email
  // 4. check for images, check for avatar
  // 5. upload them to cloudinary, avatar
  // 6. create user object - create entry in db
  // 7. remove password and refresh token field from response
  // check for user creation
  // return res


  console.log("user controller is running");

  // 1. (for images check in user router)
  const {username , fullname, email, password} = req.body  // data from form,JSON get it from req.body 
  console.log("email : ", email )

  // 2 .
  if([username,fullname,email,password].some((field) => field?.trim() === "")){
    throw new ApiError(400,"All fields are required")
  }

  // 3. 
  const existedUser = await User.findOne({
    $or : [{ username }, { email }]    
  })

  if(existedUser){
    throw new ApiError(400,"User with email and username exist already")
  }

  // 4.
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImgLocalPath = req.files?.coverImage[0]?.path ;
  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar img is required")
  }

  // 5.
  const avatar = uploadOnCloudinary(avatarLocalPath);
  const coverImage = uploadOnCloudinary(coverImgLocalPath);
  if(!avatar){
    throw new ApiError(400, "Avatar Image is not uploaded on cloudinary")
  }

  // 6.
  const user = await User.create({
    fullname,
    avatar : avatar.url,
    coverImage : coverImage?.url || "",
    email,
    password,
    username : username.toLowerCase()
  })

  // 7, 8 .
  const createdUser =  await User.findById(user._id).select("-password -refreshToken") // to check whether user is empty or null
  if(!createdUser){
    throw new ApiError(500 , "something wrong on deselecting password and refresh token")
  }


  // 9.
  return res.status(201).json(
    new ApiResponse(200, createdUser , "User registered successfully") 
  )



})


export { registerUser } 