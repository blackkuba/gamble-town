

const arrayRed = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let pastResults = [];
let current_result;
let Picks = [];


let Column_Dozen =  document.querySelectorAll(".single");
// let Even_Money_bets = document.querySelectorAll(" ");
// let Single_Number = document.querySelectorAll(" ");

Column_Dozen.forEach(button => {
    button.addEventListener('click', function() {
        if(Picks.includes(button.innerHTML)){
            Picks.splice(Picks.indexOf(button.innerHTML), 1);
        } else {
            Picks.push(button.innerHTML);
        };
        console.log(Picks);
    }, false);
});



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
    current_result = pastResults[pastResults.length -1].toString(); // liczba z ostatniego miejsca arraya

    if(Picks.includes(current_result)){
        console.log("sigma")
    };

    
};
