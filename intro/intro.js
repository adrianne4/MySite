function clickButton(){
    console.log(`Hello World`);
    const myText= document.getElementById("myText");
    myText.innerHTML = `It worked`;
    myText.className = `myClass`;

    const body = document.body;
    body.style.backgroundColor = `pink`;

    const button= document.getElementById("button");
    button.style.backgroundColor = `green`;

    const bgcolor= document.getElementById("bgcolor");
    body.style.backgroundColor = bgcolor.value;
}