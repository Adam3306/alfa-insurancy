# Alpha Biztosítás - D&O Biztosítás Weboldal

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

## Email küldés beállítása (Resend)

A weboldal űrlapja Resend API-t használ az email küldéshez. A következő lépéseket kell elvégezni:

### 1. Resend regisztráció és API kulcs

1. Regisztrálj a [Resend.com](https://resend.com) oldalon
2. Szerezz be egy API kulcsot a Resend Dashboard-ban

#### 1.1. Lokális fejlesztéshez (.env.local)

Hozz létre egy `.env.local` fájlt a projekt gyökérkönyvtárában:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Email címzett (ahova az ajánlatkérések érkeznek)
RECIPIENT_EMAIL=szego@premiumbiztositasok.hu

# Küldő email cím
# Fejlesztéshez: onboarding@resend.dev (automatikusan használja)
# Éles környezethez: saját domain-t kell beállítani (lásd alább)
RESEND_FROM_EMAIL=noreply@alphabiztositas.com
```

#### 1.2. Vercel deployment-hez (Environment Variables)

Ha Vercel-en van deployolva az alkalmazás:

1. Lépj be a [Vercel Dashboard](https://vercel.com/dashboard)-ba
2. Válaszd ki a projektet
3. Menj a **Settings** → **Environment Variables** menüpontra
4. Add hozzá a következő változókat:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxxx` | Production, Preview, Development |
| `RECIPIENT_EMAIL` | `szego@premiumbiztositasok.hu` | Production, Preview, Development |
| `RESEND_FROM_EMAIL` | `noreply@alphabiztositas.com` | Production |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev` | Preview, Development |

5. Kattints a **Save** gombra
6. **Redeploy** a projektet, hogy az új environment változók érvénybe lépjenek

**Fontos:** A Vercel-en az environment változók automatikusan elérhetők a kódban a `process.env.VARIABLE_NAME` formában.

### 2. Domain beállítása éles környezethez

Az éles környezetben az `alphabiztositas.com` domain-t kell ellenőrizni a Resend-ben:

#### 2.1. Domain hozzáadása a Resend-ben

1. Lépj be a [Resend Dashboard](https://resend.com/dashboard)-ba
2. Menj a **Domains** menüpontra
3. Kattints az **Add Domain** gombra
4. Add meg: `alphabiztositas.com`
5. A Resend megjeleníti a hozzáadandó DNS rekordokat (SPF, DKIM, DMARC)

#### 2.2. DNS rekordok beállítása

**Hol kell beállítani:** A domain szolgáltatódnál (domain registrar) vagy DNS szolgáltatódnál.

**Gyakori domain szolgáltatók:**
- **GoDaddy**: Bejelentkezés → My Products → DNS Management
- **Namecheap**: Bejelentkezés → Domain List → Manage → Advanced DNS
- **Cloudflare**: Dashboard → DNS → Records
- **1&1 IONOS**: Domain & SSL → DNS Settings
- **További szolgáltatók**: Általában "DNS Settings", "DNS Management" vagy "Zone Editor" menüpont alatt található

**Lépések:**

1. **Lépj be a domain szolgáltatód felületére** (ahol regisztráltad az `alphabiztositas.com` domain-t)

2. **Keress rá a DNS beállításokra** (általában "DNS Management", "DNS Settings", "Zone Editor" néven)

3. **A Resend Dashboard-ban másold ki a következő rekordokat:**
   - **SPF rekord** (TXT típusú)
   - **DKIM rekord** (TXT típusú, általában `_resend._domainkey` névvel)
   - **DMARC rekord** (TXT típusú, `_dmarc` névvel)

4. **Add hozzá ezeket a rekordokat a DNS szolgáltatódnál:**
   - Kattints az "Add Record" vagy "Új rekord" gombra
   - Válaszd ki a **TXT** típust
   - Add meg a **Name/Host** értéket (pl. `@` vagy `_resend._domainkey`)
   - Add meg a **Value/Content** értéket (amit a Resend adott)
   - Mentsd el a változtatásokat

5. **Várj a DNS propagációra** (általában 5-60 perc, de akár 24 óra is lehet)

6. **Ellenőrizd a Resend Dashboard-ban**, hogy a domain ellenőrzött-e (zöld pipa jelenik meg)

**Példa DNS rekordok** (a Resend által megadott értékeket használd!):
```
Típus: TXT
Név: @
Érték: v=spf1 include:resend.com ~all

Típus: TXT
Név: _resend._domainkey
Érték: [Resend által generált DKIM kulcs]

Típus: TXT
Név: _dmarc
Érték: v=DMARC1; p=none; rua=mailto:dmarc@alphabiztositas.com
```

**Fontos:** 
- A domain ellenőrzése után az email küldés csak az ellenőrzött domain-ről működik
- Fejlesztéshez használd az `onboarding@resend.dev`-et (nincs DNS beállítás szükséges)
- Ha nem vagy biztos a DNS beállításokban, kérj segítséget a domain szolgáltatódtól
- **Vercel használata esetén:** A DNS rekordokat továbbra is a domain szolgáltatódnál (nem a Vercel-en) kell beállítani. A Vercel csak a weboldal hosting-jáért felelős, az email DNS rekordokat (SPF, DKIM, DMARC) a Resend-hez kell beállítani a domain szolgáltatódnál.

### 3. Tesztelés

- **Fejlesztési környezetben:** Az `onboarding@resend.dev` automatikusan működik
- **Éles környezetben:** Csak az ellenőrzött domain-ről lehet küldeni (pl. `noreply@alphabiztositas.com`)

## A weboldal futtatása

A fejlesztői szerver indításához:

```bash
npm run dev
```

Ezután nyissa meg a [http://localhost:3000](http://localhost:3000) címet a böngészőjében.

## Építés és telepítés

### Lokális build

A produkciós build elkészítéséhez:

```bash
pnpm run build
```

A build ellenőrzéséhez:

```bash
pnpm run start
```

### Vercel deployment

Ez a projekt Vercel-re van optimalizálva. A deployment automatikusan történik, ha a projekt GitHub-on van és csatlakoztatva van a Vercel-hez.

**Első deployment:**

1. Push-old a kódot a GitHub repository-ba
2. Lépj be a [Vercel Dashboard](https://vercel.com/dashboard)-ba
3. Kattints az **Add New Project** gombra
4. Válaszd ki a GitHub repository-t
5. Vercel automatikusan felismeri a Next.js projektet
6. **Fontos:** Add hozzá az environment változókat (lásd fentebb)
7. Kattints a **Deploy** gombra

**Automatikus deployment:**

- Minden push a `main` branch-re automatikusan újra deployolja a production-t
- Pull request-ek preview deployment-et hoznak létre

**Domain beállítása Vercel-en:**

1. Vercel Dashboard → Project → Settings → Domains
2. Add hozzá az `alphabiztositas.com` domain-t
3. Kövesd a Vercel által megadott DNS utasításokat
4. Várj a DNS propagációra (5-60 perc)

## Kapcsolat

Ha bármilyen kérdése vagy problémája van a weboldallal kapcsolatban, kérjük, vegye fel a kapcsolatot velünk.
