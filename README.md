
Fullstack Projekt Linkshare ist eines der Frontend Mentor Guru Projekte in meinem Portfolio. Hierbei stellt Frontend Mentor die Designdateien und eine Projektübersicht zur Verfügung, so dass dem Challenge Teilnehmer selber frei gestellt wird, wie er zu dem gewollten Ergebnis kommt. Das Projekt selbst teilt sich in zwei Teile auf. Das Frontend besteht aus einem serverseitig gerenderten Nuxt Projekt. Dieses bezieht seine Daten durch ein Python FastAPI basiertes Backend.

Als Kern des Frontends dient ein Pinia Store, der sowohl die Authentifizierung des Nutzers handhabt, als auch die Link- und Profildaten zur Verfügung stellt, die von der API stammen. Gemanagt wird die Überprüfung des Login Status über die in Nuxt integrierte Middleware. Hierbei wird auf den geschützen Seiten eine Authentifizierung, via API Abfrage, mit dazugehörigen JSON Web Token durchgeführt.

Der Editor setzt neben einer Live Preview der Nutzerinformation auch auf ein Drag and Drop System zum Neuanordnen der Nutzerlinks. Hierfür verwendet die App das Vue.Draggable Paket. Dabei wird die Position mit an die API übertragen und beim nächsten Login auch wieder reflektiert. Eine Überprüfung der Nutzereingaben wird nutzerseitig ausgeführt bevor die Daten an den Server übertragen werden.

Die App ist in der Lage, das vom Nutzer hochgeladene Foto an die API zu übermitteln, und den vom Server kommenden Base64 String wieder in ein Bild zu konvertieren, das dem Nutzer im Frontend angezeigt werden kann.

Die App ist sowohl für den Desktop, als auch für Tablet und Smartphone ausgelegt und passt die UI für das beste Nutzererlebnis an. So wird die Echtzeit Preview auf Smartphones entfernt, um mehr Raum für den Editor zu lassen.

Das FastAPI Backend ist darauf ausgelegt, einen JSON Web Token nach der Anmeldung zu generieren und auf den geschützten API Endpunkten zu verifizieren. In diesem Projekt habe ich auf eine einfache SQLite Datenbank gesetzt. Hierbei sind die Pfade zum Editieren der Informationen via Token Verifizierung gesichert. Das Backend speichert die Bilder als Base64 in einem eigenen Ordner auf dem Server und gibt diese auch als Base64 String wieder an das Frontend zurück.



# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
