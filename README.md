# Weihnachts-Wunschliste 2026

Gemeinsame Wunschliste für die Familie – mit Firebase (Anmeldung + Datenbank in Echtzeit).

**Mitglieder:** Roland · Beatrice · Gioiana · Vanessa · Jonathan · Nicola (Admin)

## So funktioniert's

- **🗓️ Stichtag 30. November:** Bis und mit 29.11. erfassen alle ihre Wünsche, „Ich schenke das“ ist noch
  gesperrt. Ab dem 30.11. kann geschenkt werden, die Mitglieder können dann nichts mehr erfassen, bearbeiten
  oder freigeben (nur noch zurückziehen oder löschen, solange nicht gekauft). Gilt jedes Jahr neu.
- **🔧 Alle Wünsche bearbeiten (Admin):** Knopf auf „Alle Wünsche“, führt zu „Mitglieder“. Dort kann der Admin
  jeden Wunsch bearbeiten und für jede Person neue hinzufügen – auch nach dem Stichtag.
- **Meine Wünsche:** jeder erfasst nur seine eigenen Wünsche (Entwurf oder freigegeben).
- **Alle Wünsche:** die freigegebenen Wünsche der anderen. Mit **„🎁 Ich schenke das“** springt der
  Wunsch als Paket in die eigene **Schenkung**.
- Danach ist der Wunsch für **alle anderen verschwunden** – niemand weiss, wer ihn genommen hat.
- Der **Beschenkte merkt nichts**: Er sieht seinen Wunsch weiterhin ganz normal in „Meine Wünsche“.
- **Schenkung:** dein Paket pro Person, Gesamtbetrag, Haken für „gekauft“. Als **gekauft** markierte
  Wünsche kann der Besitzer nicht mehr zurückziehen oder löschen.
- **🤝 Gemeinsam schenken:** Bei „Ich schenke das“ wählt man: ganzen Betrag übernehmen oder einen eigenen
  Anteil (mit Notiz). Bei Anteilen bleibt das Geschenk offen – alle Schenker (nicht der Beschenkte) sehen,
  wer mit wie viel dabei ist, und können sich absprechen. Ist der Preis erreicht, verschwindet es für die anderen.
- **Avatare:** jeder Avatar kann nur von einer Person gewählt werden.
- **Limiten:** in der Schenkung pro Person festlegen, wie viel man ausgeben möchte (nur für sich sichtbar).
- **🛒 Einkaufsliste:** in der Schenkung – alles, was noch zu kaufen ist, nach Shop sortiert, zum Ausdrucken.
- **⭐ Wichtigkeit:** beim Wunsch 1–3 Sterne; Herzenswünsche stehen bei den anderen zuoberst.
- **✨ Link einfügen:** Name, Bild und Preis werden vom Shop geholt (über die öffentlichen Dienste
  microlink.io, images.weserv.nl und allorigins.win; gratis bis 50 Abfragen pro Tag und Internetanschluss). Manche Shops geben nichts heraus – dann von Hand ausfüllen.
- **📦 Geschenk-Status:** in der Schenkung pro Geschenk: Gekauft → Eingepackt → Unter dem Baum.
- **⛄ Schneemann:** in der Schenkung – wächst mit jedem gekauften Geschenk, nur für einen selbst sichtbar.
- **🎄 Bescherung:** ab 24. Dezember liegen in „Meine Wünsche“ die Pakete unter dem Baum. Antippen packt aus
  und zeigt, von wem das Geschenk ist.
- **✨ Stimmung:** Der Himmel wird im Dezember immer dunkler, ab Heiligabend Nacht mit Sternen und Polarlicht.
  Im November und Dezember fliegt ab und zu der Schlitten vorbei (antippen!).
- **📜 Jahr abschliessen (Admin):** in den Einstellungen – verschenkte Wünsche kommen in den Rückblick,
  der Rest wird zu Entwürfen fürs nächste Jahr.
- **📅 Adventskalender:** jedes Türchen erst ab seinem Tag (verpasste können nachgeholt werden).
  Ist das heutige Türchen noch zu, erscheint auf der Startseite ein Knopf → Türchen im Vollbild öffnen.
  Spezial-Shows am Samichlaus (6.12.) und an Heiligabend (24.12.), an jedem Advent brennt eine Kerze mehr.
  Jeder öffnet seine Türchen selbst und nur einmal (mit Animation), danach kann er sie jederzeit
  wieder anschauen. Gespeichert pro Person (Handy und Computer gleich).
  Für alle sichtbar. Nur der Admin hat einen „Test-Tag“, um Türchen schon vorher zu öffnen und
  wieder zu schliessen – das betrifft nur sein Gerät, bei den anderen bleibt alles zu.
- **🔒 Private Wünsche (nur Admin):** Der Schalter „Privat“ oben neben der Suche führt zu Nicolas Merkliste für
  später (Name, Preis, Link, Bild, Notiz, „gekauft“). Sie sieht schlicht aus, ganz ohne Weihnachten, und hat keinen
  Stichtag. Die anderen Mitglieder sehen weder Schalter noch Liste. Nochmals auf den Schalter tippen führt zurück.
  Die Einträge stehen auch im JSON-Backup.
  - **Kategorien:** frei wählbar, bestehende werden vorgeschlagen. Jede Kategorie lässt sich einklappen
    (wird pro Gerät gemerkt).
  - **Priorität:** Hoch, Mittel oder Tief; die wichtigsten stehen in der Kategorie zuoberst.
  - **Sparen:** pro Wunsch Geld einzahlen oder herausnehmen, mit Fortschrittsbalken bis zum Preis. Das ist nur
    eine Notiz, es wird kein echtes Geld bewegt.
  - **Reiter:** Der private Bereich hat drei Seiten: Wünsche, Käufe und Einstellungen.
  - **Käufe:** Beim Markieren als gekauft werden Datum und bezahlter Betrag festgehalten. Die Seite zeigt die
    Ausgaben pro Monat oder Jahr und den Anteil der Kategorien, mit animierten Säulen. Eine Säule antippen zeigt nur
    diesen Zeitraum.
  - **Sortieren und Filtern:** nach Priorität, Datum oder Preis; Filter „Ziel erreicht“. Wird pro Gerät gemerkt.
    Alle Kategorien lassen sich auf einmal ein- oder ausklappen.
  - **Einstellungen:** Kategorien umbenennen, zusammenlegen oder entfernen; Animationen im Diagramm ein- oder
    ausschalten.
- **📱 Als App:** auf dem Handy zum Startbildschirm hinzufügen (Anleitung in den Einstellungen).
- **Admin (Nicola):** schaltet Zugänge frei und sieht/verwaltet alle Wünsche inkl. wer was schenkt.
  Die eigenen Überraschungen sind standardmässig ausgeblendet (Schalter in „Mitglieder“).

Das alles wird durch die Sicherheitsregeln (`firestore.rules`) auf dem Server erzwungen –
nicht nur in der Anzeige.

## Dateien

| Datei | Zweck |
|---|---|
| `01_Webseite\index.html` | die ganze Webseite |
| `01_Webseite\manifest.webmanifest`, `sw.js` | machen die Seite als App installierbar |
| `01_Webseite\icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | App-Symbole |
| `01_Webseite\README.md` | diese Anleitung |
| `02_Code\firestore.rules` | Sicherheitsregeln – in Firebase einfügen |
| `02_Code\wunschliste-backup.ps1`, `einrichten.ps1` | wöchentliches JSON-Backup |
| `02_Code\icons.ps1` | erzeugt die App-Symbole |
| `03_Daten\Fotos`, `03_Daten\JSON_Backup` | Bilder und JSON-Backups |
| `11_BackUp` | Sicherungskopien |
| `12_Tests` | Testserver und Beispieldaten |

Auf GitHub kommt nur der Inhalt von `01_Webseite`.

## Firebase einrichten (einmalig)

Firebase-Konsole: https://console.firebase.google.com → Projekt **wunschliste-5c094**

1. **Anmeldung aktivieren:** *Build → Authentication → Anmeldemethode*
   - **Google** aktivieren (Support-E-Mail wählen) → Speichern – damit meldet sich Nicola an
   - **E-Mail/Passwort** aktivieren → Speichern – damit melden sich alle anderen mit Name + Passwort an
2. **Selbst-Registrierung ausschalten:** *Authentication → Einstellungen → Nutzeraktionen*
   - Häkchen bei **„Erstellen (Registrierung) aktivieren“** entfernen → Speichern
3. **Domain erlauben:** *Authentication → Einstellungen → Autorisierte Domains → Domain hinzufügen*
   - `jundt100.github.io`
4. **Datenbank anlegen:** *Build → Firestore Database → Datenbank erstellen*
   - Standort `eur3 (europe-west)` → **Im Produktionsmodus starten**
5. **Regeln einfügen:** *Firestore Database → Regeln* → alles ersetzen durch den Inhalt von
   `02_Code\firestore.rules` → **Veröffentlichen**
6. **Admin-Einladung für Nicola (einmal von Hand):** *Firestore Database → Daten → Sammlung starten*
   - Sammlungs-ID: `einladungen`
   - Dokument-ID: Nicolas **Gmail-Adresse** in Kleinbuchstaben
   - Feld `name` (string) = `Nicola`
   - Feld `rolle` (string) = `admin`

> Falls du die vorherige Version schon ausprobiert hast: in *Firestore → Daten* die alten
> Sammlungen `mitglieder`, `einstellungen` und `reservierungen` löschen.

## Anmeldung

- **Nicola:** „Mit Google anmelden“.
- **Alle anderen:** mit **Name + Passwort** (z.B. `Roland`). Intern wird daraus die Adresse
  `roland@wunschliste-5c094.firebaseapp.com` – die muss nur Nicola beim Anlegen kennen.

## Mitglieder anlegen (Nicola)

1. Auf der Webseite mit Google anmelden → **Mitglieder** → **Zugänge verwalten**
   → Namen antippen → **Zugang freischalten** (Google-Feld leer lassen).
2. In Firebase: *Authentication → Nutzer → Nutzer hinzufügen*
   - E-Mail: `name@wunschliste-5c094.firebaseapp.com` (Name klein geschrieben, z.B. `roland@…`)
   - Passwort: frei wählen (mind. 6 Zeichen)

| Name | In Firebase anlegen als |
|---|---|
| Roland | `roland@wunschliste-5c094.firebaseapp.com` |
| Beatrice | `beatrice@wunschliste-5c094.firebaseapp.com` |
| Gioiana | `gioiana@wunschliste-5c094.firebaseapp.com` |
| Vanessa | `vanessa@wunschliste-5c094.firebaseapp.com` |
| Jonathan | `jonathan@wunschliste-5c094.firebaseapp.com` |

3. Der Person **Name + Passwort** mitteilen. Beim ersten Anmelden wird sie automatisch Mitglied.
   Unter **Einstellungen → Passwort ändern** kann sie danach ein eigenes Passwort setzen.

> **Passwort vergessen:** Es gibt kein echtes Postfach, deshalb kein „Zurücksetzen per E-Mail“.
> Passwörter also gut aufbewahren. Ein Konto zu löschen und neu anzulegen geht zwar,
> dann sind aber die bisherigen Wünsche dieser Person nicht mehr ihr zugeordnet.

## Wöchentliches JSON-Backup (auf Nicolas PC)

`02_Code\wunschliste-backup.ps1` speichert alle Daten als `03_Daten\JSON_Backup\Wunschliste_JJJJ-MM-TT.json`
(nicht auf GitHub hochladen), die Windows-Aufgabe „Wunschliste Backup“ startet es jeden Sonntag um 19:00.

1. In Firebase: *Authentication → Nutzer hinzufügen* → `backup@wunschliste-5c094.firebaseapp.com`
   mit einem eigenen Passwort (dieses Konto darf laut Regeln nur lesen).
2. Die aktuellen `02_Code\firestore.rules` veröffentlichen.
3. Einmal `02_Code\einrichten.ps1` ausführen (fragt das Passwort, richtet die Aufgabe ein, macht ein erstes Backup).
4. Protokoll: `03_Daten\JSON_Backup\backup.log`

## Auf GitHub hochladen

1. https://github.com/Jundt100/wunschliste → **Add file → Upload files**
2. **Alle Dateien** aus dem Ordner `01_Webseite` hineinziehen → **Commit changes**
3. Einmalig: **Settings → Pages** → Branch `main`, `/ (root)` → **Save**
4. Die Seite: https://jundt100.github.io/wunschliste/

> Die Anmeldung funktioniert nur über diese Internet-Adresse, nicht durch Doppelklick auf die Datei.
