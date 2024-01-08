let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let number = document.querySelector("#number");
let special = document.querySelector("#special");
let input = document.querySelector(".in");
let passwordlength = document.querySelector("#passlen");

let generatebtn = document.querySelector("#Generatebtn");
let upp = 'ABCDEFGHIJKLMNOPQRSTWVXYZ';
let low = 'abcdefghijklmnopqrstvwxyz';
let sp = '@$#/?,!';
let num = "0123456789";
let char = '';
function generator() {

    let char = '';
    let pass = '';
    char += lowercase.checked ? low : "";
    char += uppercase.checked ? upp : "";
    char += number.checked ? num : "";
    char += special.checked ? sp : "";
    let rand = '';
    if (passwordlength.value > 0) {
        for (let i = 0; i < passwordlength.value; i++) {
            rand = Math.floor(Math.random() * char.length);
            pass += char[rand];
        }
        input.value = pass;
    }
    else {
        input.value='';
        alert("Enter a positive length");
    }


}
generatebtn.addEventListener("click", () => {
    generator();
})
document.querySelector("#copy").addEventListener("click",()=>{
    if(input.value!='')
    {
    navigator.clipboard.writeText(input.value);
    alert("Copied");
    }
    else{
        alert("Value is empty so can't not be copied");
    }
   

})


