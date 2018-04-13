//for delete touch function
function del(){
    document.getElementById("totalTag").innerHTML=document.getElementById("totalTag").innerHTML.substr(0,document.getElementById("totalTag").innerHTML.length-1);}

//for  Clear function
function screen(value){
    document.getElementById("totalTag").innerHTML=value;   }

//for touch function
function touchValue(value){
    document.getElementById("totalTag").innerHTML+=value;}

//for = touch function
function equal(){ 
    try{ 
        document.getElementById("lastProcess").innerHTML=document.getElementById("totalTag").innerHTML;
        screen(eval(document.getElementById("totalTag").innerHTML));   
    } 
    catch(e) {
        screen('Error') 
    } }