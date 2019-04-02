const rateScrambled = (sw, w) => {

  //NOT A SCRAMBLE
  if (sw === w) {
    console.log(`${sw} is not a scramble of ${w}`)
    return
  }

  const vls = new Set(['A', 'E', 'I', 'O', 'U', 'Y'])

  const conts = new Set(['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'])

  const combs = new Set(['AI', 'AY', 'EA', 'EE', 'EO', 'IO', 'OA', 'OO', 'OY', 'YA', 'YO', 'YU', 'BL', 'BR', 'CH', 'CK', 'CL', 'CR', 'DR', 'FL', 'FR', 'GH', 'GL', 'GR', 'KL', 'KR', 'KW', 'PF', 'PL', 'PR', 'SC', 'SCH', 'SCR', 'SH', 'SHR', 'SK', 'SL', 'SM', 'SN', 'SP', 'SQ', 'ST', 'SW', 'TH', 'THR', 'TR', 'TW', 'WH', 'WR', 'AA', 'BB', 'CC', 'DD', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN',  'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ'])

  const check_real = (sw) => {
    let two_conts, two_vowels, check_two, check_three

    for (let i = 0; i < sw.length; i++){

      //if we have two vowels or two constants in a row
      two_conts = conts.has(sw[i]) && conts.has(sw[i + 1])
      two_vowels = vls.has(sw[i]) && vls.has(sw[i + 1])

      //no three vowel combinations in set or higher
      if (two_vowels && vls.has(sw[i + 2])){
        return false
      }
      
      //no four constant combinations in set or higher
      if (two_conts && conts.has(sw[i + 2]) && conts.has(sw[i + 3])) {
        return false
      }

      //checking three constant combination
      if (two_conts && conts.has(sw[i + 2])){
        check_three = sw[i] + sw[i + 1] + sw[i + 2]
        if (combs.has(check_three)){
          {continue}
        } else {
          return false
        }
      }

      //checking two constant or two vowel combination
      if (two_conts || two_vowels){
        check_two = sw[i] + sw[i + 1]
        if (combs.has(check_two)){
          {continue}
        } else {
          return false
        }
      }

    }
    return true
  }
  
  //checking if two or more consecutive letters are in the correct place
  const poorHelper = (sw, w) => {
    for (let i = 0; i < sw.length - 1; i++){
      if ((sw[i] + sw[i + 1]) === (w[i] + w[i + 1])){
        return true
      }
    }
    return false
  }

  //checking if any consecutive letters are in the correct place
  const hardHelper = (sw, w) => {
    for (let i = 0; i < w.length; i++){
      if (sw[i] === w[i]){
        return false
      }
    }
    return true
  }

  //these will evaluate to either true or false
  const checkFirstLetter = sw[0] === w[0]
  const checkTwoConsecutive = poorHelper(sw, w)
  const is_hard = hardHelper(sw, w)
  const is_real = check_real(sw)

  //POOR SCRAMBLE
  if ((checkFirstLetter || checkTwoConsecutive) && is_real === false){
    console.log(`${sw} is a poor scramble of ${w}`)
    return
  }

  //HARD SCRAMBLE
  if (is_hard && is_real){
    console.log(`${sw} is a hard scramble of ${w}`)
    return
  }

  //FAIR SCRAMBLE
  console.log(`${sw} is a fair scramble of ${w}`)
}

//inputs scrambled w, w 
rateScrambled('MAPS', 'SPAM')
rateScrambled('RIONY', 'IRONY')
rateScrambled('ONYRI', 'IRONY')
rateScrambled('IRONY', 'IRONY')
rateScrambled('INOYR', 'IRONY') 
rateScrambled('IOYRN', 'IRONY')
rateScrambled('IOYRN', 'IRONY')


