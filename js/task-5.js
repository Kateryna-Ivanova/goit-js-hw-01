let country = prompt('Введіть назву країни:');
// Приводимо назву країни до нижнього регістру
country = country.toLowerCase();
// Змінна для зберігання вартості доставки
let cost;

switch (country) {
    case 'китай':
cost = 100;
        break;
        case 'чіли':
cost = 250;
        break;
    
        case 'австралія':
cost = 170;
        break;
    
        case 'індія':
cost = 80;
        break;
    
        case 'ямайка':
cost = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна')
         break;
};
// Якщо вартість доставки визначена, виводимо повідомлення про вартість
if(cost !== undefined) {
   console.log(`Доставка в ${country} будет стоить ${cost} кредитов`) 
} 


