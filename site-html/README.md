# Site Web VITRINE CONSULTING - Version HTML/CSS/JavaScript

Version statique du site web VITRINE CONSULTING développée en HTML5, CSS3 et JavaScript pur.

## 📁 Structure du Projet

```
site-html/
├── index.html                      # Page d'accueil
├── services.html                   # Page Services
├── projects.html                   # Page Projets
├── media-gallery.html              # Galerie Média
├── clients-and-partners.html       # Clients & Partenaires
├── contact.html                    # Page Contact
├── assets/
│   ├── css/
│   │   └── style.css              # Styles globaux
│   ├── js/
│   │   └── main.js               # JavaScript principal
│   ├── images/                    # Images du site
│   └── videos/                    # Vidéos (intro-video.mp4)
└── README.md
```

## 🚀 Fonctionnalités

### Pages Disponibles

1. **index.html** - Page d'accueil
   - Section vidéo intro avec contrôles
   - Hero section avec CTA
   - Métriques animées (compteurs)
   - Projets en vedette
   - Section mission
   - Logos clients

2. **services.html** - Services
   - 5 services détaillés avec images
   - Présentation alternée (gauche/droite)
   - Liste de fonctionnalités pour chaque service

3. **projects.html** - Projets
   - Filtres par catégorie (Tous, Média, Éducation, Corporate, etc.)
   - Grille de projets responsive
   - Statistiques par projet

4. **media-gallery.html** - Galerie Média
   - Filtres par type (Événements, Projets, Équipe, Coulisses)
   - Lightbox pour visualisation des images
   - Grille responsive

5. **clients-and-partners.html** - Clients & Partenaires
   - Grille de logos clients
   - Section témoignages

6. **contact.html** - Contact
   - Formulaire de contact avec validation
   - Informations de contact

### Fonctionnalités JavaScript

- **Header scroll effect** : Le header change d'apparence au scroll
- **Menu mobile** : Menu hamburger responsive
- **Contrôles vidéo** : Play/Pause sur la vidéo d'intro
- **Animations au scroll** : Les éléments apparaissent avec animation fade-in-up
- **Lightbox** : Visualisation d'images en plein écran
- **Filtres projets/galerie** : Filtrage dynamique avec animations
- **Compteurs animés** : Animation des métriques au scroll
- **Validation de formulaire** : Validation côté client
- **Smooth scroll** : Défilement fluide pour les ancres

## 🎨 Styles

Le site utilise :
- **Polices Google Fonts** : Playfair Display, Source Sans 3, Montserrat
- **Variables CSS** : Système de couleurs cohérent
- **Responsive Design** : Mobile-first, breakpoint à 768px
- **Animations CSS** : Transitions et keyframes

## 📱 Responsive

Le site est entièrement responsive avec :
- Menu mobile hamburger
- Grilles adaptatives
- Images responsives
- Typographie fluide (clamp)

## 🔧 Utilisation

1. Ouvrir `index.html` dans un navigateur web
2. Toutes les pages sont liées entre elles via la navigation
3. Aucune dépendance externe requise (sauf Google Fonts)

## 📝 Notes

- Les images utilisent des URLs externes (Unsplash, Rocket.new) pour les exemples
- La vidéo intro doit être placée dans `assets/videos/intro-video.mp4`
- Le logo doit être dans `assets/images/logo.JPG.jpeg`
- Le formulaire de contact nécessite un backend pour fonctionner (actuellement simulation)

## 🌐 Compatibilité

- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Support des fonctionnalités ES6+
- Fallback pour les navigateurs plus anciens

## 📄 Licence

© 2026 VITRINE CONSULTING. Tous droits réservés.
