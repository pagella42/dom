
// const getRandomColor = function() {
//     const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     return niceColors[randomPosition];
//   }



// let boxer = function(number){
    
//     for (let i = 0; i < number; i++){
   
//         const box = document.createElement("div")
//         box.style.width = "100px"
//         box.style.height = "100px"
//         box.style.backgroundColor = getRandomColor()
//         box.style.display = "inline-block"
//         box.onmouseover = function(){
//             box.style.backgroundColor = getRandomColor()
//         }

//         document.getElementById("container").appendChild(box)
    
    
//     }

// }


// boxer(6)




const validate = function(){
    let name = document.getElementById("bar1").value
    let salary = document.getElementById("bar2").value
    let birthdate = document.getElementById("bar3").value
    let phone = document.getElementById("bar4").value

    const error1 = document.getElementById("error1")
    const error2 = document.getElementById("error2")
    const error3 = document.getElementById("error3")
    const error4 = document.getElementById("error4")
//error1
    if(name.length < 2){
        error1.innerHTML = "Provide a valid name"
        error1.style.color= "red"
    }
    else{
        error1.innerHTML = "Valid"
        error1.style.color = "green"

    }
//error 2
    if(salary > 16000 || salary < 10000 ){
        error2.innerHTML = "Not possible"
        error2.style.color= "red"
    }
    else{
        error2.innerHTML = "Valid"
        error2.style.color = "green"
    }
//error3
    if(!birthdate){
        error3.innerHTML = "Provide a date"
        error3.style.color= "red"
    }
    else{
        error3.innerHTML = "Valid"
        error3.style.color = "green"
    }
//error4
    if(phone.length <10){
        error4.innerHTML = "Provide a valid Phone"
        error4.style.color= "red"
    }
    else{
        error4.innerHTML = "Valid"
        error4.style.color = "green"
    }
}

