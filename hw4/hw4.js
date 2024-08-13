function square(numA, numB){
    if (numA < 0 || numB < 0 || typeof numA !== "number" || typeof numB !== "number"){return undefined}
    else {return numA * numB}
}

function circleSquare(radius){
    if (radius < 0 || typeof radius !== "number"){return undefined}
    else {return 3.141519 * radius ** 2 }
}

function clndrSqr(height, radius){
    if (height < 0 || radius < 0 || typeof height !== "number" || typeof radius !== "number"){return undefined}
    else {return 2 * 3.141519 * radius * (radius + height)}
}

function itemsOfArray(arr){
    for (const item of arr) {
        console.log(item);
    }
}

function createParagraph(text){document.write(`<p>${text}</p>`)}

function createlist(text){
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}

function createList2(text, count){
    if(count > 0 || typeof count === "number") {
        document.write(`<ul>`);
        for (let i = 1; i <= count; i++){document.write(`<li>${text}</li>`)}
        document.write(`</ul>`);
    }
}

function createList3(arr){
    if(arr.length > 0 || typeof arr === "object"){
        document.write(`<ul>`);
        for (let i = 0; i < arr.length; i++){document.write(`<li>${arr[i]}</li>`)}
        document.write(`</ul>`);
    }
}

function createDivUser(users){
    if(users.length > 0 || typeof users === "object"){
        document.write(`<div>`);
        for (let i = 0; i < users.length; i++){
            document.write(`
                <h3>${users[i].id}</h3>
                <h2>${users[i].name}</h2>
                <p>${users[i].age}</p>
            `)}
        document.write(`</div>`);
    }
}

function minNum(arr){
    if(arr.length > 0 || typeof arr === "object"){
        let minNumb = arr[0];
        for (let i = 1; i < arr.length; i++){
            if(arr[i] < minNumb){minNumb = arr[i]}
        }
        return minNumb;
    }
}

function sum(arr){
    if(arr.length > 0 || typeof arr === "object"){
        let summary = 0;
        for (const num of arr){summary += num}
        return summary;
    }
}

function swap(arr,index1,index2){
    if(arr.length > 0 || typeof arr === "object" || index1 < arr.length || index2 < arr.length){
        let arr1 = [];
        for(let i = 0; i < arr.length; i++ ){
            if(i !== index1 && i !== index2){arr1[i] = arr[i]}
            else if(i === index1){arr[i] = arr[index2]}
            else {arr1[i] = arr[index1]}
        }
        return arr1;
    }
}

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency){return sumUAH * currency.value}
    }
}