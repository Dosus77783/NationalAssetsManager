import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "A Username is required!"],
        minlength: [3, "A Username must be 3 characters or longer!"],
        unique: [true, "Username already exists!"]
    },
    email: {
        type: String,
        required: [true, "An Email is required"],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)$/.test(val),
            message: "Please enter a valid email!"},
        unique: [true, "This Email already exists!"]
    },
    password: {
        type: String,
        required: [true, "A Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    countries: [{ type: Schema.Types.ObjectId, ref: 'Country' }]
}, {timestamps: true});

UserSchema.virtual("confirmPassword")
    .get( function(){return this._confirmPassword})
    .set( function(value){ this._confirmPassword = value});

UserSchema.pre("validate", function(next) {
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Your Password must match confirm password");
    }
    next();
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = model("User", UserSchema);


export default User