/*const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}*/

/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key])
}
console.log(apartment);*/
//11
/*const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}*/
//12
/*function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (const key in object) {
  if (object.hasOwnProperty(key)){
    propCount += 1;
  }
}
  // Change code above this line
  return propCount;
}
console.log(countProps({ name: "Mango", age: 2 }));
//13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key])
}
  
//14
function countProps(object) {
  // Change code below this line
  let propCount = 0;
  propCount = Object.keys(object).length;

 

  return propCount;
  // Change code above this line
}

//15
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);*/

//16
//function countTotalSalary(salaries) {
  //let totalSalary = 0;
  // Change code below this line
 //for (const salary of Object.values(salaries)) {
  //  totalSalary += salary;
 // }
  // Change code above this line
 // return totalSalary;
//}
//console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//17
/*const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
 for (color of colors) {
  hexColors.push(color.hex)
  rgbColors.push(color.rgb)
}
console.log[hexColors];*/

//18
/*const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (productName === product.name)
    return product.price
  }
  return null
  
  // Change code above this line
}
console.log(product);*/
//19
/*const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const finalArray = []
  for (const product of products){
    const keys = Object.keys(product)
    if(keys.includes(propName)){
      finalArray.push(propName)
    }
  }
  return finalArray
  // Change code above this line
}*/

//19
/*const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
   const finalArray = []
   
  for (const product of products){
    const keys = Object.keys(product)
    if(keys.includes(propName)){
      finalArray.push(product[propName]);
    
    }
  }
  return finalArray
  
  
  
  // Change code above this line
}*/

//20
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
    let totalPrice = 0;
    for (const product of products) {
        if (productName === product.name) {
            return product.price * product.quantity
        }
    }
    return totalPrice;


  // Пиши код выше этой строки
    }

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Droid"));

//21
/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow} = highTemperatures;



// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);*/

//22
/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);*/
//23
/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;*/

//24
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  
  hexColors.push(hex);
  rgbColors.push(rgb);
}
console.log(hexColors);

//25
/*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
  tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
} = forecast;*/
