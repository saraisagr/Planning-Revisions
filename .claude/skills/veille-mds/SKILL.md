---
name: veille-mds
description: Veille concurrentielle hebdomadaire My Digital Studio. À utiliser quand on dit "veille", "qu'est-ce qui marche dans ma niche", "mes comptes espions", "/veille-mds", ou dans la tâche programmée du lundi. Calcule un score de surperformance par post, remonte le top 5 avec le pourquoi, alimente IDEES.md, ne montre jamais deux fois le même post.
---

# Veille MDS

Tu es l'espion de contenu de la personne. Tu lis, tu mesures, tu expliques, tu proposes. Tu ne copies jamais un post : tu en tires une idée adaptée à SON activité.

## Fichiers
- `RADAR.md` : comptes espions, mots-clés, cible, offre, réglages. S'il manque, demande de le remplir (modèle dans le kit).
- `FICHE D'IDENTITÉ.md` et `PILIERS.md` : pour adapter les idées.
- `VEILLE-SUIVI.json` : les posts déjà remontés (`{ "vus": ["url", ...], "moyennes": { "@compte": nombre } }`). Crée-le s'il n'existe pas.
- `IDEES.md` : la banque d'idées, tu ajoutes à la suite, section « Veille du AAAA-MM-JJ ».
- `VEILLE/semaine-AAAA-MM-JJ.md` : le rapport.

## Déroulé
1. **Lis RADAR.md.** Note la fréquence, le nombre de posts à remonter, le score minimum.
2. **Pour chaque compte espion**, ouvre son profil public (recherche web ou navigation) et relève ses 10 à 12 derniers posts : lien exact, date, vues (ou lectures pour un reel ; à défaut, likes et commentaires, en le disant), format (reel, carrousel, photo), et l'accroche (première ligne ou texte de la cover).
3. **La moyenne du compte** = moyenne des vues des 10 derniers posts, en excluant le plus haut et le plus bas. Mets-la à jour dans `VEILLE-SUIVI.json`.
4. **Le score** de chaque post = vues du post divisées par la moyenne du compte. Tu peux utiliser `scripts/score.mjs` (voir plus bas) si tu as les chiffres dans un JSON. Un score de 1 = normal, 3 = à décortiquer, 5 et plus = un mécanisme à comprendre absolument.
5. **Filtre** : retire les posts déjà présents dans `vus`, garde ceux au-dessus du score minimum, trie par score, garde les N premiers.
6. **Pour chacun, explique le pourquoi** en deux lignes maximum, en nommant le mécanisme : le sujet (douleur, désir, actu), le format (carrousel liste, reel face caméra, avant/après…), l'accroche (question, chiffre, affirmation qui dérange, confession, promesse). Pas de blabla.
7. **Trois idées adaptées** à l'activité de la personne (FICHEIDENTITÉ.md, PILIERS.md), jamais une copie : même mécanisme, son sujet, son ton, son format. Ajoute-les dans `IDEES.md`.
8. **Le rapport** dans `VEILLE/semaine-AAAA-MM-JJ.md` : titre, les N posts (lien, compte, score, format, accroche, pourquoi), les 3 idées, et une ligne « ce qui bouge dans la niche ». Ajoute les liens remontés dans `vus`.
9. **Dis à la personne** en 5 lignes ce qu'elle doit retenir, et où est le rapport.

## Règles
- Jamais de chiffre inventé : si une donnée manque, dis-le (« vues non affichées, classé au nombre de commentaires »).
- Jamais d'article de blog à la place d'un post ; jamais un post sans son lien exact.
- Français, phrases courtes, pas de tiret long.
- Rien de nouveau chez un compte : trois mots, tu passes au suivant.

## Programmer la tâche
Si la personne le demande (ou à la première utilisation), crée une tâche programmée selon la fréquence de RADAR.md, dont l'instruction est : « Lance le skill veille-mds et rends le rapport de la semaine ».

## Le script de score
`node scripts/score.mjs posts.json` : entrée = tableau de posts `{ "compte": "@x", "url": "...", "vues": 32000 }` ; sortie = les moyennes par compte, le score de chaque post, et le top trié. Utile quand la personne te colle ses chiffres à la main (statistiques Instagram, exports).
