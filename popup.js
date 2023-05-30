/* 
Ovdje će se pisati jednostavna logika aplikacije koja obuhvaća dohvat i pohrana svih vrijednosti koje korisnik može odabrati.

Nad podacima će se vršiti izračun koji će se potom u konačnom rezultatu ispisati krajnjem korisniku (u ovom slučaju prodavaču).
*/


const calculatePrice = (unesenacijena1, odabranaMarza) => {

    if(odabranaMarza < 0){
        let temp = unesenacijena1 * (Math.abs(odabranaMarza) / 100);
        return unesenacijena1 - temp;
    }else{   
        let cijenasMarzom = unesenacijena1 + (odabranaMarza / 100) * unesenacijena1; // Dakle koliko platimo proizvod + zarada na njemu
        let porezNaTuCijenu = 0.25 * cijenasMarzom; // Izracunamo porez (25%) od te cijene i dolje ga nadodamo na tu cijenu
        return cijenasMarzom + porezNaTuCijenu;
    }

}
  

document.addEventListener('DOMContentLoaded', () => {
    var submitBtn1 = document.querySelector('.submitbutton1');
    var submitBtn2 = document.querySelector('.submitbutton2');
    var helpbutton = document.getElementById('helpbutton');
    var rezultatcijena1 = document.querySelector('.rezultatcijena1');
    var rezultatcijena2 = document.querySelector('.rezultatcijena2');
    var prikazmarze1 = document.getElementById('marza1');
    var prikazmarze2 = document.getElementById('marza2');

    submitBtn1.addEventListener('click', (event) => {
        event.preventDefault();

        var izboriMarze = document.getElementsByName("dobavljac");
        var odabranaMarza;
        var unesenacijena1 = parseFloat(document.getElementById('cijena1').value);
        var izracunataCijena1;
       
        for(let i = 0; i<izboriMarze.length; i++){
            if(izboriMarze[i].checked){
                odabranaMarza = parseFloat(izboriMarze[i].value);
                break;
            }
        }

        izracunataCijena1 = calculatePrice(unesenacijena1, odabranaMarza);
        prikazmarze1.innerText = `${odabranaMarza}%`;
        rezultatcijena1.innerText = izracunataCijena1;
        console.log(izracunataCijena1);

    })

    submitBtn2.addEventListener('click', (event) => {
        event.preventDefault();

        var unesenacijena2 = parseFloat(document.getElementById('cijena2').value);
        var odabranaMarza = parseFloat(document.getElementById('marza').value);

        prikazmarze2.innerText = `${odabranaMarza}%`;
        var izracunataCijena2 = calculatePrice(unesenacijena2, odabranaMarza);
        rezultatcijena2.innerText = izracunataCijena2;
    })

    helpbutton.addEventListener('click', () => {
        var helpWrapper = document.querySelector(".help");
        helpWrapper.classList.toggle('displaynone');
    })
    
})