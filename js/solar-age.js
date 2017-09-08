export class Age {

  constructor(birthDate, currentDate) {
    this.birthDate = birthDate;
    this.currentDate = currentDate;
    this.remainingLife = 0;
  }

  calculateAgeInSeconds(){
    let currentDateTime = this.currentDate.getTime();
    let birthDateTime = this.birthDate.getTime();
    let differenceBetweenDates = currentDateTime - birthDateTime;
    let secondsAliveOnEarth = Math.floor(differenceBetweenDates / 1000);
    return secondsAliveOnEarth;
  }

  calculateAgeInMercuryYears(secondsAliveOnEarth){
    const secondsInEarthYear = 31536000;
    let ageRaw = secondsAliveOnEarth / (secondsInEarthYear * 0.24);
    let age = parseFloat(ageRaw.toFixed(2));
    return age;
  }

  calculateAgeInVenusYears(secondsAliveOnEarth){
    const secondsInEarthYear = 31536000;
    let ageRaw = secondsAliveOnEarth / (secondsInEarthYear * 0.62);
    let age = parseFloat(ageRaw.toFixed(2));
    return age;
  }

  calculateAgeInMarsYears(secondsAliveOnEarth){
    const secondsInEarthYear = 31536000;
    let ageRaw = secondsAliveOnEarth / (secondsInEarthYear * 1.88);
    let age = parseFloat(ageRaw.toFixed(2));
    return age;
  }

  calculateAgeInJupiterYears(secondsAliveOnEarth){
    const secondsInEarthYear = 31536000;
    let ageRaw = secondsAliveOnEarth / (secondsInEarthYear * 11.86);
    let age = parseFloat(ageRaw.toFixed(2));
    return age;
  }

  convertAgeToAPIFormat(){
    let currentAgeInSeconds = this.calculateAgeInSeconds();
    let exactAgeInYears= currentAgeInSeconds/31536000;
    let yearsAlive = Math.floor(exactAgeInYears);
    let monthsAlive = Math.floor((exactAgeInYears % 1) * 12);
    let finalOutput = yearsAlive + "y" + monthsAlive + "m";
    return finalOutput;
  }

  convertCurrentDateToAPIFormat(){
    let finalOutput = this.currentDate.toISOString().slice(0, 10);
    return finalOutput;
  }

  craftApiUrl(sex,country){
    let currentDateAPIRequiredFormat = this.convertCurrentDateToAPIFormat();
    let ageAPIRequiredFormat = this.convertAgeToAPIFormat();
    debugger;
    let url = "http://api.population.io:80/1.0/life-expectancy/remaining/" + sex + "/" + country + "/" + currentDateAPIRequiredFormat + "/" + ageAPIRequiredFormat + "/"
    return url;
  }

  calculateRemainingLifeInEarthYears(url){
    jQuery.when(
        jQuery.getJSON(url)
    ).done( function(json) {
        var apiArray = (json);
        var expectedRemainingLife = apiArray.remaining_life_expectancy
        alert(expectedRemainingLife);
    });
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
