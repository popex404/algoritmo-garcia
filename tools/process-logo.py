"""
Procesa imágenes negras-sobre-blanco -> PNG con transparencia (y recoloreadas).
Genera, en public/:
  - logo-ag-white.png : logo BLANCO transparente  (sitio oscuro)
  - logo-ag.png       : logo NEGRO transparente    (favicon / fondos claros)
  - gear-white.png    : engranaje BLANCO transparente (núcleo del héroe, gira)

Uso:  rtk python JG/algoritmo-garcia/tools/process-logo.py
(Re-correr cada vez que cambies Logo.png o gear.png)
"""
import os
from PIL import Image

base = os.path.dirname(os.path.abspath(__file__))
proj = os.path.dirname(base)
outdir = os.path.join(proj, "public")
os.makedirs(outdir, exist_ok=True)

# Luminancia -> alfa (negro = opaco, blanco = transparente), conservando antialias.
_lut = []
for v in range(256):
    if v >= 245:
        _lut.append(0)
    elif v <= 50:
        _lut.append(255)
    else:
        _lut.append(255 - v)


def to_alpha(path, pad=16):
    alpha = Image.open(path).convert("L").point(_lut)
    bbox = alpha.getbbox()
    if bbox:
        l, t, r, b = bbox
        l = max(0, l - pad); t = max(0, t - pad)
        r = min(alpha.width, r + pad); b = min(alpha.height, b + pad)
        alpha = alpha.crop((l, t, r, b))
    return alpha


def save(alpha, rgb, name):
    img = Image.new("RGBA", alpha.size, (rgb[0], rgb[1], rgb[2], 255))
    img.putalpha(alpha)
    img.save(os.path.join(outdir, name))
    print("guardado:", name, img.size)


jobs = [
    ("Logo.png", [((255, 255, 255), "logo-ag-white.png"), ((20, 19, 26), "logo-ag.png")]),
    ("gear.png", [((255, 255, 255), "gear-white.png")]),
]

for src, outs in jobs:
    path = os.path.join(proj, src)
    if not os.path.exists(path):
        print("(omitido, no existe):", src)
        continue
    alpha = to_alpha(path)
    for rgb, name in outs:
        save(alpha, rgb, name)

print("Listo.")
