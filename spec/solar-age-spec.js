import {Age} from './../js/solar-age.js'

describe('Age', function() {

  it('should test for accurate conversion of age to seconds', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    expect(testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)).toEqual(955238400)
  });

  it('should test for accurate conversion of age to Mercury Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInMercuryYears(ageInSeconds)).toEqual(126.21)
  });

  it('should test for accurate conversion of age to Venus Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInVenusYears(ageInSeconds)).toEqual(48.86)
  });

  it('should test for accurate conversion of age to Mars Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInMarsYears(ageInSeconds)).toEqual(16.11)
  });

  it('should test for accurate conversion of age to Jupiter Years', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    expect(testAge.calculateAgeInJupiterYears(ageInSeconds)).toEqual(2.55)
  });

  it('should test that API url is returned in correct format', function() {
    let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
    let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
    let apiUrl = testAge.craftApiUrl("male","United%20States")
    expect(testAge.craftApiUrl("male","United%20States")).toEqual("http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20States/2017-09-08/30y3m/")
  });

  //would like to know if thi
  // it('should test that API correctly returns expected remaining life', function() {
  //   let testAge = new Age(new Date("1987-06-02"),new Date("2017-09-08"))
  //   let ageInSeconds = testAge.calculateAgeInSeconds(testAge.birthDate,testAge.currentDate)
  //   expect(testAge.getAPIData('http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20States/2017-09-08/30y3m/',function(remainingYears){
  //     (remainingYears / 0.24).toFixed(2)}).toEqual(30)
  // });

});
