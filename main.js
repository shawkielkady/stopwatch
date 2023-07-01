let minuits=0;
seconds=0;
milsec=0;
let timer;
let minDiv=document.querySelector('.mins');
let secDiv=document.querySelector('.sec');
let mileDiv=document.querySelector('.mile');
console.log(mileDiv);
let starttime=()=>{
    timer=setInterval(updateTimer,10)
}
let stopTime=()=>{
    clearInterval(timer)
}
let updateTimer=()=>{
    milsec++;
    mileDiv.innerHTML=padTime(milsec);
    if(milsec ==100){
        seconds++;
        milsec=0;
        secDiv.innerHTML=padTime(seconds);
    }
    if(seconds ==60){
        minuits++;
        seconds=0;
        minDiv.innerHTML=padTime(minuits);
    }

}
let resetTime=()=>{
    minuits=0;
    seconds=0;
    milsec=0;
    mileDiv.innerHTML=padTime(milsec);
    secDiv.innerHTML=padTime(seconds);
    minDiv.innerHTML=padTime(minuits);
clearInterval(timer);


}
function padTime(time) {
    // Pad the time values with leading zeros if necessary (e.g., 1 becomes 01)
    return time.toString().padStart(2, "0");
  }