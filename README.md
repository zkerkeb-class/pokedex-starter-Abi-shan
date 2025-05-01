Pokédex Fullstack – Projet Final ECE 2024
Ce projet est un Pokédex complet et interactif réalisé dans le cadre du cours Technologies Web à l’ECE, sous la direction de Zakaria Kerkeb. Il met en œuvre tout le cycle de développement d’une application web moderne, de l’authentification à des fonctionnalités avancées comme les favoris, un comparateur et un jeu interactif.

🧩 Objectif du Projet
Créer une application web fullstack avec React (frontend) et Node.js/Express (backend).

Permettre à un utilisateur de s’authentifier, naviguer dans un Pokédex, ajouter ses favoris, comparer des Pokémon, jouer à un mini-jeu, et plus encore.

Appliquer les bonnes pratiques : sécurisation des routes, gestion des états, design responsive, modularité du code.

🧪 Technologies Utilisées
Frontend :
React + Vite

React Router DOM

Context API pour la gestion du token d’authentification

CSS modules + Flex/Grid

localStorage pour la persistance du token

Filtres dynamiques + animations de jeu

Backend :
Node.js + Express

MongoDB + Mongoose

JSON Web Token (JWT)

Bcrypt pour le hachage des mots de passe

Architecture RESTful avec séparation des routes/controllers/models

🔐 Authentification JWT
L’utilisateur peut s’enregistrer ou se connecter via les pages dédiées.

Une fois connecté, un JWT est généré par le backend et envoyé au frontend.

Le token est stocké dans le localStorage et automatiquement envoyé avec chaque requête.

Les routes sensibles sont protégées côté backend via un middleware (authMiddleware.js).

Côté frontend, les routes sont protégées via un composant PrivateRoute.

⚙️ Fonctionnement des fonctionnalités principales
🧾 Pokédex
Affiche tous les 151 Pokémon.

Chaque carte montre : nom, type(s), image, HP, attaque, défense.

La pagination permet de naviguer facilement entre les pages.

Un champ de recherche + filtre par type permet de filtrer dynamiquement les résultats.

❤️ Favoris
Chaque carte a un bouton “Ajouter aux favoris”.

Les favoris sont enregistrés dans MongoDB, liés à l’utilisateur.

L’utilisateur peut consulter ses Pokémon favoris sur une page dédiée (/favorites).

Retirer un Pokémon se fait instantanément et met à jour l’interface.

🆚 Comparateur
Une page dédiée permet de sélectionner deux Pokémon.

Ils sont affichés côte à côte avec un affichage comparatif de leurs statistiques.

Permet de visualiser clairement les forces et faiblesses.

🎮 Mini-jeu : Qui est-ce ?
Un Pokémon mystère est affiché en ombre.

L’utilisateur a plusieurs choix pour deviner lequel c’est.

Le score s’incrémente à chaque bonne réponse.

Une interface ludique et animée ajoute du fun à l’expérience.

🧠 Architecture du Backend
bash
Copier
Modifier
pokedex-api-Abi-shan/
├── src/
│   ├── controllers/         # Gestion des actions (auth, favoris, pokémons)
│   ├── routes/              # Définition des routes API REST
│   ├── models/              # Schémas Mongoose (User, Pokemon)
│   ├── middleware/          # Auth middleware (vérification du token)
│   └── utils/               # Fonctions utilitaires (generateToken)
├── .env                     # Variables sensibles (Mongo URI, JWT)
└── server.js                # Point d'entrée du serveur Express
📁 Structure Frontend (React)
bash
Copier
Modifier
pokedex-starter-Abi-shan/
├── src/
│   ├── components/
│   │   ├── auth/            # Login & Register
│   │   ├── shared/          # Navbar, Loading, Error, PrivateRoute
│   │   └── pokemonCard/     # Affichage d’une carte Pokémon
│   ├── context/             # AuthContext (gestion du token globalement)
│   ├── screens/             # Pages : Home, Favorites, Compare, Play, Detail
│   ├── assets/              # Liste complète des Pokémon avec stats
│   ├── config/routes.jsx    # Définition des routes React Router
│   └── App.jsx / main.jsx   # App principale
🔐 Sécurité
Les mots de passe sont hachés avec Bcrypt.

Les routes sensibles du backend sont protégées via JWT.

Côté frontend, un utilisateur non authentifié est redirigé vers Login/Register.

Le token est automatiquement vérifié à chaque appel protégé.

📥 Installation & Lancement
Backend
bash
Copier
Modifier
cd pokedex-api-Abi-shan
npm install
npm run dev
Frontend
bash
Copier
Modifier
cd ../pokedex-starter-Abi-shan
npm install
npm run dev
👉 Accès via http://localhost:5173

⚙️ Variables .env (backend)
env
Copier
Modifier
PORT=3000
MONGO_URI=mongodb://localhost:27017/pokedex
JWT_SECRET=supersecret
📸 Démo Vidéo
📺 [Lien YouTube à insérer ici]
Montre : login/register → pokedex → favoris → comparateur → jeu interactif

📌 Résumé des Fonctionnalités Réalisées
Fonctionnalité	Réalisée ✅
Authentification	✅
Routes protégées	✅
Affichage Pokémon avec pagination	✅
Recherche + Filtres par type	✅
Favoris (add/remove)	✅
Comparateur de Pokémon	✅
Détail complet de chaque Pokémon	✅
Mini-jeu interactif	✅
Responsive design	✅
Gestion des erreurs & chargement	✅

👨‍🎓 Auteur
Nom : Abishan JAYADAS
