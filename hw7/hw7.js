function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users =[];
users.push(new User(10, 'Vasya', 'Pupkin', 'vp@gmail.com', 3804535265));
users.push(new User(1, 'Maryna', 'Pupkina', 'mp@gmail.com', 3804535266));
users.push(new User(7, 'Stepan', 'Bandera', 'oun@gmail.com', 3804535275));
users.push(new User(45, 'Armin', 'Adlert', 'aa@gmail.com', 3804535268));
users.push(new User(67, 'Mikasa', 'Akkerman', 'mikasa@gmail.com', 3804535269));
users.push(new User(103, 'Levi', 'Akkerman', 'la@gmail.com', 3804535270));
users.push(new User(13, 'Ryner', 'Brown', 'rb@gmail.com', 3804535264));
users.push(new User(56, 'Zik', 'Egger', 'ze@gmail.com', 3804535263));
users.push(new User(69, 'Erren', 'Egger', 'ee@gmail.com', 3804535262));
users.push(new User(24, 'Grisha', 'Egger', 'dr-egger@gmail.com', 3804535261));
console.log(users)

console.log(users.filter(user => user.id % 2 === 0));

console.log(users.sort((user1, user2) => user1.id - user2.id));

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const clients = [];
clients.push(new Client(10, 'Vasya', 'Pupkin', 'vp@gmail.com', 3804535265, ['beer', 'nuts']));
clients.push(new Client(1, 'Maryna', 'Pupkina', 'mp@gmail.com', 3804535266, ['bread', 'milk', 'eggs', 'potatoes']));
clients.push(new Client(7, 'Stepan', 'Bandera', 'oun@gmail.com', 3804535275, ['granatas', 'guns', 'bullets']));
clients.push(new Client(45, 'Armin', 'Adlert', 'aa@gmail.com', 3804535268, ['books']));
clients.push(new Client(67, 'Mikasa', 'Akkerman', 'mikasa@gmail.com', 3804535269, ['weapon', 'more weapon', 'mooore weapon', 'scarf']));
clients.push(new Client(103, 'Levi', 'Akkerman', 'la@gmail.com', 3804535270, ['something']));
clients.push(new Client(13, 'Ryner', 'Brown', 'rb@gmail.com', 3804535264, ['armor']));
clients.push(new Client(56, 'Zik', 'Egger', 'ze@gmail.com', 3804535263, ['baseball']));
clients.push(new Client(69, 'Erren', 'Egger', 'ee@gmail.com', 3804535262, ['freedom']));
clients.push(new Client(24, 'Grisha', 'Egger', 'dr-egger@gmail.com', 3804535261, ['main titan']));

console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));

function Car(model, brand, year, maxSpeed, engineVolume){
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.enginVolume = engineVolume;

    this.drive = function (){console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)}
    this.info = function (){
        for (const key in this) console.log(key, this[key])
    }
    this.increaseMaxSpeed = function (newSpeed){this.maxSpeed += newSpeed}
    this.changeYear = function (newValue){this.year = newValue}
    this.addDriver = function (driver){this.driver = driver}
}

class Cars {
    constructor(model, brand, year, maxSpeed, engineVolume) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginVolume = engineVolume;
    }
    drive(){console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)}
    info(){
        for (const key in this) console.log(key, this[key])
    }
    increaseMaxSpeed(newSpeed){this.maxSpeed += newSpeed}
    changeYear(newValue){this.year = newValue}
    addDriver(driver){this.driver = driver}
}

class AshHead{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince extends AshHead{
    constructor(name, age, foundShoe) {
        super(name, age);
        this.foundShoe = foundShoe;
    }
}
const ashHeads =[];
ashHeads.push(new AshHead('Василина', 18, 35));
ashHeads.push(new AshHead('Юля', 19, 34));
ashHeads.push(new AshHead('Софія', 18, 36));
ashHeads.push(new AshHead('Світлана', 25, 37));
ashHeads.push(new AshHead('Христина', 17, 33));
ashHeads.push(new AshHead('Леся', 17, 32));
ashHeads.push(new AshHead('Людмила', 20, 38));
ashHeads.push(new AshHead('Гурген', 25, 47));
ashHeads.push(new AshHead('Соломія', 36, 45));
ashHeads.push(new AshHead('Баба Галя', 56, 46));
const prince = new Prince("Олесь", 28, {material: "crystal", size: 38})
for (const ashHead of ashHeads) {
    if (ashHead.footSize === prince.foundShoe.size) console.log(`З принцем має жити ${ashHead.name}, ${ashHead.age}`)
}
console.log(ashHeads.find((ashHead) => ashHead.footSize === prince.foundShoe.size));

Array.prototype.forEach = function (){for (const item of this) console.log(item)}
Array.prototype.filter = function (filter){
    const filteredArray = []
    for (const item of this) if (item === filter ) filteredArray.push(item)
    return filteredArray;
}