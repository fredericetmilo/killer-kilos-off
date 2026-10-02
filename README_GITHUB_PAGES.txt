KILLER DES KILOS — V2.6 — MAQUETTE POUR GITHUB PAGES

Cette version est destinée à la présentation de la maquette à Christophe.
Elle n'est pas une validation du lancement officiel. Aucun déploiement n'a été réalisé.
La directive noindex, nofollow est temporaire : elle ne protège pas l'accès au site.
Le site publié restera accessible publiquement et cette directive ne garantit pas
son absence dans tous les moteurs de recherche.

1. PUBLICATION SUR GITHUB PAGES

Décompresser le ZIP. index.html doit rester à la racine, à côté de css/, js/,
images/ et fonts/. Ne pas ajouter de dossier parent.

Créer un dépôt GitHub, par exemple killer-des-kilos-maquette. Pour GitHub Free,
utiliser un dépôt public et ne pas y placer de données confidentielles.
Téléverser tout le contenu décompressé dans la branche main, puis valider le commit.
Conserver exactement les noms des fichiers, leurs majuscules et leurs dossiers.

Dans le dépôt :
- Settings > Pages.
- Build and deployment > Source : Deploy from a branch.
- Branch : main.
- Folder : /(root).
- Save.

Attendre que le workflow de déploiement Pages soit terminé avec succès dans Actions.
Revenir dans Settings > Pages, puis utiliser Visit site.
Adresse attendue : https://utilisateur.github.io/nom-du-depot/
Aucune compilation locale, aucun serveur applicatif et aucun CDN ne sont requis.
Ne pas configurer de domaine personnalisé pour cette présentation temporaire.

Documentation officielle :
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

2. ESSAI LOCAL FACULTATIF

Depuis le dossier contenant index.html, lancer :
python3 -m http.server 8000
Sous Windows, si nécessaire : py -m http.server 8000
Ouvrir http://localhost:8000/ ; arrêter le serveur avec Ctrl+C.

3. VERIFICATIONS APRES PUBLICATION

- Vérifier que le document et toutes les images, polices, feuilles CSS et scripts
  se chargent sans erreur 404, notamment depuis l'URL avec le nom du dépôt.
- Vérifier la console du navigateur : absence d'erreurs JavaScript.
- Tester les ancres, les CTA et le menu mobile : ouverture, fermeture, touche
  Échap, clic extérieur, navigation au clavier et focus visible.
- Sur ordinateur, tester les quatre piliers et leurs descriptions.
- Sur mobile, vérifier que les quatre cartes restent statiques et que le panneau
  descriptif inférieur est masqué.
- Tester les animations au chargement et au défilement, puis le réglage système
  de réduction des animations. Vérifier également le rendu sans JavaScript.
- Vérifier le sticky de la couverture sur ordinateur, y compris dans une fenêtre
  peu haute ; sur mobile, contrôler son affichage normal.
- Vérifier les largeurs 320, 375, 390, 768, 1024 et 1366 px, l'absence de débordement
  horizontal et le rendu sur un véritable téléphone Android et, si possible, iOS.
- L'adaptation intermédiaire de la boussole reste un point déjà prévu pour une
  évolution ultérieure ; elle n'a pas été modifiée ici.
- Tester le bouton By Coréo : ouverture dans un nouvel onglet au début de
  « Nos structures partenaires en France » :
  https://bycoreo.fr/#card-txlvtbt049drc4s
- Vérifier le lien d'achat provisoire et les autres liens externes.

4. CONTROLES EFFECTUES POUR CETTE LIVRAISON

Contrôle d'intégrité du ZIP, présence et résolution des ressources relatives,
correspondance exacte des noms de fichiers, ancres internes, ordre des scripts
locaux GSAP puis ScrollTrigger puis main.js, et syntaxe JavaScript.
Les textes et tous les fichiers fonctionnels de la dernière V2.6 sont conservés :
seule la directive robots a été ajoutée à index.html, avec ce README.
Les dernières corrections CSS et JavaScript validées sont incluses.
Aucun fichier ni aucune fonctionnalité de l'annuaire géographique V2.4 n'est inclus.

Les contrôles visuels de cette livraison dans un navigateur local et sur téléphone
n'ont pas pu être réalisés. Le sticky réel, les animations rendues et le responsive
restent donc à vérifier visuellement après publication. Les vérifications de code
et les simulations d'interactions ne remplacent pas ces essais.

5. ELEMENTS PROVISOIRES AVANT LE LANCEMENT OFFICIEL

Finaliser la couverture officielle, le monogramme provisoire et le lien d'achat.
Confirmer les conditions de communication relatives au label et à son statut pilote.
Valider les droits de diffusion des contenus et visuels ainsi que les mentions
légales et la confidentialité adaptées à la publication publique. GitHub Pages
peut traiter les adresses IP pour la sécurité de son service ; l'absence de collecte
par le code de la maquette ne dispense pas de vérifier les conditions de l'hébergeur.
Effectuer la revue visuelle et les essais sur téléphone avant de considérer la
maquette comme validée pour une diffusion plus large.

6. RETRAIT ULTERIEUR DU NOINDEX

Uniquement au moment du lancement officiel validé, supprimer de <head> dans
index.html cette ligne exacte :
<meta name="robots" content="noindex, nofollow">

Valider et publier le nouveau commit. Attendre le déploiement, puis vérifier dans
le code source de la page publique que cette directive n'est plus présente.
Son retrait ne garantit pas une indexation immédiate. Préparer le référencement
et le domaine officiel séparément.
