/*****************************
* 020 - Fonctions
*/

// 1. Fonction avec un paramètre et un return

/*
1. Déclarez la fonction calculateAge prenant le paramètre birthYear.
2. À l'intérieur de la fonction, calculez l'âge de la personne en soustrayant birthYear de l'année courante.
3. Utilisez un return pour renvoyer l'âge calculé.
*/
const calculateAge = (birthYear) => {
    let actualYear = new Date();
    resultat = actualYear.getFullYear() - birthYear;
    return resultat;
}
const johnBirthYear = 1990;
const mikeBirthYear = 1948;
const janeBirthYear = 1969;

const ageJohn = calculateAge(johnBirthYear);
const ageMike = calculateAge(mikeBirthYear);
const ageJane = calculateAge(janeBirthYear);

console.log(`John a ${ageJohn}`);
console.log(`Mike a ${ageMike}`);
console.log(`Jane a ${ageJane}`);

/*
Utilisez la fonction calculateAge que vous venez de créer pour calculer
	- l'âge de John (né en 1990)
	- l'âge de Mike (né en 1948)
	- l'âge de Jane (née en 1969)
4. Affichez ces âges dans la console.
*/


// 2. Fonction avec deux paramètres et un return

/*
1. Déclarez la fonction giveYearsUntilRetirement prenant les paramètres
	- year (pour l'année de naissance de la personne)
	- firstName (pour le prénom de la personne)
2. À l'intérieur de la fonction, calculez l'âge de la personne en utilisant la fonction calculateAge que vous venez de créer.
3. Calculez le nombre d'années qui restent jusqu'à la pension (65 ans) et stockez-le dans une variable retirement.
4. Si ce nombre est positif, affichez "… prendra sa pension dans … ans",
	 sinon affichez "… est déjà pensionné(e)".
5. Utilisez ensuite cette fonction pour calculer dans combien d'années seront pensionnés
	- John (né en 1990)
	- Mike (né en 1948)
	- Jane (née en 1969)
*/
function giveYearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} prendra sa retraite dans ${retirement} ans`;
    } else {
        return `${firstName} est déjà retraité`;
    }
}
const name = "Jane";
console.log(giveYearsUntilRetirement(1969, name));


