import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "A Username is required!"]
    },
    email: {
        type: String,
        required: [true, "An Email is required"]
    },
    password: {
        type: String,
        required: [true, "A Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( (value) => this._confirmPassword = value);

const User = model("User", UserSchema);

export default User