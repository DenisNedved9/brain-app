const BACKEND_URL = "http://127.0.0.1:8000"; //local adresa
    // Až budeš chtít web nahrát živě, přepneš to na:
    //https://brain-app-nikp.onrender.com

    let vybrane_cviceni = ""
    // Přepínání obrazovek
    function otevri_matika() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("matika").style.display = "block";
    }

    function jdi_zpet_hlavni_menu() {
      document.getElementById("matika").style.display = "none";
      document.getElementById("hlavni_menu").style.display = "block";
      document.getElementById("cviceni").style.display = "none";
      document.getElementById("obraz_vysledek").style.display = "none";
    }
    
    function vyber_test_cviceni(tlacitko){
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
        
        document.getElementById("cviceni").style.display ="block";
        document.getElementById("matika").style.display = "none";
    }
    async function generuj_priklad(){
        document.getElementById("obraz_vysledek").style.display = "none";
        document.getElementById("cviceni").style.display ="none";
        document.getElementById("generovani").style.display ="block";
        const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni);
        const data = await response.json();
        document.getElementById("priklad").textContent = data;
    }
    async function odpoved(){
        const odpoved_uzivatele = document.getElementById("odpoved").value;
        document.getElementById("odpoved").value = ""

        const response = await fetch(BACKEND_URL + "/odpoved?typ=" + odpoved_uzivatele)
        const data = await response.json()
        document.getElementById("obraz_vysledek").style.display = "block";
        document.getElementById("generovani").style.display ="none";
        if (data == "spravne"){
            
            document.getElementById("kontrola").textContent = "Správně 🥳";
            document.getElementById("vysledek").textContent = "";
        }
        else{
            document.getElementById("kontrola").textContent = "Špatně ❌";
            document.getElementById("vysledek").textContent = "Výsledek byl " + data;
        }
    }
    async function generuj_priklad_slovni(){
        document.getElementById("obraz_vysledek").style.display = "none";
        document.getElementById("cviceni").style.display ="none";
        document.getElementById("generovani").style.display ="block";
        const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni + "_slovni");
        const data = await response.json();
        document.getElementById("priklad").textContent = data
    }
    