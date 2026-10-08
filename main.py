from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS so GitHub Pages front-end can talk to Render back-end
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/priklad?typ=pocitani")
def ziskej_priklad():
    priklad = 4
    priklad = str(priklad)
    return priklad
