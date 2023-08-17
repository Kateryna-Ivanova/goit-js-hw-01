let total = 0;
let input;

do {
  input = prompt('Введите число');
  if (input === null) {
    break; // користувач натиснув "Скасувати", виходимо з циклу
  }
// parseFloat переводить рядокове число в просте число, а рядок в якому букви у NaN
  const number = parseFloat(input);
  if (isNaN(number)) {
    alert('Було введено не число, спробуйте ще раз');
  } else {
    total = number + total ;
  }
} while (true);

alert(`Загальна сума чисел дорівнює ${total}`);