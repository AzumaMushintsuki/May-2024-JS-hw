// ---- Масиви
// --1
let arr = [1, 2, 'a', 'b', 5, 6, 'c', 'd', true, false]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// ---2
let book1 = {
    title: 'Citizen of Galaxy',
    pageCount: 316,
    genre: 'SiFy',
}
let book2 = {
    title: 'Collision of Worlds',
    pageCount: 638,
    genre: 'Fantasy',
}
let book3 = {
    title: 'Python Crash Course',
    pageCount: 600,
    genre: 'Tutorial',
}

// ---3
let book4 = {
    title: 'Citizen of Galaxy',
    pageCount: 316,
    genre: 'SiFy',
    authors: [
        {name: 'Robert A. Heinlein', age: 80,},
    ]
}
let book5 = {
    title: 'Collision of Worlds',
    pageCount: 638,
    genre: 'Fantasy',
    authors: [
        {name: 'Stephen King', age: 76,},
    ]
}

let book6 = {
    title: 'Python Crash Course',
    pageCount: 600,
    genre: 'Tutorial',
    authors: [
        {name: 'Eric Matthes', age: 48,},
    ]
}

// ---4
let users = [
    {name: 'Itachi', username: 'IUchiha', password: 'lkhsf857',},
    {name: 'Sasuke', username: 'SUchiha', password: 'ljh476fhos',},
    {name: 'Earen', username: 'EYegger', password: 'afhli74;',},
    {name: 'Mikasa', username: 'Mikasa', password: 'lhsflh348',},
    {name: 'Armin', username: 'Adlert-A', password: 'hds5447',},
    {name: 'Byorn', username: 'BIronside', password: 'jgfdsst',},
    {name: 'Lagertha', username: 'YarlInstad', password: 'ttrj,d',},
    {name: 'Floki', username: 'BoatMaster', password: 'iite6650',},
    {name: 'Kirigaya', username: 'Kirito', password: 'jhfj332',},
    {name: 'Momo', username: 'Momom', password: 'fgfg35',},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// ---5
let temperature = [
    {morning: 5, day: 10, evening: 8,},
    {morning: 5, day: 10, evening: 8,},
    {morning: 5, day: 10, evening: 8,},
    {morning: 5, day: 10, evening: 8,},
    {morning: 5, day: 10, evening: 8,},
    {morning: 5, day: 10, evening: 8,},
    {morning: 5, day: 10, evening: 8,},
]

// ---- If
// ---1
let x = +prompt('number for x')
x !== 0 ? console.log('Вірно'):console.log('Невірно')

// ---2
let time;
let quarter; // За необхідності можна замінити на console.log
if (time < 0 || time >= 60 || typeof (time) !== "number") {quarter = 'Invalid number'}
else if (time < 15) {quarter = 1}
else if (time < 30) {quarter = 2}
else if (time < 45) {quarter = 3}
else {quarter = 4}

// ---3
let day;
let decade;
if (day <= 10) {decade = 1}
else if (day <=20) {decade = 2}
else {decade = 3}

// ---4
let plan = +prompt('day of week (1-7)')
switch (plan){
    case 1:
        console.log('Фізика, Електротехніка, Українська мова, ОБЖД');
        break;
    case 2:
        console.log('Алгебра, КВПіА, Матеріалознавство, Хімія');
        break;
    case 3:
        console.log('Практичні заняття');
        break;
    case 4:
        console.log('Електротехніка, Автоматизація с/г процессів, Історія України, Геометрія');
        break;
    case 5:
        console.log('Практичні заняття');
        break;
    case 6:
        console.log('Вихідний');
        break;
    case 7:
        console.log('Вихідний');
        break;
    default:
        console.log('Invalid number')
}

// ---5
let a = +prompt('Enter first number')
let b = +prompt('Enter second number')
if (a > b) {console.log(a)}
else if (b > a) {console.log(b)}
else {console.log('Ваші числа рівні')}

// ---6
let x1;
if (!x1){x1 = 'default'}

// ---7
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
coursesAndDurationArray[0].monthDuration > 5 ? console.log("Супер"):0
coursesAndDurationArray[1].monthDuration > 5 ? console.log("Супер"):0
coursesAndDurationArray[2].monthDuration > 5 ? console.log("Супер"):0
coursesAndDurationArray[3].monthDuration > 5 ? console.log("Супер"):0
coursesAndDurationArray[4].monthDuration > 5 ? console.log("Супер"):0
coursesAndDurationArray[5].monthDuration > 5 ? console.log("Супер"):0
