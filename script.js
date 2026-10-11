const BACKEND_URL = "http://127.0.0.1:8000"; //local adresa
    // Až budeš chtít web nahrát živě, přepneš to na:
    //https://brain-app-nikp.onrender.com

    let vybrane_cviceni = ""
    let vysledek = 0
    // Přepínání obrazovek
    function otevri_matika() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("matika").style.display = "block";
    }

    function otevri_programovani() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("programovani").style.display = "block";
    }

    function otevri_logicka_uloha() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("logicka_uloha").style.display = "block";
    }

    function otevri_iq_uloha() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("iq_uloha").style.display = "block";
    }

    function python_1() {
      document.getElementById("programovani").style.display = "none";
      document.getElementById("python_1").style.display = "block";
    }

    function jdi_zpet_programovani() {
      document.getElementById("programovani").style.display = "block";
      document.getElementById("python_1").style.display = "none";
    }

    function jdi_zpet_hlavni_menu() {
      document.getElementById("matika").style.display = "none";
      document.getElementById("hlavni_menu").style.display = "block";
      document.getElementById("cviceni").style.display = "none";
      document.getElementById("obraz_vysledek").style.display = "none";
      document.getElementById("programovani").style.display = "none";
      document.getElementById("python_1").style.display = "none";
    }

    
    function vyber_test_cviceni(tlacitko){


        document.getElementById("cviceni").style.display ="block";
        document.getElementById("matika").style.display = "none";


        if (tlacitko == "pocitani"){
            document.getElementById("the_title").textContent = "Počítání + , - , ˙ , /";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "desetina_cisla"){
            document.getElementById("the_title").textContent = "Desetiná čísla";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "delitelnost"){
            document.getElementById("the_title").textContent = "Dělitelnost přirozených čísel";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "uhly"){
            document.getElementById("the_title").textContent = "Počítání úhlů";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "prevody"){
            document.getElementById("the_title").textContent = "Převody jednotek";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "ctverec_obdelnik"){
            document.getElementById("the_title").textContent = "Čtverec a obdélník";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "kvadr_krychle"){
            document.getElementById("the_title").textContent = "Kvádr a krychle";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "zlomky"){
            document.getElementById("the_title").textContent = "Zlomky";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "cela_cisla"){
            document.getElementById("the_title").textContent = "Celá čísla";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "racionálni cisla"){
            document.getElementById("the_title").textContent = "Racionální čísla";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "pomer"){
            document.getElementById("the_title").textContent = "Poměr";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "meritko"){
            document.getElementById("the_title").textContent = "Měřítko";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "trojčlenka"){
            document.getElementById("the_title").textContent = "Trojčlenka";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "procenta"){
            document.getElementById("the_title").textContent = "Procenta";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "ctyruhelniky"){
            document.getElementById("the_title").textContent = "Čtyřúhelníky";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "lomene_vyrazy"){
            document.getElementById("the_title").textContent = "Lomené výrazy";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "financni_matematika"){
            document.getElementById("the_title").textContent = "Finanční matematika";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "rovnice_s_neznamou_ve_jmenovateli"){
            document.getElementById("the_title").textContent = "Rovnice s neznámou ve jmenovateli";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "soustavy_linearnich_rovnic"){
            document.getElementById("the_title").textContent = "Soustavy lineárních rovnic";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "jehlany"){
            document.getElementById("the_title").textContent = "Jehlan, kužel, koule";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "statistika"){
            document.getElementById("the_title").textContent = "Statistika";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "linearni_rovnice"){
            document.getElementById("the_title").textContent = "Lineární rovnice";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "vyrazy"){
            document.getElementById("the_title").textContent = "Výrazy";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "valec"){
            document.getElementById("the_title").textContent = "Válec";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "kruh_kruznice"){
            document.getElementById("the_title").textContent = "Kruh a kružnice";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "pythagorova_veta"){
            document.getElementById("the_title").textContent = "Pythagorova věta";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "mocniny_odmocniny"){
            document.getElementById("the_title").textContent = "Mocniny, odmocniny";
            vybrane_cviceni = tlacitko
        }
        else if (tlacitko == "hranoly"){
            document.getElementById("the_title").textContent = "Hranoly";
            vybrane_cviceni = tlacitko
        }

        
    }
    async function generuj_priklad(){
        document.getElementById("obraz_vysledek").style.display = "none";
        document.getElementById("cviceni").style.display ="none";
        document.getElementById("generovani").style.display ="block";
        const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni);
        const data = await response.json();
        document.getElementById("priklad").textContent = data.priklad;
        vysledek = data.vysledek
    }
    async function odpoved(){
        const odpoved_uzivatele = document.getElementById("odpoved").value.trim();
        document.getElementById("odpoved").value = ""

        document.getElementById("obraz_vysledek").style.display = "block";
        document.getElementById("generovani").style.display ="none";
        if (vysledek == odpoved_uzivatele){
            
            document.getElementById("kontrola").textContent = "Správně 🥳";
            document.getElementById("vysledek").textContent = "";
        }
        else{
            document.getElementById("kontrola").textContent = "Špatně ❌";
            document.getElementById("vysledek").textContent = "Výsledek byl " + vysledek;
        }
    }
    async function generuj_priklad_slovni(){
        document.getElementById("obraz_vysledek").style.display = "none";
        document.getElementById("cviceni").style.display ="none";
        document.getElementById("generovani").style.display ="block";
        const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni + "_slovni");
        const data = await response.json();
        document.getElementById("priklad").textContent = data.priklad;
        vysledek = data.vysledek;
    }
    async function generuj_priklad_test(){
        document.getElementById("obraz_vysledek").style.display = "none";
        document.getElementById("cviceni").style.display ="none";
        document.getElementById("generovani").style.display ="block";
        const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni + "_test");
        const data = await response.json();
        document.getElementById("priklad").textContent = data.priklad;
        vysledek = data.vysledek;
    }
    