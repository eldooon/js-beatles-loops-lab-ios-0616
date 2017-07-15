function theBeatlesPlay (members, instruments) {

  var array = []

  for (var i = 0; i < members.length; i++ ) {

    array.push(`${members[i]} plays ${instruments[i]}`)

  }

  return array
}

function johnLennonFacts (facts) {

  var array = []

  for (var i = 0; i < facts.length; i++) {

    const newString = facts[i] + "!!!"
    array.push(newString)

  }

  return array
}

function iLoveTheBeatles (love) {

  var array = []
  do {

    array.push("I love the Beatles!")
    love++
  } while (love < 15)

  return array
}
