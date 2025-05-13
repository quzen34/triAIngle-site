import os, sys
from dotenv import load_dotenv
load_dotenv()

sci  = os.getenv("VOLET_SCI_NAME")
sec  = os.getenv("VOLET_SCI_SECRET")
pwd  = os.getenv("VOLET_SCI_PASSWORD")

if not all([sci, sec, pwd]):
    sys.exit("❌  .env içindeki VOLET_* değerleri eksik!")

print(f"✅  SCI: {sci} – Secret len: {len(sec)}")
