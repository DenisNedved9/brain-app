const BACKEND_URL = "http://127.0.0.1:8000"; //local adresa
    // Až budeš chtít web nahrát živě, přepneš to na:
    //https://brain-app-nikp.onrender.com

    let vybrane_cviceni = ""
    let vysledek = 0
    let pocet_prikladu = 0
    let pocet_potreba = 1
    let druh = "null"
    let pocet_dobre = 0
    let aktivniTypTestu = ""
    let typ_print = 0

    function prejit_na_test(typ){
        aktivniTypTestu = typ;
        document.getElementById("python_1_typy").style.display = "none";
        document.getElementById("uzivatelsky_kod").textContent = ""
        document.getElementById("kod_output").textContent = ""
        document.getElementById("text_rada").textContent = ""
        if (typ == "print"){
            typ_print += 1
            if (typ_print == 1){
                document.getElementById("zadani").textContent = "Zkus si napsat kód který vytiskne ´Ahoj světe´"
            }
            else if(typ_print == 2){
                document.getElementById("zadani").textContent = "Zkus si napsat kód který vytiskne ´Python je skvělý´"
            }
            else if(typ_print == 3){
                document.getElementById("zadani").textContent = "Zkus si napsat kód který vytiskne ´Ahoj´ a na další řádek ´Mám se dobře´"
            }
            else if(typ_print == 4){
                document.getElementById("zadani").textContent = "Zkus si napsat kód který vytiskne ´Nejsem´ a na další řádek ´Robot´"
            }
            else if(typ_print == 5){
                document.getElementById("zadani").textContent = "Zkus si napsat kód který vytiskne ´Python´ a na další řádek ´Je programovací jazyk´"
            }
            else{
                typ_print = 0
                document.getElementById("test_program").style.display = "none";
                document.getElementById("python_1").style.display = "block";
            }
        }
        else if (typ == "typy"){
          typ_print += 1
          if (typ_print == 1){
              document.getElementById("zadani").textContent = "Napiš kód kde: zadám číslo (pomocí input) a ty pak vypíšeš ´Tvé číslo je: ´ a následně to číslo co jsme napsali."
          }
          else if (typ_print == 2){
              document.getElementById("zadani").textContent = "Napiš kód kde: zadám slovo (pomocí input) a ty pak vypíšeš ´Tvé slovo je: ´ a následně to slovo co jsme napsali."
          }
          else{
              typ_print = 0
              document.getElementById("test_program").style.display = "none";
              document.getElementById("python_1").style.display = "block";
          }
        }
            
        

        const tlacitkoTestu = document.getElementById("tlacitko_otestovat");
        if (tlacitkoTestu) {
            tlacitkoTestu.setAttribute("data-typ", aktivniTypTestu + typ_print.toString());
        }

        document.getElementById("python_1_print").style.display = "none";
        document.getElementById("test_program").style.display = "block";
    }

    function rada(){
        if (aktivniTypTestu == "print"){
            if (typ_print < 4){
                document.getElementById("text_rada").textContent = "Vzpomeň si že ukazujeme text funkcí print() a každý nový print píše na nový řádek"
            }
            else{
                document.getElementById("text_rada").textContent = "Vzpomeň si že ukazujeme text funkcí print()";
            }
            
        }
        else{
            document.getElementById("text_rada").textContent = "neexistuje";
        }
        
    }

    function otevri_matika() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("matika").style.display = "block";
      window.scrollTo(0, 0);
    }

    function otevri_programovani() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("programovani").style.display = "block";
      window.scrollTo(0, 0);
    }

    function otevri_logicka_uloha() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("logicka_uloha").style.display = "block";
      window.scrollTo(0, 0);
    }

    function otevri_iq_uloha() {
      document.getElementById("hlavni_menu").style.display = "none";
      document.getElementById("iq_uloha").style.display = "block";
      window.scrollTo(0, 0);
    }

    function kontrola_odpovedi_print(odpoved) {
      const vysledek = document.getElementById("kontrola_print");
      if (odpoved === "Ahoj toto je test") {
        vysledek.textContent = "Správně!";
      } else {
        vysledek.textContent = "Nesprávně!";
      }
    }
    function kontrola_odpovedi_typy(odpoved) {
      const vysledek = document.getElementById("kontrola_typy");
      if (odpoved === "toto je test") {
        vysledek.textContent = "Správně!";
      } else {
        vysledek.textContent = "Nesprávně!";
      }
    }
    function kontrola_odpovedi_operace(odpoved) {
      const vysledek = document.getElementById("kontrola_operace");
      if (odpoved === "22") {
        vysledek.textContent = "Správně!";
      } else {
        vysledek.textContent = "Nesprávně!";
      }
    }

    function python_1() {
      typ_print = 0
      document.getElementById("programovani").style.display = "none";
      document.getElementById("python_1_print").style.display = "none";
      document.getElementById("python_1_typy").style.display = "none";
      document.getElementById("python_1_operace").style.display = "none";
      document.getElementById("python_1_podminky").style.display = "none";
      document.getElementById("test_program").style.display = "none";
      document.getElementById("python_1").style.display = "block";
      document.getElementById("test_program").style.display = "none";
      window.scrollTo(0, 0);
    }
    function python_1_print() {
      document.getElementById("python_1_print").style.display = "block";
      document.getElementById("python_1").style.display = "none";
      window.scrollTo(0, 0);
    }
    function python_1_typy() {
      document.getElementById("python_1_typy").style.display = "block";
      document.getElementById("python_1").style.display = "none";
      document.getElementById("python_1_print").style.display = "none";
      window.scrollTo(0, 0);
    }
    function python_1_operace() {
      document.getElementById("python_1_operace").style.display = "block";
      document.getElementById("python_1").style.display = "none";
      document.getElementById("python_1_typy").style.display = "none";
      window.scrollTo(0, 0);
    }
    function python_1_podminky() {
      document.getElementById("python_1_podminky").style.display = "block";
      document.getElementById("python_1").style.display = "none";
      document.getElementById("python_1_operace").style.display = "none";
      window.scrollTo(0, 0);
    }

    function jdi_zpet_programovani() {
      document.getElementById("programovani").style.display = "block";
      document.getElementById("python_1").style.display = "none";
      document.getElementById("python_1_print").style.display = "none";
      document.getElementById("python_1_typy").style.display = "none";
      document.getElementById("python_1_operace").style.display = "none";
    }

    function jdi_zpet_programovani_zaklad() {
      document.getElementById("python_1").style.display = "block";
      document.getElementById("python_1_print").style.display = "none";
      document.getElementById("python_1_typy").style.display = "none";
      document.getElementById("python_1_operace").style.display = "none";
    }

    function jdi_zpet_hlavni_menu() {
      document.getElementById("matika").style.display = "none";
      document.getElementById("hlavni_menu").style.display = "block";
      document.getElementById("cviceni").style.display = "none";
      document.getElementById("obraz_vysledek").style.display = "none";
      document.getElementById("programovani").style.display = "none";
      document.getElementById("python_1").style.display = "none";
      document.getElementById("logicka_uloha").style.display = "none";
      document.getElementById("iq_uloha").style.display = "none";
      document.getElementById("konec_testu").style.display = "none";

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
    
    async function odpoved(){
        let odpoved_uzivatele = document.getElementById("odpoved").value.trim().replace(',', '.');
        document.getElementById("odpoved").value = ""

        document.getElementById("obraz_vysledek").style.display = "block";
        document.getElementById("generovani").style.display ="none";
        if (Number(vysledek) === Number(odpoved_uzivatele)){
            
            document.getElementById("kontrola").textContent = "Správně 🥳";
            document.getElementById("vysledek").textContent = "";
            if (druh == "test"){
                pocet_dobre++;
            }
        }
        else{
            document.getElementById("kontrola").textContent = "Špatně ❌";
            let vysledek_cesky = vysledek.toString().replace('.', ',');
            document.getElementById("vysledek").textContent = "Výsledek byl " + vysledek_cesky;
        }
    }
    async function generuj_priklad(argument){
        if (argument == null){
            argument = druh
        }
        if (argument == "normal"){
            druh = "normal"
            document.getElementById("obraz_vysledek").style.display = "none";
            document.getElementById("cviceni").style.display ="none";
            document.getElementById("generovani").style.display ="block";
            const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni);
            const data = await response.json();
            document.getElementById("priklad").textContent = data.priklad;
            vysledek = data.vysledek
        }
        
        else if (argument == "slovni"){
            druh = "slovni"
            document.getElementById("obraz_vysledek").style.display = "none";
            document.getElementById("cviceni").style.display ="none";
            document.getElementById("generovani").style.display ="block";
            const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni + "_slovni");
            const data = await response.json();
            document.getElementById("priklad").textContent = data.priklad;
            vysledek = data.vysledek;
        }
        else if (argument == "test"){
            druh = "test" 
            pocet_prikladu++;
            if (pocet_prikladu < pocet_potreba + 1){
                document.getElementById("obraz_vysledek").style.display = "none";
                document.getElementById("cviceni").style.display ="none";
                document.getElementById("generovani").style.display ="block";
                const response = await fetch(BACKEND_URL + "/priklad?typ=" + vybrane_cviceni + "_test");
                const data = await response.json();
                document.getElementById("priklad").textContent = data.priklad;
                vysledek = data.vysledek;
            }
            else{
                document.getElementById("obraz_vysledek").style.display = "none";
                document.getElementById("cviceni").style.display ="none";
                document.getElementById("konec_testu").style.display ="block";
                document.getElementById("vysledek_testu").textContent = "Správně: " + pocet_dobre + "/" + pocet_potreba;
                pocet_prikladu = 0;
                pocet_dobre = 0;
            }
           
            document.getElementById("pocet").textContent = pocet_prikladu + "/" + pocet_potreba;
        }
    }
    