# Charte graphique — Cocon Azur

## Ambiance
Premium et affirmée, réchauffée par une touche de bleu azur qui inspire confiance et ambition. (Mise à jour du ton le 12 septembre 2026, voir `BRIEF-LID.md`.)

## Couleurs

| Rôle | Couleur | Code hexadécimal |
|---|---|---|
| Principale | Marron chaud | `#8C5B42` |
| Fond | Beige | `#F5EFE4` |
| Accent | Bleu azur | `#2E86AB` |

## Typographies

- **Titres :** [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif expressive)
- **Texte courant :** [Work Sans](https://fonts.google.com/specimen/Work+Sans)

### Import Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 { font-family: 'Fraunces', serif; }
body, p, a, button { font-family: 'Work Sans', sans-serif; }
```

## Influenceuse IA (visage de marque)

Persona générée par IA, cheveux bruns longs, style vestimentaire beige/taupe cohérent avec la charte, tons neutres. Sert de photo de profil et de visage dans les contenus.

Fichiers sources : `assets/persona/` (8 portraits, plusieurs angles). Photo de profil recommandée : `assets/persona/persona-03-face.png` (regard caméra, cadrage centré).

⚠️ Voir `AUDIT.md` pour le point de vigilance sur la cohérence avec l'authenticité : la voix et les histoires racontées doivent rester réelles même si le visage est généré.

## Logo

Monogramme "L" (marron #8C5B42) surmonté d'une feuille en bleu azur (#2E86AB), encerclé d'un contour fin marron. Format carré, fond blanc/uni, sans slogan.

Rôle secondaire depuis l'arrivée de la persona IA : couvertures de stories à la une, watermark, éléments de reconnaissance de marque sur les visuels — plus utilisé comme photo de profil principale.

Fichier source : `assets/logo.jpg`

### Déclinaisons

| Version | Fichier |
|---|---|
| Carrée, fond beige (par défaut) | `assets/logo-carre-beige.png` |
| Ronde, fond beige (réseaux sociaux) | `assets/logo-rond-beige.png` |
| Fond transparent | `assets/logo-fond-transparent.png` |
| Fond marron `#8C5B42` (monogramme en beige) | `assets/logo-fond-marron.png` |
| Fond bleu azur `#2E86AB` (monogramme en beige) | `assets/logo-fond-azur.png` |

## Usage

- Fond principal des pages : `#F5EFE4`
- Titres et éléments forts : `#8C5B42`
- Boutons, liens, touches d'accent : `#2E86AB`

---

*Ce fichier sert de référence de cohérence visuelle pour tout ce qui est créé pour ce projet (couleurs, polices, ton visuel). À relire avant toute nouvelle création.*
