/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    if (annee % 4 === 0 && !(annee % 100 === 0) || annee % 4 === 0 && annee % 100 === 0 && annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    if (jour > 31 || jour < 1) {
        return false;
    }
    if (mois > 12 || mois < 1) {
        return false;
    }
    if (annee < 0) {
        return false;
    }
    switch (mois) {
        case 2:
            if (jour === 29 && isBissextile(annee) === true) {
                return true;
            } else if (jour > 28){
                return false;
            } else {
                return true;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (jour > 30) {
                return false;
            } else {
                return true;
            }
            break;
        default:
            return true;
    }
    switch (mois) {
        case 1:
            mois = "Janvier";
            break;
        case 2:
            mois = "Février";
            break;
        case 3:
            mois = "Mars";
            break;
        case 4:
            mois = "Avril";
            break;
        case 5:
            mois = "Mai";
            break;
        case 6:
            mois = "Juin";
            break;
        case 7:
            mois = "Juillet";
            break;
        case 8:
            mois = "Aout";
            break;
        case 9:
            mois = "Septembre";
            break;
        case 10:
            mois = "Octobre";
            break;
        case 11:
            mois = "Novembre";
            break;
        case 12:
            mois = "Décembre";
            break;
    }
}

const jour = parseInt(prompt('Quel jour ?'));
const mois = parseInt(prompt('Quel mois ?'));
const annee = parseInt(prompt('Quelle année ?'));
let resultat;
console.log(isValid(jour, mois, annee));

if (isValid(jour, mois, annee) === true) {
    resultat = `Le ${jour} ${mois} ${annee} est une date valide`
} else {
    resultat = `Le ${jour} ${mois} ${annee} n est pas une date valide`
}
console.log(resultat);

// Demander à l'utilisateur de saisir une date


// Utilisation de la fonction isValid pour vérifier la date

