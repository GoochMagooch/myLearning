/*const shopping = [{'bread' : 3.50}, {'milk' : 2}, {'cheese' : 4}, 
{'hummus' : 2.25}, {'noodles' : 1}];

const myBudget = `The price of my grocery list is a total of
${shopping[0][1]}`;

console.log(shopping);
*/

/*const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
    console.log(bird);
}

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(',');
console.log(cities);

console.log(cities.length);
console.log(cities[1]);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
const dogNamesUpdated = dogNames.join(', ');
console.log(dogNamesUpdated);
console.log(dogNamesUpdated.length);
*/

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';
const products = [{Underpants:6.99}, {Socks:5.99}, {T-shirt:14.99}, 
{Trousers:31.99}, {Shoes:23.99}];

// number 2
const (for product of products) {
	console.log(product);
}
  // number 3
products.split(':');
const (for product of products) {
    +[1];
}
  // number 4
  
const (for product of products) {
    products.total[1];
}

  // number 5
  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

// number 6

totalBox.textContent = 'Total: $' + total.toFixed(2);