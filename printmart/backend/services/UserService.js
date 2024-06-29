const Users = require("../model/Users")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const UserService = {};

const saltRounds = 10;
const secretKey = "hahaha"
// ---------------------------------------------------------------------------------------------------------------------

UserService.register = async (username, password, email, contactPhoneNumber) => {
    try {
        const userFound = await Users.findOne({
            $or: [
                { username },
                { email },
            ],
        });
        console.log("this is user =", userFound )

        if (!userFound) {
            const hashPassword = bcrypt.hashSync(password, saltRounds);
            const singleUserData = { username, password: hashPassword, email, contactPhoneNumber };
            console.log("single user data = ", singleUserData)
            const registeredUser = await Users.create(singleUserData)
            console.log("registered user = ", registeredUser)
            var authorization = jwt.sign({ userId: registeredUser._id }, secretKey)
            delete registeredUser._doc.password    //in mongodb prop stored in doc 
            console.log("here")
            return {
                status: "OK",
                msg: "user registered successfully",
                data: { authorization, registeredUser }
            }

        }
        else {
            return {
                status: "err",
                msg: "user already resgiterd with this email or username try entering different username or email",
                data: null
            }
        }
    }
    catch (err) {
        return {
            status: "err",
            msg: "server error",
            data: null
        }
    }

}

UserService.login = async (email, password) => {
    try {
        const userFound = await Users.findOne({ email });
        if (userFound) {
            const passwordCheck = bcrypt.compareSync(password, userFound.password);
            delete userFound._doc.password

            if (passwordCheck) {
                var authorization = jwt.sign({ userId: userFound._id }, secretKey)
                return {
                    status: "OK",
                    msg: "user logined successfully",
                    data: { authorization, userFound }
                }
            }
            else {
                return {
                    status: "err",
                    msg: "password is incorrect",
                    data: null
                }
            }

        }
        else {
            return {
                status: "err",
                msg: "no user found with this email",
                data: null
            }
        }
    }
    catch (err) {
        return {
            status: "err",
            msg: "server error",
            data: null
        }
    }

}

// UserService.profileInfoUpdate = async (_id, companyLogo, companyAddress, gst) => {
//     try {
//         console.log(_id)
//         const userFound = await Admin.findOneAndUpdate({ _id }, { companyLogo, companyAddress, gst }, { new: true, runValidators: true });
//         console.log("admifound data type is = ", typeof (userFound))
//         console.log(userFound)
//         delete userFound._doc.password;
//         if (userFound!=null) {
//             console.log("inside if")
//             return {
//                 status: "OK",
//                 msg: "admin profile updated successfully",
//                 data: userFound
//             }
//         }
//         else {
//             console.log("inside else")
//             return {
//                 status: "err",
//                 msg: "no such admin is present in database",
//                 data: null
//             }
//         }
//     }
//     catch (err) {
//         return {
//             status: "err",
//             msg: "server error",
//             data: null
//         }
//     }
// }

module.exports = UserService