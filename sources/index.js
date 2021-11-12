
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
function displaymsg(){
    const t = new Date();
    var n = t.getHours();
    if(n<4){
        document.getElementById("msgbytime").innerHTML = "Hmm, No Classes at Night"; 
    }
    if( n > 4 && n <= 11){
        document.getElementById("msgbytime").innerHTML = "Good <span>Morning</span>"; 
    }
    if( n > 11 && n <= 15){
        document.getElementById("msgbytime").innerHTML = "Good <span>AfterNoon</span>"; 
    }
    if( n >15 && n <= 21){
        document.getElementById("msgbytime").innerHTML =  "Good <span>evening</span>";
    }

}
function displaycclass(x ,t){
    switch (x) {
        case 1:
            if(t>9.00 && t<10.50){
                tet = "MOBILE & WIRELESS SECURITY BY DR. AMIT  class ends at : 10.50   ";
            }
            else if(t>=12.15 && t<=13.00 ){
                tet = " Fog computing   class ends at : 13.00 "
            }
            else{
                tet = "Currently there are no academic classes💤";
            }
            break;
        case 2:
            if(t>9.00 && t<10.50){
                tet = "Internet Protocols & Networking Dr. Satish  class ends at : 10.50";
            }
            else{
                tet = "Currently there are no academic classes💤";
                
            }
            break;

        case 3:
            if(t>12.15 && t<=13.00){
                tet = " internet protocols    class ends at : 13.00 "
            }
            else if(t>13.20 && t<=15.10){
                tet = "IDEA OF INDIA  class ends at : 15.10 "
            }
            else if(t>15.30 && t<=17.20){
                tet = "Mobile and Wireless Security  class ends at : 17.20 "
            }
            else if(t>18.30 && t<=20.45){
                tet = "DDD  class ends at : 20.45 "
            }
            else{
                tet = "Currently there are no academic classes💤";

            }
            break;

        case 4:
            if(t>13.20 && t<=15.10){
                tet = "IDEA OF INDIA  class ends at : 15.10 "
            }
            else{
                tet = "Currently there are no academic classes💤";
            }
            break;

        case 5:
            if(t>10.05 && t<=11.55){
                tet = " Fog computing   class ends at : 11.55 "
            }
            else{
                tet = "Currently there are no academic classes💤";

            }
            break;

        case 6:
          tet = " 👋";
          break;
        case 0:
          tet = "Today is Sunday💤";
      }
    return tet;
}
function displayuclass(y,t){
    switch (y) {
        case 1:
            if(t<=9.00){
                text = "MOBILE & WIRELESS SECURITY BY DR. AMIT  class start at : 09.00 ";
            }
            if(t>9.00 && t<=12.15){
                text = " Fog Computing  class start at : 12.15 "
            }
            else{
                text = "todays academic shedule is completed"
            }
            break;
        case 2:
            if(t<=9.00){
                text = "Internet Protocols & Networking Dr. Satish  class start at : 09.00 ";
            }
            else{
                text = "todays academic shedule is completed"
            }
            break;
        case 3:
            if(t<12.14){
                text = "internet protocols  class starts : 12.15 "
            }
            else if(t<13.20){
                text = "IDEA OF INDIA  class is at : 13.20 "
            }
            else if(t<=15.10){
                text = "Mobile &Wireless class is at : 15.10 "
            }
            else if(t>15.10 && t<=18.30){
                text = "DDD  class is at : 18:30 "
            }
            else{
                text = "todays academic shedule is completed"
            }
            break;
        case 4:
            if(t<13.20){
                text = "IDEA OF INDIA  class is at : 13.20 "
            }
            else{
                text = " "
            }
            break;

        case 5:
            if(t<10.05){
                text = "Fog computingclass is at : 10.05"
            }
            if(t>10.10 && t<12.15){
                text = "IP&N LAB  class is at : 12.15 "
            }
            else{
                text = "todays academic shedule is completed"
            }
            break;
        case 6:
          text = "no classes today";
          break;
        case 0:
          text = "Today is Sunday";
      }
    return text;
}
function start(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDay();
    let date = today.getDate();
    var weekday = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
    m = checkTime(m);
    s = checkTime(s);
    k=displaymsg();
    var n = h+"."+m;
    var month = today.getMonth() + 1;
    setTimeout(start, 1000);
    cc=displaycclass(day,n);
    uc=displayuclass(day,n);
    document.getElementById('Date').innerHTML =  date+"|"+month+"|"+today.getFullYear()+"    "+weekday[day];    
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById("class").innerHTML = cc+"<br> Upcoming:  "+uc;
}
function modalm(){
    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")
    modalBtn.onclick = function(){
        modal.style.display = "block"
    }
    closeBtn.onclick = function(){
        modal.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modal){
            modal.style.display = "none"
        }
    }
}
        
function ac() {
    const numbers1 = parseFloat(prompt ('enter the number of hours and minutes you have attended int the format of hh.mm:'));  
    const numbers2 = parseFloat(prompt ('enter the Total number of hours and minutes int the format of hh.mm:')); 
    // converting hours to minutes
    var n=numbers1;
    var n1=numbers2;
    var int = Math.floor(n);
    var dec=n-int;
    var int1 = Math.floor(n1);
    var dec1=n1-int1;
    var timeattended = (int*60)+(dec*100);
    var totaltime = (int1*60)+(dec1*100);
    var min = totaltime/100*80;
    var per = timeattended/totaltime*100;
    var rem = min -timeattended ;
    if (per < 80) { 
        document.getElementById("demo").innerHTML = "minimum time  Required is not met please wait for "+ rem + "minutes" ;
    }    
    else if(per>=80 && per<100) {
        document.getElementById("demo").innerHTML = "you have attended the " + per + " % you may now proceed to quit." ;
    }  
    else {
        document.getElementById("demo").innerHTML = "I'm Sorry " ;
    }
}
function bm() {
    const number1 = parseFloat(prompt ('enter the number of classes you have attended'));  
    const number2 = parseFloat(prompt ('enter the Total number of classes')); 
    // declaration of the variables. 
    let  absent , eightyper,ef, per  ,rem ;
    // caluclating absent hours 
    absent = number2 - number1 ;
    eightyper = number2 - Math.floor(number2 * 0.80) - absent;
    ef = number2 - Math.floor(number2 * 0.85) - absent;
    ef2 = number2 - Math.floor(number2 * 0.90) - absent;
    // caluclating the percentage attended 
    per = number1/number2*100;
    // use if and else keyword to satisfiy  condition and give the output. 
    if(eightyper<0){
        eightyper = 0; 
    }
    if(ef<0){
        ef = 0; 
    }
    if(ef2<0){
        ef = 0; 
    }
    if (per <= 80) { 
    document.getElementById("demo2").innerHTML = "minimum classes Required is not met please join more classes" ;
    }    
    else {
    document.getElementById("demo2").innerHTML = " you can proceed to Bunk for ,</br>" + 
    eightyper + " classes for 80% ,</br>" + 
    + ef +"  classes for 85%,</br>" + 
    + ef2 +"  classes for 90%" ; }  
}
