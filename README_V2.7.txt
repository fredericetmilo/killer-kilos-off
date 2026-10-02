KILLER DES KILOS — V2.7 PHOTOS EXPERIMENTALE

Version indépendante, destinée uniquement à une présentation et à une vidéo locales.
Ne pas publier sans la validation de Christophe. La V2.6 fournie reste intacte.
Base exclusive : Killer_des_Kilos_V2.6_GITHUB_PAGES(1).zip transmis pour cette mission.

MODIFICATIONS
- Section Changer de regard : photo du one-pot pasta sous l'encadré bleu dans
  la colonne gauche, largeur 70 %, sans légende, filtre, bordure ni ombre.
- Bloc label : photo de Christophe et de l'éducatrice sous le logo conservé.
  Recadrage carré retirant le médaillon, conservant les visages et la poignée
  de main. Le bord supérieur coupe une petite partie du haut de la coiffure
  de Christophe afin d'exclure entièrement le médaillon. Aucun visage retouché.
  Largeur inférieure au logo, affichage proportionnel avec coins arrondis.
- JPEG optimisés pour le Web, sans retouche ni modification des couleurs.

FICHIERS
Modifiés : index.html (deux insertions ciblées), css/style.css (ajout de règles
limitées aux nouvelles photos et à leur colonne).
Ajoutés : images/one-pot-pasta.jpg, images/christophe-educatrice.jpg,
README_V2.7.txt. Le README_GITHUB_PAGES.txt est conservé comme documentation
historique de la base, pas comme instruction de publier cette expérience.
Aucun JavaScript, autre ressource ou style existant modifié.

UTILISATION LOCALE
Décompresser dans un nouveau dossier, sans remplacer la V2.6.
Ouvrir index.html directement, ou lancer depuis ce dossier :
python3 -m http.server 8000
Sous Windows : py -m http.server 8000
Puis ouvrir http://localhost:8000/ ; arrêter avec Ctrl+C.

VERIFICATIONS
ZIP source et ZIP final : contrôle d'intégrité réussi.
Tous les fichiers de la base sont conservés. Comparaison exacte du HTML après
retrait des deux insertions : identique à la base, corrections typographiques
comprises. Textes, ponctuation, ancres et liens inchangés.
CSS initial conservé intégralement ; JavaScript, GSAP, ScrollTrigger, polices,
logo et autres visuels identiques octet pour octet. Syntaxe des scripts vérifiée.
Chemins relatifs et ancres internes vérifiés ; photos décodées et dimensions
intrinsèques vérifiées. Cadrage photographique inspecté visuellement.

LIMITES
Le navigateur local disponible ne dispose pas de son moteur Chromium.
Les contrôles visuels du site sur ordinateur, tablette et mobile, les interactions
réelles de la boussole et du menu, les animations et le sticky n'ont donc pas pu
être testés dans cette livraison. Leur code est inchangé ; cela ne constitue pas
un test fonctionnel ou visuel réussi. Vérifier notamment l'équilibre des deux
colonnes et l'absence de débordement à 320, 375, 390, 768, 1024 et 1366 px,
puis sur un véritable téléphone avant l'enregistrement de la vidéo.

Aucun déploiement ni accès en écriture à GitHub. Aucun élément de la V2.4 intégré.
