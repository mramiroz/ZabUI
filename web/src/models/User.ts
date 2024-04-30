import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {ObjectId} from "mongodb";

const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid"
        ]
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    favComps: {
        type: Array,
        default: []
    }
}, {timestamps: true});

UserSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

UserSchema.methods.addFavComp = function(compId : ObjectId){
    if(this.favComps.includes(compId)){
        return;
    }
    this.favComps.push(compId);
    this.save();
}

UserSchema.methods.removeFavComp = function(compId : ObjectId){
    if(!this.favComps.includes(compId)){
        return;
    }
    this.favComps = this.favComps.filter((id: ObjectId) => id !== compId);
    this.save();
}

const User = mongoose.models.User || mongoose.model("User", UserSchema, "Users");

export default User;