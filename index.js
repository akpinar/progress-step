let ileri = document.getElementById("ileri");
let geri = document.getElementById("geri");
let daire = document.querySelectorAll('.daire');
let divider = document.querySelectorAll('.divider');
let aktif=0;
console.log(daire.length)
ileri.addEventListener("click",function(){
    aktif++;
    if(aktif>daire.length-1){
        aktif=daire.length-1;
    }
    daire[aktif].className+=" active";
    let newAktif = aktif-1;
    console.log(daire[newAktif]);
    divider[newAktif].className="divideractive";
    
})


geri.addEventListener("click",function(){
    aktif--;
    if(aktif<=0){
        aktif=0;
    }
    daire[aktif].className+= " active";
    let newAktif = aktif;
    divider[newAktif].className="divider";
    newAktif++;
    daire[newAktif].className="daire";



})

