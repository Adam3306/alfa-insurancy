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
