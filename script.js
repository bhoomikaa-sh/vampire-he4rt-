function makeID() {
    let name=
     document.getElementById("name").ariaValueMax.trim();
     if (!name) {
        alert("Enter your username first♡");
        return;
     }

let id= "VH-" + Math.floor(1000+Math.random()*9000);
document.getElementById("result").innerHTML = 
"USERNAME :" + name +
"<br>MOOD:" +
document.getElementById("mood").value +
"<br>TYPE:" + 
document.getElementById("type").value +
"<br>ID: " + id +
"<br>|||| ||| |||| |||";
document.getElementById("card").hidden = false;
document.getElementById("card").dataset.id = id;
}
function copyID() {
    let id= 
    document.getElementById("card").dataset.id;
    navigator.clipboard.writeText(id).then(() => alert("ID copied ♡"))
    .catch(() => alert("Your ID is " + id));
}