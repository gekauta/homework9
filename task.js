let a = 3;
let b= 9;
a==0 ? console.log('Вверно'): console.log('Неверно');
(a>0) ? console.log('Вверно'): console.log('Неверно');
a<0 ? console.log('Вверно'): console.log('Неверно');
a>=0 ? console.log('Вверно'): console.log('Неверно');
a<=0 ? console.log('Вверно'): console.log('Неверно');
a!=0 ? console.log('Вверно'): console.log('Неверно');
a=='test' ? console.log('Вверно'): console.log('Неверно');
a===1  ? a>2 && a<11 || b>=6 && b<14 ? console.log('Вверно'): console.log('Неверно');
a>0 || a==2 ? a+=7 : a/=10; console.log(a);
a<=1 && b>=3 ? console.log (a+b) : console.log(a-b);
a>2 && a<11 || b>=6 && b<14 ? console.log('Вверно'): console.log('Неверно');

let num="2";
let result;
switch (num){
    case '1':
        result='зима';
        break;
    case '2':
        result='весна';
        break;
    case '3':
        result='лето';
        break;
    case '4':
        result='осень';
        break;
};
console.log(result);