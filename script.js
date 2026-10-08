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
    }
    function jdi_zpet_menu_trid(){
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("matika").style.display = "block";
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

        document.getElementById("cviceni").style.display ="none";
        document.getElementById("generovani").style.display ="block";
        const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni);
        const data = await response.json();
        document.getElementById("priklad").textContent = data;
    }