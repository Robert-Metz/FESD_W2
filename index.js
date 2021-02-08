
//boolean
var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = true;
//non boolean
var costOfMilk = 2.50;
var moneyInWallet = 5.00;
var thirstLevel = 8;
//variables depending on the uppper variables
var shouldBuyIceCream = hasMoneyInPocket && isHotOutside;
var willGoSwimming = isHotOutside && !isWeekday;
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= (2 * costOfMilk);

console.log("Is it hot today? : " + isHotOutside);
console.log("Is it a weekday? : " + isWeekday);
console.log("Do I have money? : " + hasMoneyInPocket);
console.log("What is the cost of milk? : " + costOfMilk);
console.log("How much money do I have in my wallet? : " + moneyInWallet);
console.log("What is my thirst level? : " + thirstLevel);

console.log("Should I buy ice cream? : " + shouldBuyIceCream);
console.log("Should I go swimming? : " + willGoSwimming);
console.log("Is today a good day? : " + isAGoodDay);
console.log("Should I buy milk? : " + willBuyMilk);

