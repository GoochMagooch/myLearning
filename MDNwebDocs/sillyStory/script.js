const randomize = document.querySelector('.randomize');
const customname = document.querySelector('#customname');
const story = document.querySelector('.story');
const storyText = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${xItem} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;
const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const newStory = storyText;
const xItem = array[random];
const yItem = array[random];
const zItem = array[random];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {

    if(customName.value !== '') {
      const name = customName.value;
      textContent = name;
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300 / 14) + 'centigrade';
      const temperature =  Math.round((94 -32) * 5/9) + 'stone';
      textContent = '94 fahrenheit';
      textContent = '300 pounds';
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }

