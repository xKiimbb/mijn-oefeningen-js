# Handleiding: Eigen GitHub-repository Instellen voor Oefeningen

Volg deze stappen om de originele repository te klonen en deze naar je eigen GitHub-account te pushen, zodat je je eigen oplossingen kunt opslaan zonder wijzigingen aan te brengen in de originele repository.

---

## Stap 1: Clone de Originele Repository

### Kopieer de clone-URL van de repository

1. **Ga naar de originele GitHub-repository.**
2. **Klik op de groene knop "**Code**".**
3. **Kopieer de HTTPS- of SSH-URL.**

### Clone de repository naar je lokale machine

Open een terminal en voer het volgende commando uit:

```bash
git clone [URL van de originele repository]
```

**Voorbeeld:**

```bash
git clone https://github.com/jouwgebruikersnaam/repositorynaam.git
```

---

## Stap 2: Maak een Nieuwe Repository op Je Eigen GitHub-account

1. **Ga naar GitHub en klik op "**New**" of "**Nieuw**" rechtsboven op de pagina.**
2. **Configureer de nieuwe repository:**

   - Geef de repository een naam, bijvoorbeeld `mijn-oefeningen`.
   - Kies voor **Public** of **Private**, afhankelijk van je voorkeur.
   - **Belangrijk:** Voeg **geen** README, `.gitignore` of licentiebestand toe.

3. **Klik op "**Create repository**" om de repository aan te maken.**

---

## Stap 3: Verander de Remote Origin naar Je Eigen Repository

### Navigeer naar de lokale repository

```bash
cd repositorynaam
```

### Controleer de huidige remotes

```bash
git remote -v
```

Dit toont de huidige remote `origin`, die verwijst naar de originele repository.

### Verwijder de huidige `origin` remote

```bash
git remote remove origin
```

### Voeg je eigen repository toe als nieuwe `origin`

```bash
git remote add origin [URL van je nieuwe repository]
```

**Vervang** `[URL van je nieuwe repository]` **door de URL die je hebt gekopieerd van je nieuwe GitHub-repository.**

**Voorbeeld:**

```bash
git remote add origin https://github.com/jouwgebruikersnaam/mijn-oefeningen.git
```

### Controleer of de nieuwe `origin` correct is ingesteld

```bash
git remote -v
```

Dit zou nu moeten laten zien dat `origin` verwijst naar je eigen repository.

---

## Stap 4: Push de Lokale Repository naar Je Eigen GitHub-repository

### Push alle lokale commits naar je GitHub-repository

```bash
git push -u origin main
```

**Let op:** Vervang `main` door de juiste branchnaam als deze anders is.

### Authenticatie

- Als Git vraagt om inloggegevens, voer je je GitHub-gebruikersnaam en -wachtwoord in.
- Bij gebruik van tweestapsverificatie moet je een [Personal Access Token](https://docs.github.com/nl/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) gebruiken in plaats van een wachtwoord.

---

## Stap 5: Werk aan de Oefeningen

### Maak wijzigingen en commit ze

1. **Wijzig de bestanden in je code-editor.**

2. **Voeg de wijzigingen toe en commit ze:**

   ```bash
   git add .
   git commit -m "Mijn oplossingen voor de oefeningen"
   ```

### Push de wijzigingen naar je GitHub-repository

```bash
git push
```

---

**Nu zijn je oplossingen opgeslagen in je eigen GitHub-repository!**

---

## Samenvatting van Git-commando's

- **Clone de originele repository:**

  ```bash
  git clone [URL van de originele repository]
  ```

- **Verwijder de huidige remote `origin`:**

  ```bash
  git remote remove origin
  ```

- **Voeg je eigen repository toe als `origin`:**

  ```bash
  git remote add origin [URL van je nieuwe repository]
  ```

- **Controleer de remotes:**

  ```bash
  git remote -v
  ```

- **Push naar je eigen repository:**

  ```bash
  git push -u origin main
  ```

- **Voeg wijzigingen toe en commit ze:**

  ```bash
  git add .
  git commit -m "Commit bericht"
  ```

- **Push de wijzigingen:**

  ```bash
  git push
  ```

---

## Tips

- **Regelmatig committen:** Maak regelmatig commits om je voortgang bij te houden.
- **Controleer altijd je remotes:** Voer `git remote -v` uit om te controleren waar je naartoe pusht.
- **Hulp nodig?** Gebruik `git help` of raadpleeg de [Git-documentatie](https://git-scm.com/doc).

---

Veel succes met het werken aan de oefeningen!