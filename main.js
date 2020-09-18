// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]


// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

//Step 1 
function validateCred(array) {
    const newArr = array.slice()
    // exclure le dernier chiffre de l'array
    const lastElement = newArr.pop()
    // on inverse l'array
    newArr.reverse()
    // multiplier les elements aux index pairs par 2
    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 === 0) {
            let element = newArr[i] * 2
            // si element > 9 on enleve 9
            if (element > 9) element -= 9
            newArr[i] = element
        }
    }
    // on fait la somme de tous les nombres + le dernier element exclu
    let totalSum = newArr.reduce((sum, elem) => {
        sum += elem
        return sum
    }, 0)

    // on fait la somme de tous les nombres + le dernier element exclu
    totalSum += lastElement
    // si le rest de cette somme = 0 alors le numero est valide
    return totalSum % 10 === 0 ? true : false
}

validateCred(valid1)

// Step 2
const findInvalidCards = (nestArr) => {
    const invalidNum = [];
    for (let i = 0; nestArr.length > i; i++) {
        if (!validateCred(nestArr[i])) {
            invalidNum.push(nestArr[i]);
        }
    }
    return invalidNum;
}

const invalidCards = findInvalidCards(batch);

//Step 3
function idInvalidCardCompanies(arr) {
    const idsInvalidCardCompanies = []

    // arr est une liste de carte de credit 
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i][0]) {
            case 3:
                if (!idsInvalidCardCompanies.find(elem => elem === 'Amex')) {
                    idsInvalidCardCompanies.push('Amex');
                }
                break;
            case 4:
                if (!idsInvalidCardCompanies.find(elem => elem === 'Visa')) {
                    idsInvalidCardCompanies.push('Visa');
                }
                break;
            case 5:
                if (!idsInvalidCardCompanies.find(elem => elem === 'Mastercard')) {
                    idsInvalidCardCompanies.push('Mastercard');
                }
                break;
            case 6:
                if (!idsInvalidCardCompanies.find(elem => elem === 'Discover')) {
                    idsInvalidCardCompanies.push('Discover');
                }
                break;
            default:
                if (!idsInvalidCardCompanies.find(elem => elem === 'Company not found')) {
                    idsInvalidCardCompanies.push('Company not found');
                }
                break;
        }
    }
    return idsInvalidCardCompanies;
}

idInvalidCardCompanies(batch);

//Step 7 to validate credit card as a string
const stringToInt = (inputTest) => {
    let stringToInt = parseInt(inputTest); 
    let array = stringToInt.toString().split("");
    array = array.map(input => parseInt(input));
    console.log(array);
    return validateCred(array);

}
// Test with dummy credit card
console.log(stringToInt("9720994252055560"));