let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

str1 = str1.toUpperCase();
str2 = str2.toUpperCase();
str3 = str3.toUpperCase();

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str3 = str3.toLowerCase();

let str = ' dirty string   ';
str = str.trim()
// //  якщо є зайві пробіли всередені стрінги :
// let str = ' dirty string   ';
// let arr = str.split(" ")
// arr = arr.filter(item => item !== "");
// str = arr.toString()
// str = str.replace(',', ' ')

function stringToArray(str) {
    if (str) {
        return str.split(' ')
    } else {
        return ['']
    }
}

const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
numbers.map(number => number + '');

function sortNums(array, direction) {
    switch (direction) {
        case 'ascending':return array.toSorted((a, b) => a - b);
        case 'descending':return array.toSorted((a, b) => b - a);
    }
}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const cADA = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({id: index + 1, ...value}));

// генератор колоди. значення скопійовані для зменшення кількості обчислень
// const cardSuit= ['spade', 'diamond', 'heart', 'clubs'];
// const value= ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//     // color:'', 'red','black'
// const cards = [];
// for (const suit of cardSuit) {
//     for (const element of value) {
//         const card = {cardSuit: suit, value: element}
//         if(suit === 'diamond' || suit === 'heart'){card.color = 'red'}
//         else {card.color = 'black' }
//         cards.push(card)
//     }
// }
// console.log(cards)
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}];
console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7'&& card.value !== '8'));

console.log(cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade': accumulator.spades.push(card);
        break;
        case 'diamond': accumulator.diamonds.push(card);
        break;
        case 'heart': accumulator.hearts.push(card);
        break;
        case 'clubs': accumulator.clubs.push(card);
        break;
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]}));

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => course.modules.includes('sass')));
console.log(coursesArray.filter(course => course.modules.includes('docker')));
