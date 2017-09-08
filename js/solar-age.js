export class Age {

  constructor(birthDate, currentDate) {
    this.birthDate = birthDate;
    this.currentDate = currentDate;
  }

  calculateAgeInSeconds(birthDate,currentDate){
    let currentDateTime = currentDate.getTime();
    let birthDateTime = birthDate.getTime();
    let differenceBetweenDates = currentDateTime - birthDateTime;
    let secondsAliveOnEarth = Math.floor(differenceBetweenDates / 1000);
    return secondsAliveOnEarth;
  }









  // translateLineToArray(lineInput){
  //   let lineArray = lineInput.split(" ");
  //   return lineArray;
  // }
  //
  // loopThroughAllWords(lineArray){
  //   let lineSyllableCount = 0;
  //   for(let i=0 ; i<lineArray.length ; i++){
  //     let letterArray = this.splitEachWordIntoArray(lineArray[i]);
  //     let wordVowelCount = this.countVowels(letterArray);
  //     let silentVowelCount = this.isSilentTwoVowelsTogether(letterArray) + this.isSilentEndsInE(letterArray);
  //     let wordSyllableCount = wordVowelCount - silentVowelCount;
  //     lineSyllableCount += wordSyllableCount;
  //   }
  //   return lineSyllableCount;
  // }
  //
  // splitEachWordIntoArray(word){
  //   let letterArray = word.split("");
  //   return letterArray;
  // }
  //
  // countVowels(letterArray){
  //   let vowelCount = 0;
  //   for(let i=0 ; i<letterArray.length ; i++){
  //     if(this.vowels.includes(letterArray[i])){
  //       vowelCount++;
  //     }
  //   }
  //   return vowelCount;
  // }
  //
  // isSilentTwoVowelsTogether(letterArray){
  //   let silentVowelCount = 0;
  //   for(let i=0 ; i<letterArray.length ; i++){
  //     if(this.vowels.includes(letterArray[i]) && this.vowels.includes(letterArray[i+1])){
  //       silentVowelCount++;
  //     }
  //   }
  //   return silentVowelCount;
  // }
  //
  // isSilentEndsInE(letterArray){
  //   let silentVowelCount = 0;
  //   let lastLetterIndex = letterArray.length;
  //   let lastLetter = letterArray[lastLetterIndex-1];
  //   if((lastLetter === "e"  && letterArray[lastLetterIndex - 2] != "l") || (lastLetter === "s"  && letterArray[lastLetterIndex - 2] === "e" && letterArray[lastLetterIndex - 3] !="l")){
  //     silentVowelCount = 1;
  //   }
  //   return silentVowelCount;
  // }
  //
  // isValidHaiku(sylCountLine1, sylCountLine2, sylCountLine3){
  //   if(sylCountLine1 != 5 || sylCountLine2 != 7 || sylCountLine3 != 5){
  //     return "Not a Haiku!";
  //   }
  //   return "You made a Haiku!";
  // }


  //     }
  //   }
  //   return ruleMetCount;
  // }

}
