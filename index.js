//Bài 1:
//input
function sort() {
    var integer1 = document.getElementById("firstNum").value ;
    var integer2 = document.getElementById("secondNum").value ;
    var integer3 = document.getElementById("thirdNum").value ;
    document.getElementById("ketQua").style.display = "block"
    if( integer1 < integer2 && integer2 < integer3){
        document.getElementById("sortNum").innerHTML = integer1+" < "+integer2+" < "+integer3;
    }
    else if(integer1 < integer3 && integer3 < integer2){
        document.getElementById("sortNum").innerHTML = integer1 + " < " + integer3 +" < " +integer2;
    }
    else if(integer2 < integer1 && integer1 < integer3){
        document.getElementById("sortNum").innerHTML = integer2+" < " +integer1+" < "+integer3
    }
    else if(integer2 < integer3 && integer3 < integer1){
        document.getElementById("sortNum").innerHTML = integer2+" < "+integer3+" < "+integer1
    }
    else if(integer3 < integer1 && integer1 < integer2){
        document.getElementById("sortNum").innerHTML = integer3 +" < " +integer1+" < "+integer2
    }
    else if(integer3 < integer2 && integer2 < integer1){
        console.log("Dãy số có thứ tự tăng dần",integer3,"<",integer2,"<",integer1);
        document.getElementById("sortNum").innerHTML = integer3+" < "+integer2+" < "+integer1
    }
}


// Bài 2:
function greeting(){
    var greeting = document.getElementById("greeting").value ;
    
if (greeting ==="1"){
    document.getElementById("showUser").innerHTML = "Đồng Chí Bố"
    document.getElementById("show").style.display ="block"
}
else if(greeting ==="2"){
    document.getElementById("showUser").innerHTML = "Đồng Chí Mẹ"
    document.getElementById("show").style.display ="block"
}
else if(greeting ==="3"){
    document.getElementById("showUser").innerHTML = "Đồng Chí Anh"
       document.getElementById("show").style.display ="block"
}
else if(greeting ==="4"){
    document.getElementById("showUser").innerHTML = "Đồng Chí Em Gái"
    document.getElementById("show").style.display ="block"
}
}
//3
function filt() {
    var theFirstNum = document.getElementById("theFirstNum").value ;
    var theSecondNum = document.getElementById("theSecondNum").value ;
    var theThirdNum = document.getElementById("theThirdNum").value ;
    var soLe = 0;
    var soChan = 0;
    document.getElementById("reSult").style.display = "block";
if (theFirstNum % 2 === 0){
sole = soLe ++;
} 
else {
    soChan = soChan ++;
}
if (theSecondNum % 2 === 0){
    sole = soLe ++;
} 
else {
        soChan = soChan ++;
}
if (theThirdNum % 2 === 0){
sole = soLe ++;
} 
else {
soChan = soChan ++;
}
document.getElementById("filtNum").innerHTML = soChan + "và" + soLe

}
