// const { reverse } = require("dns");

function fnPro(){
    var weight = document.getElementById("weights").value;
    var e = document.getElementById("planets");
    var value = e.value;
    // var images;
    // var mass = weight/9.8;
    
    //weight on other planet =weight on earth*multiple of earth's gravity
    if(weight==0){
        alert("Enter weight again!!");
    }else{
        var w=1;
        if(value=='mercury'){
            w = weight * 0.38;
            // images=document.getElementsByClassName("div4");

        }else if(value=='venus'){
            w = weight* 0.91;
        }else if(value=='earth'){
            w = weight* 1;
        }else if(value=='mars'){
            w = weight* 0.38;
        }else if(value=='jupiter'){
             w = weight* 2.34;
        }else if(value=='saturn'){
             w = weight* 1.06;
        }else if(value=='uranus'){
            w = weight* 0.92;
        }else if(value=='neptune'){
            w = weight* 1.19;
        }
        w=w.toFixed(2);
        document.getElementById("ans").innerHTML = "Weight on" + " "+ value +" "+ "is"+" "+w+" "+"Kg";
        var element=document.getElementById("div4");
        element.style.opacity = "0"; 
        
        var img=document.createElement("img");
        // var realPlanet=value+".png";
        img.src='images/'+value+'.png';
        var div=document.getElementById("vals");
        div.appendChild(img);
        img.style.opacity=1;
        img.style.height="200px";
        img.style.height="200px";
        // img.style.animation="rotation 10s infinite linear";
        // img.style.animationDirection="alternate";
        img.style.marginTop="2rem";
        if(value=="saturn"){

        }
        
        // element.style.marginTop="-3em";
        document.getElementById("btn").disabled = true;       
    }   
  }
