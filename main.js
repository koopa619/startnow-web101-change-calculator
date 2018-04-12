// Write your JavaScript here


function calculateChange() {
    
    var amountDue = parseFloat(document.getElementById("amount-due").value);
    var amountReceived = parseFloat(document.getElementById("amount-received").value);
    var amountChange = (amountReceived - amountDue).toFixed(2);



    var dollars = (Math.floor(amountChange));
    document.getElementById("paper").value = dollars;
    var remainder1 = (amountChange - dollars).toFixed(2);
   
    var quarters =(remainder1 / 0.25).toFixed(2);
    var numQuarters = (Math.floor(quarters));
    
    document.getElementById("george").value = numQuarters;

    var quartValue = 0.25 * numQuarters;
    var dimes = remainder1 - quartValue;
    var numDimes = (dimes / 0.10).toFixed(2);
    var finalDimes = (Math.floor(numDimes));
    document.getElementById("franklin").value = finalDimes;

    var dimeValue = 0.10 * finalDimes;
    var nickels = remainder1 - (dimeValue + quartValue);
    var numNickels = (nickels / 0.05).toFixed(2);
    var finalNickels = (Math.floor(numNickels));
    document.getElementById("thomas").value = finalNickels;

    var nickelValue = 0.05 * finalNickels;
    var pennies = remainder1 - (nickelValue + dimeValue + quartValue);
    numPennies = (pennies / 0.01).toFixed(2);
    var finalPennies = (Math.floor(numPennies));
    document.getElementById("abraham").value = finalPennies;

}

document.getElementById("calculate-change").addEventListener('click', calculateChange);
