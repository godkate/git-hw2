//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація)

const firstLine = prompt('Enter your first name');
const secondLine = prompt('Enter your last name');
const thirdLine = prompt('Enter your city');
alert(`${firstLine} ${secondLine} from ${thirdLine}`);

//Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск

const num = 12345;
const line = num.toString().split('');
console.log(line.join(' '));