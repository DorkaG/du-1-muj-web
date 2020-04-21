

function prevedKmNaMl(km) {
 return km / 1.609;
}

prevedKmNaMl(10)

console.log(prevedKmNaMl(10));


function prevodMinutNaVteriny(hod, min) {
    return (hod * 3600) + (min * 60);
}

console.log( prevodMinutNaVteriny(1, 1) )








// let vek = parseInt(prompt("Zadejte věk:"), 10);

// function muzeVolit (vek) {
//     if (vek >= 18) {
//         return true;
        
//     }

//     else {
//         return false;
//     }
// }

// muzeVolit (vek);

// if ( muzeVolit(vek)) {
// console.log("Můžete volit.");
// }
// else {
// console.log("Nemůžete volit.");
// }




// function coMuzeMlsat(roky) {
//     if (roky <=9 ) {
//         return "jabko";
//     }

//     else if (roky <= 17) {
//         return "čokoláda";}

//     else {
//         return "pivo";
//     }

   
// }

// let vek = parseInt(prompt("Kolik je ti let?"), 10);
// let laskomina =  coMuzeMlsat(vek);

// console.log(`Je ti ${vek}, tady máš ${laskomina}.`)


function deleniBezeZbytku (cislo, delitel) {
    if (cislo % delitel === 0) {
        return true;
    }
    else {
        return false;
    }

}

console.log (deleniBezeZbytku(10, 5));

//cela fce jde zjednodusit takto: 
//      function deleniBezeZbytku (cislo, delitel) {
    //      return (cislo % delitel === 0);
    //      }



    function nizsi() {                      //nadefinuju nisi fci
        console.log("Ahoj vole");
    }

    function vyssi(x) {                     //nadefinuju vyssi fci. Bude mít nějaký parametr
        x();                                //reknu, ze ten parametr je funkce
    }

    vyssi(nizsi);                           //zavolam vyssi funkci a jako parametr ji pridam nizsi funkci
    



    function secti(x, y) {
        return x + y;
    }

    function vynasob(a, b) {
        var v = a(1, 1)
        return vysledek = v * b;
        // a(1, 1) * b   tohle by taky slo, ale musi tam byt ty parametry
      
    } 

    vynasob (secti, 3);
    console.log(vysledek);