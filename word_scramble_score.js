const rateScrambled = (scrambled_word, word) => {

  //only a scrambled version of the word if it contains the same length and letters
  //and not in the same order

  //NOT A SCRAMBLE
  if (scrambled_word === word || (scrambled_word.length !== word.length)) {
    console.log(`${scrambled_word} is not a scramble of ${word}`)
    return
  }

  //NOT A SCRAMBLE 
  let check_scramble = scrambled_word.split('').sort().join('')
  let check_word = word.split('').sort().join('')
  for (let i = 0; i < check_scramble.length; i++){
    if (check_scramble[i] != check_word[i]){
      console.log(`${scrambled_word} is not a scramble of ${word}`)
      return
    }
  }

  //helper function for checking if two or more consecutive letters are in the correct place
  const poorHelper = (scrambled_word, word) => {

    let swLetters, wLetters

    //compare each two consecutive letters in each word
    for (let i = 0; i < scrambled_word.length - 1; i++){

      swLetters = scrambled_word.substr(i, 2)
      wLetters = word.substr(i, 2)
      
      //if the two consecutive letters match return true
      if (swLetters === wLetters) {
        return true
      }
    }
    return false

  }

  //if its hard will return true, else false
  const hardHelper = (scrambled_word, word) => {
    for (let i = 0; i < word.length; i++){
      if (scrambled_word[i] === word[i]){
        return false
      }
    }
    return true
  }
  
  //helper function for checking if scrabled word looks real
  const check_real = (scrambled) => {
    
    //using sets so that look up speed is in 0(1)
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'Y'])

    const constants = new Set(['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'])

    let combinations = new Set(['AI', 'AY', 'EA', 'EE', 'EO', 'IO', 'OA', 'OO', 'OY', 'YA', 'YO', 'YU', 'BL', 'BR', 'CH', 'CK', 'CL', 'CR', 'DR', 'FL', 'FR', 'GH', 'GL', 'GR', 'KL', 'KR', 'KW', 'PF', 'PL', 'PR', 'SC', 'SCH', 'SCR', 'SH', 'SHR', 'SK', 'SL', 'SM', 'SN', 'SP', 'SQ', 'ST', 'SW', 'TH', 'THR', 'TR', 'TW', 'WH', 'WR', 'AA', 'BB', 'CC', 'DD', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN',  'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ'])

    let two_constants, two_vowels

    for (let i = 0; i < scrambled.length - 1; i++){

      two_constants = constants.has(scrambled[i]) && constants.has(scrambled[i + 1])
      two_vowels = vowels.has(scrambled[i]) && vowels.has(scrambled[i + 1])

      if (two_constants || two_vowels) {

        //no three vowel combinations in set or higher
        if (two_vowels && vowels.has(scrambled[i + 2])){
          return false
        }

        two_check = scrambled.substr(i, 2)


        if (combinations.has(two_check)){
          if (two_constants && constants.has(scrambled[i + 2]) && constants.has(scrambled[i + 3])){
            //no four constant combinations in set or higher
            return false
          }
          //if there is a three constant combination
          if (two_constants && constants.has(scrambled[i + 2])){
            three_check = scrambled.substr(i, 3)
            if (combinations.has(three_check)){
              {continue}
            } else {
              //the three constant combination in the set does not exist
              return false
            }
          }
        } else {
          //it does not have the two constant or two vowel combination in the set
          return false
        }
      }
    }
    //all conditions are met and word looks real
    return true
  }

  //these will evaluate to either true or false
  const checkFirstLetter = scrambled_word[0] === word[0]
  const checkTwoConsecutive = poorHelper(scrambled_word, word)
  const is_hard = hardHelper(scrambled_word, word)
  const is_real = check_real(scrambled_word)

  //POOR SCRAMBLE
  if ((checkFirstLetter || checkTwoConsecutive) && is_real === false){
    console.log(`${scrambled_word} is a poor scramble of ${word}`)
    return
  }

  //HARD SCRAMBLE
  if (is_hard && is_real){
    console.log(`${scrambled_word} is a hard scramble of ${word}`)
    return
  }

  //FAIR SCRAMBLE
  console.log(`${scrambled_word} is a fair scramble of ${word}`)
}

//inputs scrambled word, word 
rateScrambled('MAPS', 'SPAM')
rateScrambled('RIONY', 'IRONY')
rateScrambled('ONYRI', 'IRONY')
rateScrambled('IRONY', 'IRONY')
rateScrambled('INOYR', 'IRONY') 
rateScrambled('IOYRN', 'IRONY')

