import mongoose from "mongoose";
import bcrypt from "bcrypt";

const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
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