from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
import operator

app = FastAPI()

# Enable CORS so GitHub Pages front-end can talk to Render back-end
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
OPS = {
    "+": operator.add,
    "-": operator.sub,
    "*": operator.mul,
    ":": operator.truediv
    }
symbol_list = ["+", "-", "*", ":"]


@app.get("/priklad")
def ziskej_priklad(typ: str):
    if typ == "pocitani":
        symbol = random.choices(symbol_list)
        symbol = symbol[0]
        if symbol == "+":
            a = random.randint(10, 100)
            b = random.randint(10, 100)
        elif symbol == "-":
            a = random.randint(10, 100)
            b = random.randint(5, a - 1)
        elif symbol == "*":
            a = random.randint(2, 10)
            b = random.randint(2, 15)
        elif symbol == ":":
            b = random.randint(2, 20)
            c = random.randint(2, 9)
            a = b * c
        global vysledek
        vysledek = OPS[symbol](a, b)
        priklad = f"{a} {symbol} {b} = ???"
        return priklad


@app.get("/odpoved")
def ziskej_odpoved(typ: str):
    if vysledek == typ.strip():
        return "spravne"
    else:
        return vysledek