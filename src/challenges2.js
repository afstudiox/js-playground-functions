// Desafio 10
function techList(techList,name) {
  if (!techList || techList.length === 0) {
    return 'Vazio!';
  }

  let myTechs = [];

  techList.sort();

  for (let i = 0; i < techList.length; i++) {
    myTechs.push({
      tech: techList[i],
      name: name
    })
  }
  return myTechs;
}

// Desafio 11
function generatePhoneNumber(numbers) {

    function checkRepeat(numbers) {
    let numberCount = {};

    for (let num of numbers) {
      if (numberCount[num]) {
        numberCount[num]++;
      } else {
        numberCount[num] = 1;
      }

      if (numberCount[num] >= 3) {
        return true;
      }
    }
    return false;
  }

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (checkRepeat(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let formattedPhoneNumber = `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7).join('')}`;

  return formattedPhoneNumber;
  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ( 
    lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) &&
    lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) &&
    lineC < lineA + lineB && lineA > Math.abs(lineA - lineB)
  );
}

// Desafio 13
function hydrate(drinks) {
  let sum = 0;
  let totalDrinks = drinks.match(/\d+/g);

  for (let i=0; i < totalDrinks.length; i++) {
    sum += parseInt(totalDrinks[i]);
  }

  return sum === 1 ? `${sum} copo de água`: `${sum} copos de água`

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
