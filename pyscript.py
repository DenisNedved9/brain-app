import sys
import io
from pyscript import document

typ_print = 0



def test_kodu(event):
    kod = document.getElementById("uzivatelsky_kod").value
    typ = event.target.getAttribute("data-typ")
    correct = False
    vstupy = []
    stare_stdout = sys.stdout
    potrebny_vystup = ""

    sys.stdout = io.StringIO()
    try:
        exec(kod)
        vystup = sys.stdout.getvalue().strip()
    except Exception as e:
        vystup = f"Chyba: {e}"
    finally:
        sys.stdout = stare_stdout

    if typ == "print1":
        potrebny_vystup = "Ahoj světe"
    elif typ == "print2":
        potrebny_vystup = "Python je skvělý"
    elif typ == "print3":
        if len(vystup) == 2 and vystup[0].strip() == "Ahoj" and vystup[1].strip() == "Mám se dobře":
            correct = True
            document.getElementById("test_program_text").textContent = "Správně"
    if vystup == potrebny_vystup or correct:
        document.getElementById("test_program_text").textContent = "Správně"
    else:
        document.getElementById("test_program_text").textContent = "Špatně"

    document.getElementById("kod_output").value = vystup
