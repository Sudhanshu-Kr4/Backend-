// We'll use special package mongoose Aggregate pipeline to manage watchHistory data

import mongoose, {Schema} from "mongoose" ;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile : {
      type : String,  // upload url
      required : true
    },
    thumbnail : {
      type: String,
      required : true
    },
    title : {
      type : String,
      required : true
    },
    description : {
      type : String,
      required : true
    }, 
    duration : {     // extract from cloudinary/AWS as it give url with duration 
      type : number,
      required : true
    },
    views : {
      type:number,
      default : 0
    },
    isPublished : {   // publicly availability
      type : Boolean,
      default : true
    },
    owner : {
      type : mongoose.Schema.ObjectId,
      ref : "User"
    }
  },
  {
    timestamp : true
  }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoSchema)

