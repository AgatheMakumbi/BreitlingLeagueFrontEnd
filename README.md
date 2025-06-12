# Breitling League FrontEnd

## Cloner le repo
```bash
git clone https://github.com/AgatheMakumbi/BreitlingLeagueFrontEnd.git
```
## Installer les dépendences
```bash
npm install
```
## 🌐 Présentation

Breitling League FrontEnd est une application web Vue 3 (Options API) qui permet aux revendeurs de se défier en duel ou de tester leurs connaissances sur l’univers Breitling.

Elle communique avec une API REST disponible ici :  
👉 [https://github.com/micdesgalier/BreitlingLeague-API](https://github.com/micdesgalier/BreitlingLeague-API)

Déploiement :  
🌍 [http://195.15.212.178](http://195.15.212.178)

## 🛠️ Tech Stack

Le projet est construit avec les technologies suivantes :

- **Vue 3** (Options API)
- **Vue Router** pour la navigation
- **Axios** pour les appels HTTP
- **Tailwind CSS** pour le style
- **normalize.css** pour une base CSS homogène
- **Vite** pour le bundling et le dev serveur


## 🗃 Structure du projet

Voici les dossiers/fichiers clés dans `src/` et leur rôle :

- `/components/` → Composants réutilisables (boutons, quiz, ranking, etc.)
  - `/LeagueSubPages/` → Sous-pages spécifiques à la League (page des duels 1vs1, onboarding, novelties)
  - `/pages/` → Pages principales accessibles via routing (Accueil, Profil, League…)
- `/stores/` → Variables et fonctions globales partagées (helpers, états globaux…)
- `/router.js` → Déclaration des routes principales avec Vue Router
- `/App.vue` → Composant racine de l’application 
- `/main.js` → Point d’entrée qui initialise et monte l’app Vue
- `/assets/font/` → Polices personnalisées utilisées dans l’UI
- `/style.css` → Fichier global de styles (classes utilitaires, classes tailwind)

Les images statiques sont stockées dans le dossier `/public/assets/images`.

## 🧭 Routing

L'application utilise `Vue Router` pour gérer la navigation entre les pages. Voici les routes principales et leur objectif :

### Pages générales (mock des pages du vrai site) :
- `/` → Page d’accueil
- `/specialist-training` → Accès à la formation Breitling Specialist
- `/training-resources` → Ressources pédagogiques
- `/collection-tool` → Outil de consultation des collections
- `/140-years` → Scrolllytelling des 140 ans de Breitling
- `/user-profile` → Profil utilisateur
- `/cup` → Accès à la Breitling Cup (mode compétitif)

### Page pour accéder à la compétition :
- `/league` → Accueil de la Ligue Breitling
- `/league/onboarding` → Introduction à la Ligue

### Pages League (1vs1) :
- `/league/friends-duels` → Duel contre un ami
- `/league/random-duels` → Duel contre un adversaire aléatoire
- `/league/profile1vs1` → Présentation d'un joueur 
- `/league/recap` → Résumé du duel (theme, adversaire,status)
- `/league/duel` → Gestionnaire du déroulement du duel
**Pages aussi utilisée pour Quizz solo**
- `/league/quiz` → Composant quiz (version isolée)
- `/league/newQuizz` → Lancement et contrôle du quiz
- `/league/finishedquiz` → Fin d’un quiz (hors duel)

### Pages nouveautés :
- `/league/novelties` → Accès aux nouveautés
- `/league/noveltiesTheory` → Théorie liée aux nouveautés
- `/league/noveltiesEndMiniGame` → Résultat du mini-jeu
- `/league/minigameMemory` → Jeu de mémoire
- `/league/minigameFeedback` → Feedback du mini-jeu


Toutes les routes sont déclarées dans `router.js` via `createRouter()` avec `createWebHistory()`.

## 🧩 Pages clés à comprendre

Quelques composants essentiels au cœur de la logique métier de l'application :

### 🔹 QuizzManager.vue
- Gère tout le déroulé d’un quiz
- Contrôle le timer, l’index de la question actuelle et la progression utilisateur
- Fait des appels API pour récupérer les questions et poster les réponses

**Fonctions clés :**
- `startTimer()` → Démarre le compte à rebours du quiz
- `fetchQuizzId()` → Récupère un quiz depuis l’API
- `handleAnswer(payload)` → Envoie la réponse d’un utilisateur à l’API

---

### 🔹 Recap1vs1.vue
- Page intermédiaire en mode 1vs1 après une réponse
- Affiche l’état du duel (ex. : "en attente", "à votre tour", etc.)
- Sert de transition avant le prochain tour ou la fin du duel

---

### 🔹 DuelsManager.vue
- Point d’entrée principal des duels
- Récupère les données de match depuis l’API
- Détermine si c’est à l’utilisateur de jouer ou non
- Gère la redirection vers le bon composant (Recap1vs1 ou QuizzManager)

---

### 🔹 Page1vs1Friend.vue
- Gère le flux de configuration d’un duel entre amis
- Permet de choisir un thème, un adversaire, puis une mise
- Redirige vers `DuelsManager.vue` avec les infos nécessaires

**Fonction clé :**
- `nextStep()` → Navigue entre les différentes étapes de configuration

---

### 🔹 Page1vs1Random.vue
- Similaire à Page1vs1Friend.vue mais pour un adversaire aléatoire
- Gère le choix du thème et de la mise
- Propose automatiquement un adversaire puis redirige vers `DuelsManager.vue`

**Fonction clé :**
- `nextStep()` → Idem, navigation dans les étapes de configuration

---

### 🔹 Quiz.vue
- Composant UI affichant les questions et leurs choix
- Reçoit les données du quiz en `props`
- Émet l’ID de la réponse sélectionnée au `QuizzManager`

---
## 📡 API intégrée (Frontend-side)

- Axios est utilisé globalement pour tous les appels HTTP
- `apiUrl` est une constante importée depuis `stores/globals.js`
- Les endpoints sont organisés autour des quiz, utilisateurs et duels

### Endpoints clés :

#### 📍 Quiz 1vs1
- `POST /quiz-matches/{matchId}/questions/{questionId}/answer`  
  → Envoie une réponse dans un duel  
- `GET /quiz-matches/{matchId}`  
  → Récupère les données complètes d’un duel (état, joueurs, scores, etc.)

#### 📍 Quiz Solo
- `POST /quizzes/{quizId}/questions/{questionId}/answer`  
  → Envoie une réponse dans un quiz en solo

#### 📍 Utilisateur
- `GET /users`  
  → Récupère les données des utilisateurs disponibles (amis, adversaires aléatoires…)

---

Les appels sont généralement faits dans les composants `QuizzManager.vue`, `DuelsManager.vue` ou les pages comme `Page1vs1Friend.vue` / `Page1vs1Random.vue`.
