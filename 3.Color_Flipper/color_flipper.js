const hexaletters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

function random_position(){
    let num = Math.floor(Math.random() * 16);
    let hexVaue = hexaletters[num];
    return hexVaue;
}                      

function random_hexa_code(){
    let code = "#";
    for(let i=0; i<6;i++){
        code += random_position();
    }
    return code;
}
console.log(random_hexa_code());

const hexcodestr = document.querySelector(".bg-color");

document.querySelector(".btn-bg-color-change").addEventListener("click", function (){
    const randomHexString = random_hexa_code();
    document.body.style.setProperty(
        'background-color',
        randomHexString
    );
    hexcodestr.textContent=randomHexString;

})
