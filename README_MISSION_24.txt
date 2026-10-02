MISSION 24 — ANIMATION PODCAST ET LIEN ACHAT

Copie indépendante du ZIP fourni :
Killer_des_Kilos_V2.7_PODCAST_EXPERIMENTAL(1).zip.
Source et dépôt GitHub non modifiés. Aucun déploiement.

Fichiers modifiés : index.html, css/style.css, js/podcast.js.
Fichier ajouté : README_MISSION_24.txt.
Tous les autres fichiers, y compris audio, images, polices, main.js et bibliothèques,
sont conservés octet pour octet.

Animation : le tracé SVG existant est réparti en 14 chemins gardant exactement
les mêmes segments et positions au repos. Variation de hauteur légère en CSS,
avec décalages entre barres. La classe podcast-is-playing est appliquée seulement
sur playing, et retirée en pause, fin, attente, recherche ou erreur. Le fonctionnement
et les commandes du lecteur ne sont pas modifiés. Sans JavaScript ou lorsque
prefers-reduced-motion demande une réduction, la forme d'onde reste statique.

Achat : seul le CTA « Acheter le livre » (id buy-link) dans la section Livre utilise
https://www.amazon.fr/dp/B0HJPFDDTV avec target="_blank" et rel="noopener noreferrer".
« Découvrir le livre » dans l'en-tête, le Hero et la carte finale conserve #livre :
son intention de découverte ne justifie pas une redirection directe vers l'achat.
Le message provisoire dans #contact-livre reste intact conformément à l'interdiction
de modifier les textes ; le bouton d'achat n'y renvoie plus.
Tous les autres liens et ancres sont inchangés.

Contrôles : syntaxe JavaScript ; simulations de lecture/pause/reprise/fin,
attente et erreurs ; progression, recherche, volume et repli ; comparaison
exacte des textes et ponctuation ; attributs Amazon et conservation des autres
liens ; présence des ressources ; conservation des autres fichiers ; intégrité ZIP.
CSS : animation déclarée uniquement pour prefers-reduced-motion:no-preference.

Limites : moteur Chromium absent. Aucun contrôle visuel de cette livraison dans
un navigateur, aucune lecture audio réelle, aucun essai système reduced-motion
et aucun test sur téléphone. L'ouverture réelle de la page Amazon n'a pas été
testée. Les simulations et inspections CSS ne constituent pas des tests visuels.

Décompresser TOUT le ZIP dans un nouveau dossier, puis ouvrir index.html.
Ne pas ouvrir index.html directement depuis l'archive.
Option serveur : python3 -m http.server 8000 (Windows : py -m http.server 8000),
puis http://localhost:8000/. Arrêt avec Ctrl+C.
Tester Play/pause/reprise/fin, recherche, volume, réduction des animations et
responsive dans votre navigateur avant validation.
Les autres README sont historiques et décrivent les missions antérieures.
