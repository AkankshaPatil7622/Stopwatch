let secCount = 0;
let minCount = 0;
let hrCount = 0;
let hr = document.getElementById("hr");
hr.style.fontSize = "60px"
let min = document.getElementById("min");
min.style.fontSize = "60px"
let sec = document.getElementById("sec");
sec.style.fontSize = "60px"
sec.style.fontWeight = 600

// sec.style.color="black"
let interval;
function start(){
    
     interval = setInterval(()=>{
        secCount+=1;
        sec.innerHTML = `${secCount}`
        if(secCount == 60){
            if(minCount == 60){
                minCount = 0;
                secCount = 0;

                hrCount += 1;
                min.innerHTML = `${minCount}`;
                hr.innerHTML = `${hrCount}`;
                sec.innerHTML = `${secCount}`
            }
            else {
                secCount = 0;
                sec.innerHTML = `${secCount}`;
                minCount += 1;
                min.innerHTML = `${minCount}`;
            }
            
            
        }
    
    },1000)
}

function stop(){
    clearInterval(interval);
}

function resume(){
    interval.resume()
}