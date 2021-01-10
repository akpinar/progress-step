var next = document.getElementById("next");
var prev = document.getElementById("prev");
var circle = document.querySelectorAll('.circle');
var divider = document.querySelectorAll('.divider');

var active=0;

next.addEventListener("click",function(){

    active++;
    if(active>circle.length-1){
        active=circle.length-1;    
    }
    if(active===3){
        next.className="disable-button"
        $("#ileri").prop("disable",true);
    }

    circle[active].className+=" active";
    
    let currentActive = active-1;

    console.log(circle[currentActive]);
    divider[currentActive].className="divideractive";
    prev.className="";

});


prev.addEventListener("click",function(){

    active--;
    if(active<=0){
        active=0;
        $("#geri").prop("disable",true);
        prev.className="disable-button"
    }

    next.className=""
    circle[active].className+= " active";

    let currentActive = active;

    divider[currentActive].className="divider";
    currentActive++;
    circle[currentActive].className="circle";

});

