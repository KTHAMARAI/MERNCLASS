function func() {
    "use strict";
    var arr = [];
    arr.push(1);
    arr.push(10);
    arr.push(200)
    arr.pop();
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
    console.warn("This is a warning message");
    console.error("This is an error message");
    console.table(arr);

    //eval is used to execute a string of JavaScript code
    // It can be dangerous if used with untrusted input, as it can execute arbitrary code
    eval("console.log('This is an eval message');");

    //strict mode uses
    var x = 10; // Actual syntax : var x = 10;
    // In strict mode, the above line will throw an error because x is not declared.
    console.log(x);

    let obj = { name: "TSK" }
    let str = JSON.stringify(obj);
    console.log(str);
    let obj2 = JSON.parse(str);
    console.log(obj2);

    // Local Storage
    // Local storage is a way to store data in the browser
    // It is a key-value store that persists even after the browser is closed
    localStorage.setItem("name", "TSK");
    localStorage.setItem("passsword", "TSK@gmail.com");
    localStorage.setItem("age", "19");
    console.log(localStorage.getItem("name"));
    localStorage.removeItem("age");
    console.log(localStorage.getItem("age")); // This will return null since the item was removed

    // Session Storage
    // Session storage is similar to local storage, but it is cleared when the browser is closed    
    sessionStorage.setItem("name", "Tsk");
    sessionStorage.setItem("passsword", "Tsk@gmail.com");
    sessionStorage.setItem("age", "19");
    console.log(sessionStorage.getItem("name"));

    //promises
    // A promise is an object that represents the eventual completion (or failure) of an asynchronous operation
    // and its resulting value.
    // A promise can be in one of three states: pending, fulfilled, or rejected.
    let promise = new Promise((resolve, reject) => {
        let commit = true;
        setTimeout(() => { resolve("hello") }, 10000);
        if (commit) {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    });
    promise.then((value) => { console.log(value); }).catch((error) => { console.error(error); });

    function outer() {
        let name = "Tsk";
        return function inner() {
            console.log("Hello " + name);
        }
    }
    //getting the div content using ElementById
    let body = document.getElementById("DOM");
    console.log(body);

    //updating the div content using innerHTML
    body.innerHTML = "<h2>Welcome Tsk</h2>";
    body.style.color = "red";
    body.style.backgroundcolor = "aqua";

    //getting the div content using querySelector
    let cl = document.querySelector(".classDOM");//
    //creating elemets using createElement 
    console.log(cl);

    let newele = document.createElement("h1");
    newele.innerText = "Tsk"  //h1 is the tag name  
    body.appendChild(newele);
    setTimeout(() => {
        body.removeChild(newele);
    }, 10000);
    //adding data to the element
    ele.innerHTML = "<h1>Hello World</h1";
    divDom.appendChild(ele);
    console.log(ele.innerHTML);
    let body1 = document.getElementById("dom");
    console.log(body1);
    let newe = document.createElement("h2");
    newe.innerText = "Hi,This is TSK here!";


    let newele2 = document.createElement("h2");
    newele1.innerText = "I am pursuing my B.E in Electronics and Instrumentation Enginnering at Kongu Engineering College,Perundurai,Erode.";
    setTimeout(() => { body.appendChild(newele2); }, 1000);
    setTimeout(() => { body.removeChild(newele2); }, 5000);

    let newele1 = document.createElement("h2")
    newele1.innerText = "Seeking for an InternShip";
    setTimeout(() => { body.appendChild(newele1); }, 5000);
    setTimeout(() => { body.removeChild(newele1); }, 10000);

    let obj1 = document.getElementById("event");
    obj1.addEventListener("click", () => {
        obj1.innerText = "clicked";
    });


}