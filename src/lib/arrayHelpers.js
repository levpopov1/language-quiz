function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function randomSelection(array, quantity) {
  let collection = [];
  for (let index = 0; index < quantity; index++) {
    let item = array[Math.floor(Math.random() * array.length)];
    collection.push(item);
  }
  return collection;
}


export {
  shuffle, 
  randomSelection
}