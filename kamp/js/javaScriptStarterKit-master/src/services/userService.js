export default class UserService {
    //export dışarıdam export edilebilir
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    add(user) {
        this.users.push(user)         //userları constructora pushla
        this.loggerService.log(user)
    }

    list() {
        return this.users              //constructor arrayini döndür
    } 

    getById(id) {
        return this.users.find(u=>u.id == id)
    }



}