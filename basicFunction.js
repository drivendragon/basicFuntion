


//Predict 1:
function a(){
    return 35;
}
console.log(a())
//Precition: 35

//Predict 2:
function a(){
    return 4;
}
console.log(a()+a());
//Prediction: 8

//Precict 3:
function a(b){
    return b;
}
console.log(a(2)+a(4));
//Prediction: 6

//Predict 4:
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//Prediction: 3 9

//Predict 5:
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 //Prediction: 40

 //Predict 6:
 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Prediction:4

//Predict 7:
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Prediction: 10 3 30

//Predict 8:
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Predict: 3 4

//Predict 9: 
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//Prediction: 2 5 8 11

//Predict 10: 
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//Prediction: 0 1 2 3 4 5 6 7 8 9 10

//Predict 11:
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//Predict: undefined

//Predict 12:
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//Prediction: undefined

//Predict 13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//Prediction 10

//Predict 14:
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//Prediction: 15 10

//Predict 15:
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//Prediction: 15 15