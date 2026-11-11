import sys
import io
from pyscript import document


def test_kodu(event):
    kod = document.getElementById("uzivatelsky_kod").value
    typ = event.target.getAttribute("data-typ")

    test_cases = {
        "print1": [
            {
                "vstupy": [],
                "ocekavany_vystup": "Ahoj světe",
            }
        ],
        "print2": [
            {
                "vstupy": [],
                "ocekavany_vystup": "Python je skvělý",
            }
        ],
        "print3": [
            {
                "vstupy": [],
                "ocekavany_vystup": "Ahoj\nMám se dobře",
            }
        ],
        "print4": [
            {
                "vstupy": [],
                "ocekavany_vystup": "Nejsem\nRobot",
            }
        ],
        "print5": [
            {
                "vstupy": [],
                "ocekavany_vystup": "Python\nJe programovací jazyk",
            }
        ],
        "typy1": [
            {
                "vstupy": ["42"],
                "ocekavany_vystup": "Tvé číslo je: 42",
            }
        ],
        "typy2": [
            {
                "vstupy": ["Pepa"],
                "ocekavany_vystup": "Tvé slovo je: Pepa",
            }
        ],
    }

    testy = test_cases.get(typ, [])
    vystupy = []
    vsechny_testy_prosly = True
    chyba = None
    stare_stdout = sys.stdout

    try:
        for test in testy:
            vstupy = iter(test["vstupy"])

            def test_input(prompt=""):
                return next(vstupy)

            sys.stdout = io.StringIO()

            try:
                exec(
                    kod,
                    {
                        "__name__": "__main__",
                        "input": test_input,
                    },
                )

                vystup = sys.stdout.getvalue().strip()
                vystupy.append(vystup)

                if vystup != test["ocekavany_vystup"]:
                    vsechny_testy_prosly = False

            except Exception as e:
                vsechny_testy_prosly = False
                chyba = f"Chyba: {e}"
                vystupy.append(chyba)

    finally:
        sys.stdout = stare_stdout

    el = document.getElementById("test_program_text")


    if vsechny_testy_prosly:
        el.textContent = "Správně"
        el.style.color = "#00ff66"
    elif chyba:
        el.textContent = chyba
        el.style.color = "#ff7b54"
    else:
        el.textContent = "Špatně"
        el.style.color = "#ff7b54"

    document.getElementById("kod_output").value = "\n---\n".join(vystupy)
