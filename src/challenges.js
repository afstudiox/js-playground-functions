// Desafio 1
function compareTrue(parameter1,parameter2) {
  return parameter1 && parameter2;
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(stringsArray) {
  return [stringsArray.pop(),  stringsArray.shift()].join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties*1
}

// Desafio 6
function highestCount(numbers) {
  let highest = Math.max(...numbers);
  let occurrences = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === highest){
      occurrences += 1;
    }
  }
  return occurrences;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dcat1 = Math.abs(cat1 - mouse);
  let dcat2 = Math.abs(cat2 - mouse);

  return dcat1 === dcat2 ? 'os gatos trombam e o rato foge' : dcat1 < dcat2 ?  'cat1' : 'cat2'
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzz = [];
  for (let i = 0; i < numbers.length; i++) {
    fizzBuzz.push(
      numbers[i] % 3 === 0 && numbers[i] % 5 === 0 ? 'fizzBuzz' :
      numbers[i] % 3 === 0 ? 'fizz' : 
      numbers[i] % 5 === 0 ? 'buzz' : 'bug!'
    );
  }
  return fizzBuzz;
}


// Desafio 9
function encode(str) {
  const vowelsMap = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  };

  return str.replace(/[aeiou]/g, (match) => {
    return vowelsMap[match];
  });
}


function decode(str) {
  const vowelsMapReverse = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
  };

  return str.replace(/[1-5]/g, (match) => {
    return vowelsMapReverse[match];
  });

}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
