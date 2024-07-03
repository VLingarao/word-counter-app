function keyHasBeenPressed(){
    // Charcount
    let textAreaContent = document.querySelector("textarea");
    let charcount = document.querySelector(".charCount")
    charcount.innerHTML = String(textAreaContent.value).length;
    // Total Characters left
    let charLimit = 200;
    let totalleft = document.querySelector(".totalleft")
    totalleft.innerHTML = charLimit - textAreaContent.value.length;

    if(textAreaContent.value.length > 200){
        textAreaContent.value = String(textAreaContent.value).substring(0,charLimit);
    }
    // wordcount
    let wordCount = document.querySelector(".wordcount")
    let splitsentence =(String(textAreaContent.value).split(" ").length);
    wordCount.innerHTML = splitsentence;    
}

// ClearText
document.querySelector(".clearButton").addEventListener('click',()=>{
    document.querySelector("textarea").value =" ";
    document.querySelector(".charCount").innerHTML = 0;
    document.querySelector(".wordcount").innerHTML = 0;
    document.querySelector(".totalleft").innerHTML = 200;

})