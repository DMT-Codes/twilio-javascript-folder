var i;
console.log('Glen, will you please open the barrier?');

for (i=0;i<101;i++){
    if ((i%3==0) && (i%5==0)){
        console.log("🛰");
    }
    else if(i%3==0){
        console.log("👽");
    }
    else if(i%5==0){
        console.log("🚀");
    }
    else{
        console.log("💩");
    }

}