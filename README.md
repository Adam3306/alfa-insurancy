# Alfa Biztosítás - D&O Biztosítás Weboldal

Ez a projekt egy Next.js alapú weboldal a D&O (Directors & Officers) biztosítási szolgáltatások bemutatására.

## A PDF és a weboldal közötti különbségek javítása

A weboldal frissítve lett, hogy jobban megfeleljen a PDF-ben látható designnak. A következő módosítások történtek:

1. **Fejléc (Header)** - A fejléc most már rögzített a lap tetején és görgetés közben is látható marad
2. **Képek elhelyezése** - A képek pozicionálása javítva lett, hogy megfeleljen a PDF layoutnak
3. **Szöveg tagolása és kiemelése** - A fontosabb szövegrészek most már ki vannak emelve, és a tagolás követi a PDF-ben látható stílust
4. **Betűtípusok** - A betűtípusok igazodnak a PDF-ben használtakhoz
5. **Háttér** - A színséma frissítve lett a PDF designhoz igazodva
6. **Logó** - A logó szerepel a headerben és a megfelelő helyeken

## Hiányzó elemek

A következő elemekre van még szükség a teljes implementációhoz:

1. **Valódi logó** - Jelenleg egy placeholder logó van használatban. Kérjük, töltse fel a végleges logót a `public/alfa-insurance-logo.png` helyre.
2. **Hiányzó képek** - A következő képek hiányoznak, kérjük, töltse fel őket a `public` mappába:
   - `reputation-damage.jpg`
   - `insurance-consultant.jpg`

## Email küldés beállítása

A weboldal űrlapja működőképes, és a beküldött üzeneteket a megadott email címre küldi. A következő lépéseket kell elvégezni a funkció aktiválásához:

1. Hozzon létre egy `.env.local` fájlt a projekt gyökérkönyvtárában az alábbi változókkal:

```
# Email konfiguráció
EMAIL_SERVER=smtp.példa.hu
EMAIL_PORT=587
EMAIL_USER=az-ön-email-címe@példa.hu
EMAIL_PASSWORD=az-ön-jelszava
EMAIL_SECURE=false

# Fogadó email cím
RECIPIENT_EMAIL=info@alfabiztositas.hu
```

2. Helyettesítse a fenti értékeket a valós SMTP szerver adataival. Ha Gmail-t használ, akkor:

   - EMAIL_SERVER=smtp.gmail.com
   - EMAIL_PORT=587
   - EMAIL_SECURE=false
   - Engedélyeznie kell az "alkalmazásjelszavak" funkciót a Google-fiókjában

3. A RECIPIENT_EMAIL változó határozza meg, hogy melyik email címre érkezzenek a beküldött űrlapok.

## A weboldal futtatása

A fejlesztői szerver indításához:

```bash
npm run dev
```

Ezután nyissa meg a [http://localhost:3000](http://localhost:3000) címet a böngészőjében.

## Építés és telepítés

A produkciós build elkészítéséhez:

```bash
npm run build
```

A build ellenőrzéséhez:

```bash
npm run start
```

## Kapcsolat

Ha bármilyen kérdése vagy problémája van a weboldallal kapcsolatban, kérjük, vegye fel a kapcsolatot velünk.
