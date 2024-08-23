let user = {
    id: 1,
    name: 'name',
    greeting() {console.log(`Hello, my name is ${this.name}`)}
}
function cloneOfObject(obj){
    if (obj){
        let newObj = JSON.parse(JSON.stringify(obj));
        newObj.__proto__ = obj;
        return newObj;
    }
}