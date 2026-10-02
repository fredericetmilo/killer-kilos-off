KILLER DES KILOS — PODCAST EXPERIMENTAL — MISSION 23

Copie indépendante du projet fourni dans
Killer_des_Kilos_V2.7_PHOTOS_EXPERIMENTALE(1).zip.
Destinée à la validation de Christophe ; aucun déploiement réalisé.

LANCEMENT
Décompresser dans un nouveau dossier. index.html se trouve à la racine.
Ouvrir index.html dans un navigateur, ou depuis ce dossier lancer :
python3 -m http.server 8000
Sous Windows : py -m http.server 8000
Puis ouvrir http://localhost:8000/ ; arrêter avec Ctrl+C.
Tous les fichiers sont locaux, notamment le M4A ; aucun streaming externe.

MODIFICATIONS
index.html : insertion du seul bloc podcast après le Hero et avant Changer
 de regard ; ajout du chargement différé de js/podcast.js.
css/style.css : règles ajoutées, limitées au lecteur et à son bloc.
js/podcast.js : nouveau script autonome pour les commandes audio.
audio/pourquoi-votre-balance-vous-ment.m4a : copie exacte du fichier fourni.
README_PODCAST_EXPERIMENTAL.txt : ce compte rendu.
Les fichiers de configuration de l'éditeur présents dans le ZIP source ne sont
pas inclus : ils ne servent pas au site. Aucun fichier temporaire inclus.

FONCTIONNEMENT
Lecture/pause, progression, position réglable par clic/glissement ou au clavier,
temps écoulé, durée réelle chargée depuis les métadonnées, réglage du volume.
Durée mesurée du fichier AAC/M4A : 1386,695692 secondes, affichées 23:07.
Le libellé éditorial demandé « Podcast · 23 min » est conservé tel quel.
Pas de lecture automatique ; forme d'onde décorative entièrement statique.
Sur les appareils imposant le volume système, utiliser leurs boutons de volume.
En cas de format non pris en charge ou d'erreur, le lecteur natif et le lien de
 téléchargement sont disponibles. Sans JavaScript, lecteur natif et lien restent
visibles. Le téléchargement M4A permet l'écoute dans une application compatible.
Commandes avec noms accessibles, focus visible et barre utilisable au clavier.

CONTROLES EFFECTUES
- ZIP source intact, fichiers extraits sans modifier la référence.
- HTML final identique à la référence après retrait exact du bloc et du script
  ajoutés ; textes, ponctuation et structure existante conservés.
- CSS initial conservé intégralement, ajout uniquement des styles podcast.
- main.js, GSAP, ScrollTrigger, photographies, couverture, logo, polices et
  autres fichiers originaux conservés octet pour octet.
- Audio conservé octet pour octet ; format et durée lus avec ffprobe ; décodage
  complet du fichier par ffmpeg sans erreur.
- Syntaxe JavaScript contrôlée pour le nouveau script et les scripts existants.
- Ressources locales, chemins relatifs, ancres internes et identifiants uniques
  vérifiés ; absence de ressource manquante.
- Commandes testées dans une simulation JavaScript : lecture/pause, durée,
  progression, recherche et limites, volume, relecture après fin, format non
  reconnu, erreur de chargement et refus de lecture.
- Intégrité du ZIP final vérifiée.

LIMITES ET ESSAIS RESTANT A FAIRE
Le moteur Chromium du navigateur local est absent. Aucun test visuel du site,
aucune lecture audio réelle dans un navigateur et aucun essai sur téléphone
n'ont pu être réalisés. Les simulations ne remplacent pas ces tests.
Vérifier sur ordinateur et téléphone : son réel, pause/reprise, recherche,
volume, affichage 23:07, focus/clavier, absence de débordement à 320, 375, 390,
768, 1024 et 1366 px. Vérifier particulièrement la première ligne sur mobile.
Tester sans JavaScript et, si possible, le repli en cas d'audio inaccessible.
Contrôler le menu, la boussole, le sticky et les animations existantes : leur
code est inchangé mais leur fonctionnement réel reste à confirmer.
Le lecteur ajoute volontairement de la hauteur entre Hero et Changer de regard ;
aucune disposition interne de ces sections n'est modifiée.
Les autres README sont historiques : ce projet reste une expérience à valider.

Aucun changement du dépôt GitHub, aucune publication, aucune nouvelle animation.
