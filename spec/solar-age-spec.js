import {Age} from './../js/solar-age.js'

describe('Age', function() {

  it('should test for accurate conversion of age to seconds', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    expect(testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)).toEqual(955238400)
  });

  it('should test for accurate conversion of age to Mercury Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInMercuryYears(ageInSeconds)).toEqual(126)
  });

  it('should test for accurate conversion of age to Venus Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInVenusYears(ageInSeconds)).toEqual(48)
  });

  it('should test for accurate conversion of age to Mars Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInMarsYears(ageInSeconds)).toEqual(16)
  });

  it('should test for accurate conversion of age to Jupiter Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInJupiterYears(ageInSeconds)).toEqual(2)
  });

  // it('should test counting of vowels', function() {
  //   let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
  //   let letterArray = haiku.splitEachWordIntoArray("install")
  //   expect(haiku.countVowels(letterArray)).toEqual(2)
  // });
  //
  // it('should test counting of silent vowels when two vowels are together', function() {
  //   let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
  //   let letterArray = haiku.splitEachWordIntoArray("peel")
  //   expect(haiku.isSilentTwoVowelsTogether(letterArray)).toEqual(1)
  // });
  //
  // it('should test counting of silent vowels when ends with e, but not after l', function() {
  //   let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
  //   let letterArray = haiku.splitEachWordIntoArray("cave")
  //   let vowelCount = haiku.countVowels(letterArray)
  //   expect(vowelCount - haiku.isSilentEndsInE(letterArray)).toEqual(1)
  // });
  //
  // it('should test counting of silent vowels when ends with e', function() {
  //   let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
  //   let letterArray = haiku.splitEachWordIntoArray("little")
  //   let vowelCount = haiku.countVowels(letterArray)
  //   expect(vowelCount - haiku.isSilentEndsInE(letterArray)).toEqual(2)
  // });
  //
  // it('should test counting all syllables in a line', function() {
  //   let haiku = new Haiku("", "Yes it is", "It is indeed")
  //   let lineArray = haiku.translateLineToArray(haiku.line1)
  //   expect(haiku.loopThroughAllWords(lineArray)).toEqual(5)
  // });

});
