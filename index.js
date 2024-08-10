let NomeHeroi = "NanoMan"; 
let LeveXP = 6100; 
let nivel;

if (LeveXP < 1000) {
    nivel = "Ferro";
} else if (LeveXP >= 1001 && LeveXP <= 2000) {
    nivel = "Bronze";
} else if (LeveXP >= 2001 && LeveXP <= 5000) {
    nivel = "Prata";
} else if (LeveXP >= 5001 && LeveXP <= 7000) {
    nivel = "Ouro";
} else if (LeveXP >= 7001 && LeveXP <= 8000) {
    nivel = "Platina";
} else if (LeveXP >= 8001 && LeveXP <= 9000) {
    nivel = "Ascendente";
} else if (LeveXP >= 9001 && LeveXP <= 10000) {
    nivel = "Imortal";
} else if (LeveXP >= 10001) {
    nivel = "Radiante";
}

console.log( "O Herói " + NomeHeroi + " está no nível de " + nivel );
