import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let logger1 = new BaseLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "ömer", "oğur", "istanbul");
let user2 = new User(2, "engin", "demiroğ", "ankara");

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




// prototyping sonradan var olmayan değer eklemek
let customer = { id: 1, firstName: "Engin" }
customer.lastName = "Demiroğ"
