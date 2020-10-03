var fmaily_img=[ "Father.jpg","Brother.jpg","mother.jpg","sISTER.jpeg","Baby.jpg" ];
var Books=["The Father Book", "The Brother Book","The Mother Book","The Sister Book","The Babay Book"];
var i=0;
function nextslide(){
    document.getElementById("FamBook").innerHTML=Books[i];
    document.getElementById("TheFamilyBook").src=fmaily_img[i];
    i++;
    if(i==5){
        i=0;
    }
}