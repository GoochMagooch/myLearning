/*const shopping = [{'bread' : 3.50}, {'milk' : 2}, {'cheese' : 4}, 
{'hummus' : 2.25}, {'noodles' : 1}];

const myBudget = `The price of my grocery list is a total of
${shopping[0][1]}`;

console.log(shopping);
*/

const birds = ['Parrot', 'Falcon', 'Owl'];

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