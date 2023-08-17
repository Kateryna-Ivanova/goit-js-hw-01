const credits = 23580;
const pricePerDroid = 3000;
const userChoose = prompt('Скільки одиниць бажаєте ?');
const totalPrice = pricePerDroid * userChoose
if (userChoose === null) { console.log('Скасовано користувачем!') }
else
if (totalPrice > credits) { console.log('Недостатньо коштів на рахунку!') }
else {
    const balance = credits - totalPrice;
    console.log(`Ви купили ${userChoose} дроїдів, на рахунку залишилося ${balance}  кредитов.`)
}