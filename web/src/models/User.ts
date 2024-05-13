import mongoose from "mongoose";
import bcrypt from "bcrypt";

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, "Username is required"],
        unique: true,
        minlength: [5, "Username must be at least 5 characters long"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select: false,
        minlength: [8, "Password must be at least 8 characters long"]
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

const User = mongoose.models.User || mongoose.model("User", UserSchema, "Users");

export default User;