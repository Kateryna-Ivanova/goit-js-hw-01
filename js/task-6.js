let total = 0;
let input = prompt('Введите число');
// parseFloat переводить рядокове число в просте число, а рядок в якому букви у NaN
const number = parseFloat(input);
if (number = NaN) {
    alert('Було введено не число, спробуйте ще раз')
} else if (input === null) { break } else {
    total = number + total
};while (true);
