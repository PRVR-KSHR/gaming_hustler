import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Add the following line after the cors middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect("mongodb+srv://admin:Admin12345@cluster0.be3udot.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected");
}).catch(err => console.error(err));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String
});

const User = mongoose.model("User", userSchema);

app.get("/",(req,res)=>{
    res.send("Server is Running...");
});

app.post("/login", (req, res)=> {
    const { email, password} = req.body;
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successful", user: user});
            } else {
                res.status(401).send({ message: "Password didn't match"});
            }
        } else {
            res.status(404).send({message: "User not registered"});
        }
    });
});

app.post("/signup", upload.single('profileImage'), (req, res)=> {
    const { name, email, password} = req.body;
    const profileImage = req.file ? req.file.filename : null;
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.status(409).send({message: "User already registered"});
        } else {
            const newUser = new User({
                name,
                email,
                password,
                profileImage
            });
            newUser.save(err => {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.send( { message: "Successfully Registered, Please login now." });
                }
            });
        }
    });
});

app.post("/reset-password", (req, res) => {
    const { email, newPassword } = req.body;
    User.findOneAndUpdate({ email: email }, { password: newPassword }, (err, user) => {
        if (err) {
            res.status(500).send({ message: "Internal Server Error" });
        } else if (!user) {
            res.status(404).send({ message: "User not found" });
        } else {
            res.send({ message: "Password reset successful" });
        }
    });
});

app.listen(9002, '0.0.0.0', () => {
    console.log("BE started at port 9002"); 
  });
