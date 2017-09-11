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

  calculateAgeInEarthYears(secondsAliveOnEarth){
    const secondsInEarthYear = 31536000;
    let ageRaw = secondsAliveOnEarth / (secondsInEarthYear * 1.00);
    let age = parseFloat(ageRaw.toFixed(2));
    return age;
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
    let url = "http://api.population.io:80/1.0/life-expectancy/remaining/" + sex + "/" + country + "/" + currentDateAPIRequiredFormat + "/" + ageAPIRequiredFormat + "/";
    return url;
  }

  getAPIData(apiUrl,fn){
    $.ajax({
      url: apiUrl,
      dataType: 'JSON',
      type: 'GET',
      success: function(data) {
        let remainingLifeExpectancy = data.remaining_life_expectancy;
        fn(remainingLifeExpectancy);
      }
    });
  }
}
