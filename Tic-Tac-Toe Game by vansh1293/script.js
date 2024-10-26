let btn=document.querySelector(".btn");
let input1=document.getElementById("name1");
let input2=document.getElementById("name2");
async function main()
{
const gameopen=((event)=>{
    if(name1.value && name2.value)
    {
        localStorage.setItem("input1",input1.value);
        localStorage.setItem("input2",input2.value);
        window.location.replace("structure2.html");
    }
    else
    {
        alert("Please enter player's name");
    }
});
btn.addEventListener("click",gameopen);
}
main();