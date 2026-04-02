# monCycle : Une application web progressive (PWA) dédiée au suivi du cycle menstruel. Alliant un design épuré à une confidentialité totale, elle permet de visualiser ses cycles, de calculer ses périodes de fertilité et de noter ses symptômes au quotidien. Entièrement locale, aucune donnée ne quitte votre téléphone.
# 🌸 monCycle - PWA de Suivi de Cycle Mensuel

![Licence](https://img.shields.io/badge/License-GPLv3-blue.svg)
> Une application web progressive (PWA) minimaliste, artistique et 100% privée.

## ✨ Présentation du Projet
**MonCycle** est une application conçue pour offrir un suivi de cycle serein et sécurisé. Contrairement aux applications classiques, elle repose sur un principe de **confidentialité totale** : aucune donnée ne quitte jamais votre appareil.

### 🌟 Fonctionnalités clés
- **Calendrier Intelligent** : Suivi des cycles passés et prévisions des périodes de règles et de fertilité.
- **Journal de Symptômes** : Notez vos ressentis au quotidien (humeur, douleurs, flux).
- **Privacy by Design** : Utilisation exclusive du `localStorage` du navigateur. Aucune base de données externe, aucune inscription requise.
- **Expérience PWA** : Installation sur l'écran d'accueil et fonctionnement **hors-ligne** grâce aux Service Workers.
- **Design Artistique** : Interface épurée inspirée du Line Art pour une utilisation discrète.

---

## 📱 Installation (iPhone 11 & iOS)
Puisque MonCycle est une **PWA**, elle s'installe sans passer par l'App Store :
1. Ouvrez l'URL de l'application dans **Safari**.
2. Appuyez sur l'icône **Partager** (le carré avec une flèche vers le haut).
3. Faites défiler les options et sélectionnez **"Sur l'écran d'accueil"**.
4. Validez : l'icône de l'application apparaît désormais sur votre bureau !

---

## 🛠️ Stack Technique
- **Frontend** : HTML5, CSS3 (Flexbox/Grid), JavaScript natif (ES6+).
- **PWA** : Web App Manifest & Service Workers pour la mise en cache.
- **Stockage** : Web Storage API (`localStorage`).
- **Licence** : GNU GPLv3 (Logiciel Libre).

---

## 🎓 Note du Développeur (Portfolio)
Ce projet a été réalisé dans le cadre de mon cursus d'**Étudiant en Développement Web**. 

### Défis relevés :
- **Logique Algorithmique** : Conception d'un moteur de calcul de dates dynamique pour les prévisions de cycles.
- **Architecture Mobile-First** : Optimisation de l'interface pour une utilisation fluide sur smartphone (testé sur iPhone 11).
- **Gestion du Offline** : Mise en place d'une stratégie de cache pour garantir l'accès aux données même sans connexion internet.
- **Éthique du Dev** : Choix délibéré d'une architecture sans serveur pour garantir la souveraineté des données des utilisatrices.

*Projet développé avec passion et avec l'appui de l'IA (Claude) pour l'optimisation des structures de données.*

---

## ⚖️ Licence
Ce projet est sous licence **GNU GPLv3**. Vous êtes libre de copier, modifier et distribuer ce logiciel, à condition que vos modifications restent également sous licence libre.
