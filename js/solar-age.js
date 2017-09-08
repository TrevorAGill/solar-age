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

  calculateRemainingLifeInMercuryYears(remainingYearsOnEarth){
    let remainingYears = remainingYearsOnEarth * (1 / 0.24);
    return remainingYears;
  }

  calculateRemainingLifeInVenusYears(remainingYearsOnEarth){
    const secondsInEarthYear = 31536000;
    let remainingYears = remainingYearsOnEarth * (1 / 0.62);
    return remainingYears;
  }

  calculateRemainingLifeInMarsYears(remainingYearsOnEarth){
    const secondsInEarthYear = 31536000;
    let remainingYears = remainingYearsOnEarth * 1.88;
    return remainingYears;
  }

  calculateRemainingLifeInJupiterYears(remainingYearsOnEarth){
    const secondsInEarthYear = 31536000;
    let remainingYears = remainingYearsOnEarth * 11.86;
    return remainingYears;
  }

}
