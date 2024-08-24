function cloneOfObject(obj){
    if (obj){
        let clone = JSON.parse(JSON.stringify(obj));
        for (const key in obj) {
            if (typeof obj[key] === 'function') clone[key] = obj[key].bind();
        }
        return clone;
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
coursesAndDurationArray = coursesAndDurationArray.map((value, index)=> ({id: index +1, ...value}));