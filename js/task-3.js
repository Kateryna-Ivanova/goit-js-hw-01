const userParol = prompt('Введіть пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
if (userParol === null) {
  console.log('Отменено пользователем!');
} if(userParol === ADMIN_PASSWORD){message = 'Добро пожаловать!'}
else { message = 'Доступ запрещен, неверный пароль!' };
alert(message);
