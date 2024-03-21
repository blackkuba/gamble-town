

const arrayRed = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let pastResults = [];

function result_style(){
    let result = Math.floor(Math.random()  * 36);

    if(result == 0){
        document.getElementById("spiner_num").style.backgroundColor = "#3a8f3d";
    }else if(arrayRed.includes(result)){
         document.getElementById("spiner_num").style.backgroundColor = "#ff394a";
    }else{
        document.getElementById("spiner_num").style.backgroundColor = "#2c4452";
    }

    document.getElementById("spiner_num").innerHTML = result;


    //historia wynikow
    pastResults.push(result);

    if(pastResults.length>3){
        pastResults.shift()
        pastResults.push(result);
    };


    
};

