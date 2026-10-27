from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from decimal import Decimal
import random
import operator

app = FastAPI()  # py -m uvicorn main:app --reload

# Enable CORS so GitHub Pages front-end can talk to Render back-end
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
OPS = {"+": operator.add, "-": operator.sub, "*": operator.mul, "/": operator.truediv}
symbol_list = ["+", "-", "*", "/"]

list_jmen = [
    "Pepa", "Luboš", "Ondra", "Miloš", "Honza", "Jan",
    "Tomáš", "Matěj", "David", "Jakub", "Martin", "Filip",
    "Adam", "Patrik", "Vojta", "Kuba", "Radek", "Michal",
    "Lukáš", "Karel", "Daniel", "Šimon", "Dominik", "Erik"
]
list_veci_4 = [
    "jablka",
    "brambory",
    "tužky",
    "sešity",
    "míče",
    "bonbony",
    "pomeranče",
    "sušenky",
    "balónky",
    "knížky",
    "kameny",
    "korálky",
    "pastelky",
    "samolepky",
    "autíčka",
    "kostičky",
    "pomeranče",
    "rohlíky",
    "piškoty",
    "jahody",
    "hrušky",
    "mrkve",
    "pomeranče",
    "dorty",
]
list_veci_5 = [
    "jablek",
    "brambor",
    "tužek",
    "sešitů",
    "míčů",
    "bonbonů",
    "pomerančů",
    "sušenek",
    "balónků",
    "knížek",
    "kamenů",
    "korálků",
    "pastelek",
    "samolepek",
    "autíček",
    "kostiček",
    "pomerančů",
    "rohlíků",
    "piškotů",
    "jahod",
    "hrušek",
    "mrkví",
    "pomerančů",
    "dortů",
]
list_slovesa = [
    "přišel o",
    "ztratil",
    "odevzdal",
    "rozdal",
    "spotřeboval",
    "vypotřeboval",
    "odečetli mu",
    "vzali mu",
]
balicky_5 = [
    "pytlů",
    "balíků",
    "krabic",
    "košů",
    "sáčků",
    "boxů",
    "kufrů",
    "tašek",
]
balicky_4 = [
    "pytle",
    "balíky",
    "krabice",
    "koše",
    "sáčky",
    "boxy",
    "kufry",
    "tašky",
]
balicky_1 = [
    "pytli",
    "balíku",
    "krabici",
    "koši",
    "sáčku",
    "boxu",
    "kufru",
    "tašce",
]
list_vah = ["kg", "g"]
balicky_po_do = [
    "pytlů",
    "balíků",
    "krabic",
    "košů",
    "sáčků",
    "boxů",
    "kufrů",
    "tašek",
]
balicky_v = [
    "pytlích",
    "balících",
    "krabicích",
    "koších",
    "sáčcích",
    "boxech",
    "kufrech",
    "taškách",
]
def generuj_cisla():
    c = 0
    d = None
    second_symbol = None
    symbol = random.choice(symbol_list)
    mnozstvi = random.randint(1, 3)
    if symbol == "+":
        a = random.randint(10, 100)
        b = random.randint(10, 100)
    elif symbol == "-":
        a = random.randint(10, 100)
        b = random.randint(5, a - 1)
    elif symbol == "*":
        a = random.randint(2, 10)
        b = random.randint(2, 15)
    elif symbol == "/":
        b = random.randint(2, 20)
        c = random.randint(2, 9)
        a = c * b
    if mnozstvi == 1:
        second_symbol = random.choice(symbol_list)
        if second_symbol == "+" or second_symbol == "-":
            d = random.randint(10, 100)
        else:
            d = random.randint(3, 7)

    return a, b, c, d, symbol, second_symbol


@app.get("/priklad")
def ziskej_priklad(typ: str):

    a, b, c, d, symbol, second_symbol = generuj_cisla()

    if typ == "pocitani":
        priklad = (
            (f"{a} {symbol} {b} = ???")
            if not second_symbol
            else (f"{a} {symbol} {b} {second_symbol} {d} = ???")
        )
    elif typ == "pocitani_slovni":
        priklad, vysledek = generuj_slovni(a, b, symbol)
        return {"priklad": priklad, "vysledek": vysledek}
    elif typ == "pocitani_test":
        druh = random.randint(1, 4)
        if druh == 1:
            priklad, vysledek = generuj_slovni(a, b, symbol)
            return {"priklad": priklad, "vysledek": vysledek}
        else:
            priklad = (
                f"{a} {symbol} {b} = ???"
                if not second_symbol
                else f"{a} {symbol} {b} {second_symbol} {d} = ???"
            )
    elif typ == "desetina_cisla":
        a, b, c, d = (
            (a / 10, b / 10, c / 10, d / 10)
            if second_symbol
            else (a / 10, b / 10, c / 10, None)
        )
        priklad = (
            f"{a} {symbol} {b} = ???"
            if not second_symbol
            else f"{a} {symbol} {b} {second_symbol} {d} = ???"
        )
    elif typ == "desetina_cisla_slovni":
        a, b, c, d = (
            (a / 10, b / 10, c / 10, d / 10)
            if second_symbol
            else (a / 10, b / 10, c / 10, None)
        )
        priklad, vysledek = generuj_slovni_desetinne(a, b, symbol)
        zobrazeny_priklad = priklad.replace(".", ",")
        return {"priklad": zobrazeny_priklad, "vysledek": vysledek}
    elif typ == "desetina_cisla_test":
        druh = random.randint(1, 4)
        a, b, c, d = (
            (a / 10, b / 10, c / 10, d / 10)
            if second_symbol
            else (a / 10, b / 10, c / 10, None)
        )
        if druh == 1:
            priklad, vysledek = generuj_slovni_desetinne(a, b, symbol)
            zobrazeny_priklad = priklad.replace(".", ",")
            return {"priklad": zobrazeny_priklad, "vysledek": vysledek}
        else:
            priklad = (
                f"{a} {symbol} {b} = ???"
                if not second_symbol
                else f"{a} {symbol} {b} {second_symbol} {d} = ???"
            )

    if second_symbol:
        vyraz_pro_vypocty = f"{a} {symbol} {b} {second_symbol} {d}"
        vysledek = round(eval(vyraz_pro_vypocty), 2)
    else:
        if symbol == "/":
            vysledek = c if "desetina" not in typ else round(c / 10, 2)
        else:
            vysledek = round(OPS[symbol](a, b), 2)
    zobrazeny_priklad = priklad.replace(".", ",")
    return {"priklad": zobrazeny_priklad, "vysledek": vysledek}


def generuj_slovni(a, b, symbol):
    jmeno = random.choice(list_jmen)
    priklad = ""
    priklad += jmeno + " má "
    if symbol != "*":
        priklad += f"{a} "
    else:
        priklad += f"{b} "
    vec = random.choice(list_veci_5)

    if a < 5:
        vec = list_veci_4[list_veci_5.index(vec)]

    vec_na_vypis = vec

    if symbol == "+":
        priklad += f"{vec} a "
        priklad += f"dostal dalších {b}"
    elif symbol == "-":
        priklad += f"{vec}, ale "
        sloveso = random.choice(list_slovesa)
        priklad += f"{sloveso} {b}"
    elif symbol == "*":
        balicek = random.choice(balicky_5)
        if b < 5:
            balicek = balicky_4[balicky_5.index(balicek)]
            priklad += f"{balicek} a v každém jsou {a} {vec}"
        else:
            priklad += f"{balicek} a v každém je {a} {vec}"
    else:
        index_balicku = random.randrange(len(balicky_po_do))
        balicek = balicky_po_do[index_balicku]
        balicek_1 = balicky_1[index_balicku]

        priklad += (
            f"{vec} a rozdělil je do {b} {balicek}, "
            f"kolik {vec} je v 1 {balicek_1}"
        )
    
    if symbol != "/":
        priklad += f", kolik má {vec_na_vypis}?"

    vysledek = round(OPS[symbol](a, b), 2)

    return priklad, vysledek


def generuj_slovni_desetinne(a, b, symbol):
    jmeno = random.choice(list_jmen)
    vaha = random.choice(list_vah)
    vaha_slova = "kilogramů" if vaha == "kg" else "gramů"
    vec = random.choice(list_veci_5)

    if symbol == "/":
        while True:
            b = random.randint(2, 9)
            vysledek = Decimal(str(a)) / Decimal(b)

            
            if vysledek == vysledek.quantize(Decimal("0.01")):  # Pokud by výsledek měl více než dvě desetinná místa vygenerujeme znovu, dokud nenajdeme vhodný výsledek
                break

        index_balicku = random.randrange(len(balicky_po_do))
        balicek_po_do = balicky_po_do[index_balicku]
        balicek_v_jednom = balicky_1[index_balicku]

        priklad = (
            f"{jmeno} má {a}{vaha} {vec} a rozdělil je do "
            f"{b} {balicek_po_do}, kolik {vec} je v 1 "
            f"{balicek_v_jednom}?"
        )

        return priklad, float(vysledek)

    priklad = f"{jmeno} má {a}{vaha} "

    if symbol == "*":
        b = random.randint(2, 9)
        index_balicku = random.randrange(len(balicky_v))
        balicek_v = balicky_v[index_balicku]

        priklad += (
            f"{b} {balicky_4[index_balicku]} a v každém je "
            f"{a}{vaha} {vec}, kolik {vaha_slova} {vec} je v "
            f"{b} {balicek_v}?"
        )

    elif symbol == "+":
        priklad += f"{vec} a dostal dalších {b}{vaha}, "
        priklad += f"kolik má {vaha_slova} {vec}?"

    elif symbol == "-":
        sloveso = random.choice(list_slovesa)
        priklad += f"{vec}, ale {sloveso} {b}{vaha}, "
        priklad += f"kolik má {vaha_slova} {vec}?"

    vysledek = OPS[symbol](a, b)

    return priklad, round(vysledek, 2)
