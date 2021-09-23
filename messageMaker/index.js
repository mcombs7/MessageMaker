//Array of various words
const adjectives = ['green', 'squishy', 'yucky','yummy'];
const noun1 = ['blueberries', 'broccoli', 'chocolate', 'icecream'];
const noun2 = ['car', 'house', 'boat'];
const verbs = ['eat','destroy','burn'];
//Array of Functions
const functionArray = [madlib1, madlib2, madlib3];

//return a random value from an array
const returnRand = (array) => {
    return array[Math.floor(Math.random() * array.length)] 
  }

//use the random function chosen to create a story
function createStory(randFunction) {

    let storyAdjective = returnRand(adjectives);
    let storyNoun1 = returnRand(noun1);
    let storyNoun2 = returnRand(noun2);
    let storyVerb = returnRand(verbs);

    randFunction(storyNoun1,storyNoun2, storyAdjective, storyVerb);
}


function madlib1(noun1, noun2, adjective, verb) {
    let num = Math.floor(Math.random() * 10);
    console.log(`After hiding the ${adjective} ${noun1} in the ${noun2} for ${num} days, Charlie decided to ${verb} it.`);
}
function madlib2() {
    console.log('madlib2');
}
function madlib3() {
    console.log('madlib2');
}

let storyFunction = returnRand(functionArray);
createStory(storyFunction);