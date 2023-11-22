const randomize = document.querySelector('.randomize');
const customname = document.querySelector('#customname');
const story = document.querySelector('.story')

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }