let myMap = new Map();
myMap.set('key', 'prop');
myMap.set(1, 'prop2');
myMap.set(true, 'prop3');

for (let keyProp of myMap){
  console.log(`Ключ - ${keyProp[0]}, Значение - ${keyProp[1]}`);
}
