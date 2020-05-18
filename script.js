//Picks random person from list and prints in console
var people = ['friend', 'mom', 'dad', ''];
var person = people[Math.floor(Math.random() * people.length)];
console.log(person)

//Picks random action from list and prints in console
var actions = ['jumping', 'catching', 'sleeping'];
var action = actions[Math.floor(Math.random() * actions.length)];
console.log(action);

//Picks 
var materials = ['straw', 'bolt', 'foam roller'];
var material = materials[Math.floor(Math.random() * materials.length)];
console.log(material);

console.log("My " + person + " has trouble " + action + ". I'm going to help them with " + material)

function printSentence(sentence) {
    var placeholder = document.getElementById('output');
    placeholder.innerHTML = sentence;
}

var button = document.getElementById('button');
  
  button.onclick = function() {
    printSentence("My " + person + " has trouble " + action + ". I'm going to help them with " + material)

};
