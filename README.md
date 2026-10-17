# Sopralluoghi — versione 1.0.0

App personale per compilare sopralluoghi immobiliari su Android, utilizzabile offline e pubblicabile su GitHub Pages senza installare strumenti sul PC.

## 1. Pubblicazione da GitHub sul PC

1. Estrai lo ZIP sul PC. Apri la cartella `sopralluoghi` che trovi all’interno.
2. Accedi a https://github.com e premi **+ → New repository**.
3. Scrivi `sopralluoghi` come nome. Per il percorso gratuito più semplice scegli **Public**, seleziona **Add a README file** e premi **Create repository**.
4. Nel repository premi **Add file → Upload files**.
5. Trascina il CONTENUTO della cartella `sopralluoghi`: i file `index.html`, `app.js`, `exports.js`, `style.css`, `sw.js`, il manifest, le icone, la cartella `vendor` e i documenti. Non caricare lo ZIP e non trascinare la cartella contenitore come cartella aggiuntiva. `index.html` deve essere nella pagina principale del repository.
6. Premi **Commit changes** in fondo alla pagina.
7. Vai a **Settings → Pages**. In **Build and deployment**, scegli **Deploy from a branch**. Seleziona il branch **main**, cartella **/(root)** e premi **Save**.
8. Attendi la pubblicazione: GitHub indica il link nella pagina Pages. Di solito sarà `https://TUO-NOME.github.io/sopralluoghi/`. Possono servire alcuni minuti.
9. Apri quel link dal PC per controllare che compaia “I tuoi sopralluoghi”. Il PC e il telefono hanno archivi locali separati: non sono sincronizzati tra loro.

Con un repository pubblico il codice e l’interfaccia dell’app sono visibili. Le schede, le foto e i backup non fanno parte del repository e non devono essere caricati su GitHub. Il pacchetto non contiene i dati del modello Excel ricevuto.

## 2. Installazione sul telefono Android

1. Apri il link pubblicato usando **Chrome** sul telefono.
2. Attendi il caricamento. In **Backup e impostazioni**, controlla il messaggio **App pronta per l’uso offline**.
3. Usa **Installa sul telefono**, se compare, oppure il menu ⋮ di Chrome → **Aggiungi a schermata Home / Installa app**.
4. Apri l’icona dalla schermata Home, crea una scheda di prova e inserisci qualche dato.
5. Chiudi l’app, attiva la modalità aereo e riaprila. Controlla che la scheda sia presente e modificabile; prova PDF ed Excel.
6. Riattiva la connessione. Quando richiesto, autorizza fotocamera e posizione. Il GPS può funzionare senza internet ma il primo fix può impiegare più tempo. La mappa online e il link annuncio richiedono invece internet.

Non usare la navigazione in incognito. L’archivio è nel browser associato all’app: cancellare i dati del sito, cambiare browser o cambiare indirizzo del sito può rendere l’archivio non disponibile. Esporta prima un backup.

## 3. Compilazione

- **Nuova scheda** assegna data e numero progressivo modificabile; gli altri campi iniziano vuoti.
- Apri le sezioni e compila i campi. Il salvataggio è automatico: attendi **Salvato sul dispositivo** prima di chiudere.
- **Vendita**, **Locazione** o **Vendita e locazione** selezionano i prezzi da esportare; un prezzo precedentemente inserito resta conservato nella scheda anche quando nascosto.
- Le superfici sono indipendenti: il totale non è calcolato automaticamente, per evitare di conteggiare erroneamente soppalchi e altre parti. Zero è diverso da campo vuoto.
- Il canone è espresso in **euro al mese**.
- Portoni e cancelli prevedono un numero e misure di riferimento. Se hanno dimensioni diverse usa le note per i dettagli.
- I concorrenti e le filiali sono righe aggiungibili: nomi, numeri e distanze si inseriscono manualmente. Non ci sono ricerche o calcoli automatici delle distanze.
- **Acquisisci posizione GPS** registra coordinate e precisione e aggiorna il link mappa. L’indirizzo resta manuale.
- Le foto si possono scattare o scegliere dalla galleria. Sono ridimensionate a massimo 1920 pixel sul lato maggiore e salvate in JPEG per contenere lo spazio occupato. Conserva gli originali altrove se ti servono a piena risoluzione.
- **Duplica scheda senza foto** copia i dati in una nuova scheda con nuovo numero; controlla e aggiorna la data se necessario.
- Non c’è una sezione riunioni.

## 4. Esportazioni

**Scarica PDF** genera un documento A4 con tabella, concorrenza e filiali. Note e tabelle lunghe proseguono su più pagine, senza tagliare il contenuto. L’aspetto riprende il modello, con righe aggiunte per vendita/locazione e note. È generato direttamente nell’app, senza usare la finestra di stampa o una connessione.

**Scarica Excel** crea un vero `.xlsx` modificabile, con valori numerici, data, collegamenti e menu a tendina. Include solo il foglio Scheda. Non include il foglio RIUNIONI. Puoi aprirlo con Excel sul PC e aggiungere manualmente le immagini delle mappe sotto le tabelle. L’area di stampa iniziale termina alla fine delle tabelle: dopo aver aggiunto le mappe amplia l’area di stampa da Excel, se vuoi stamparle.

Le esportazioni PDF ed Excel non includono le foto. Le modifiche fatte dopo l’esportazione in Excel non tornano automaticamente nell’app. Un file Excel non sostituisce il backup dell’archivio.

## 5. Backup manuale e ripristino

In **Backup e impostazioni → Scarica backup completo** salvi un unico file JSON con tutte le schede e tutte le foto. Conservalo sul PC o caricalo in Google Drive come qualsiasi file personale.

**Importa backup** legge un backup JSON prodotto dall’app. Prima mostra quante schede verranno importate e quante sostituiranno schede con lo stesso identificativo. Le altre schede locali restano conservate. Se esiste già un archivio locale, l’app scarica anche un backup precedente prima di applicare il ripristino: verifica che Chrome abbia salvato il download. La sostituzione non confronta campo per campo e non fonde le singole modifiche.

## 6. Collegamento Google Drive: configurazione una tantum

Questa parte richiede il tuo account Google. Non devi comunicare password o segreti a nessuno. L’app funziona offline e con backup manuale anche prima della configurazione di Drive.

1. Apri https://console.cloud.google.com/ sul PC e crea un progetto, per esempio **Sopralluoghi personali**.
2. In **API e servizi → Libreria**, cerca **Google Drive API** e abilitala.
3. Configura **Google Auth Platform / Schermata consenso OAuth**: nome app “Sopralluoghi”, il tuo indirizzo per assistenza e contatti. Per un account Gmail personale scegli il pubblico **Esterno / External**.
4. Puoi iniziare in modalità **Testing**. In **Audience / Pubblico → Test users** aggiungi il tuo stesso indirizzo Gmail.
5. In **Data Access / Accesso ai dati**, aggiungi lo scope `https://www.googleapis.com/auth/drive.appdata`. Non servono accessi a tutti i file di Drive.
6. In **Clients / Credenziali**, crea un **OAuth client ID**, tipo **Web application / Applicazione web**.
7. In **Authorized JavaScript origins**, aggiungi SOLO l’origine del sito: `https://TUO-NOME.github.io` (senza `/sopralluoghi/` e senza slash finale). Non sono necessari URI di reindirizzamento per il flusso popup usato dall’app.
8. Copia il **Client ID**, che termina con `.apps.googleusercontent.com`. Non creare né inserire un client secret nell’app o su GitHub.
9. Sul telefono apri **Backup e impostazioni**, incolla il Client ID e premi **Collega Google Drive**. Accedi con l’account aggiunto ai test e autorizza.
10. Premi **Backup adesso** e verifica il messaggio con la data dell’ultimo backup. Poi usa **Trova backup su Drive** per controllare che il backup compaia nell’elenco.
11. Attiva **Backup automatico con app aperta e connessa** se lo desideri.

I nomi delle voci Google possono variare con lingua e aggiornamenti. Se Google mostra un errore di origine, verifica l’origine del punto 7. Se blocca l’account, verifica l’utente di test. La modalità Testing può richiedere autorizzazioni periodiche: mantieni sempre un backup esportabile.

### Come funziona il backup automatico

- I dati si salvano sempre prima sul dispositivo.
- Con l’app aperta, connessione presente e autorizzazione Google valida, dopo circa 20 secondi dall’ultima modifica parte un backup completo di TUTTE le schede e foto. Riparte anche al ritorno online nelle stesse condizioni.
- Alla scadenza del token o dopo la chiusura e riapertura dell’app devi premere nuovamente **Collega Google Drive**. Il token è conservato solo in memoria; non vengono salvati password, refresh token o client secret.
- Non è un servizio che lavora a app chiusa e non è una sincronizzazione bidirezionale. Aprire la PWA non scarica automaticamente l’archivio di Drive.
- Ogni backup è una nuova copia con data, così una cancellazione locale non sovrascrive immediatamente il backup precedente. Non ci sono eliminazioni automatiche delle copie: con molte foto possono occupare spazio sul tuo Drive.
- I backup sono nello spazio privato `appDataFolder` di Google Drive, non tra i file normali. In questa app **Trova backup su Drive** elenca le 20 copie più recenti e consente di ripristinarle.
- **Scollega** rimuove il token dalla sessione locale; non elimina copie su Drive e non revoca il consenso Google. Puoi revocarlo nelle impostazioni del tuo account Google.
- Client ID e preferenza backup sono locali al dispositivo. Il Client ID è un identificatore pubblico, non una password.

## 7. Aggiornare il codice

Prima esporta un backup. Carica i nuovi file nello stesso repository e percorso, sostituendo quelli esistenti; non cambiare nome del repository o dominio senza esportare l’archivio. Le versioni successive devono cambiare il nome della cache in `sw.js` quando modificano i file offline. Chiudi tutte le finestre dell’app e le schede Chrome del sito, poi riapri online; può servire una seconda apertura perché il nuovo service worker si attivi. Non cancellare i dati del sito per aggiornare.

## 8. Verifiche della versione consegnata

Controllati: sintassi JavaScript; presenza di tutti i file della cache offline; percorsi relativi compatibili con repository GitHub Pages; generazione di PDF normali e con note lunghe; riapertura dell’Excel esportato con numeri, date e menu; gestione delle code di salvataggio; validazione dei backup e ripristino che conserva le schede non coinvolte. PDF verificati anche visivamente.

Da verificare sul tuo telefono dopo la pubblicazione: installazione, avvio in modalità aereo, fotocamera, permesso GPS e download. Il login Google e il caricamento su Drive richiedono il tuo Client ID e il tuo account, quindi non sono stati collaudati con un account reale in questa consegna. Non è stato eseguito un collaudo completo in un browser Android.

## 9. Riferimenti ufficiali

- GitHub Pages, pubblicazione da branch: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Google, access token per app web: https://developers.google.com/identity/oauth2/web/guides/use-token-model
- Google Drive, cartella dati dell’app: https://developers.google.com/workspace/drive/api/guides/appdata

## 10. Struttura e dipendenze

App statica HTML/CSS/JavaScript, IndexedDB per l’archivio, Service Worker per l’uso offline. Nessun build e nessun backend richiesto. Le dipendenze PDF ed Excel sono incluse nella cartella `vendor`, quindi non richiedono internet dopo la preparazione offline. Solo il collegamento Google carica Google Identity Services online.

- jsPDF 2.5.2
- jsPDF-AutoTable 3.8.4
- ExcelJS 4.4.0

Le licenze sono incluse in `vendor`. Il codice applicativo è personalizzabile.
