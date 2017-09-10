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


  // myCallback(data){
  //   let remainingLifeExpectancy = data.remaining_life_expectancy;
  //   fn(remainingLifeExpectancy);
  // }

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

  // calculateRemainingLifeInEarthYears(url){
  //   jQuery.when(
  //       jQuery.getJSON(url)
  //   ).done( function(json) {
  //       var apiArray = (json);
  //       expectedRemainingLife = apiArray.remaining_life_expectancy;
  //       dothis(expectedRemainingLife);
  //       return expectedRemainingLife;
  //   });
  //   return expectedRemainingLife;
  // }
  //
  // dothis(expectedRemainingLife){
  //   console.log(expectedRemainingLife);
  // }
  //
  //
  //
  // getJSON(url, json){
  //     var apiArray = (json);
  //     expectedRemainingLife = apiArray.remaining_life_expectancy;
  //     return expectedRemainingLife;
  // }
  //
  // slimDownJSON(url, callback){
  //
  //   return callback(url)
  //   jQuery.when(
  //     jQuery.getJSON(url)
  // ).done(function(json) {
  //       var apiArray = (json);
  //       expectedRemainingLife = apiArray.remaining_life_expectancy;
  //       return expectedRemainingLife;
  //   });
  // }

//interface call




  // calculateRemainingLifeInEarthYears(json){
  //   var apiArray = (json);
  //   expectedRemainingLife = apiArray.remaining_life_expectancy;
  //   return expectedRemainingLife;
  // }

  //   calculateRemainingLifeInEarthYears(function(result) {
  //     // 5. Received the result from the async function,
  //     //    now do whatever you want with it:
  //     alert(result);
  // });
  //
  // function   calculateRemainingLifeInEarthYears(callback) {
  //     // 3. Start async operation:
  //     setTimeout(function() {
  //         // 4. Finished async operation,
  //         //    call the callback passing the result as argument
  //         callback('Nya');
  //     }, Math.random() * 2000);
  // }

  // calculateRemainingLifeInEarthYears(url){
  //   var expectedRemainingLife;
  //   jQuery.when(
  //       jQuery.getJSON(url)
  //   ).done( function(json) {
  //       var apiArray = (json);
  //       expectedRemainingLife = apiArray.remaining_life_expectancy;
  //       alert(expectedRemainingLife);
  //   });
  //   alert(expectedRemainingLife);
  //   return expectedRemainingLife;
  // }


//   function aFunc() {
//      var result;
//      object.event = function() {
//         result = true;
//      };
//      object.event();
//      return result;
//   }
//
//
//
//   function aFunc(callback) {
//    object.event = function() {
//       var result = true;
//       callback(result);
//    };
// }

  //
  // calculateRemainingLifeInMercuryYears(remainingYearsOnEarth){
  //   let remainingYears = remainingYearsOnEarth * (1 / 0.24);
  //   return remainingYears;
  // }
  //
  // calculateRemainingLifeInVenusYears(remainingYearsOnEarth){
  //   const secondsInEarthYear = 31536000;
  //   let remainingYears = remainingYearsOnEarth * (1 / 0.62);
  //   return remainingYears;
  // }
  //
  // calculateRemainingLifeInMarsYears(remainingYearsOnEarth){
  //   const secondsInEarthYear = 31536000;
  //   let remainingYears = remainingYearsOnEarth * 1.88;
  //   return remainingYears;
  // }
  //
  // calculateRemainingLifeInJupiterYears(remainingYearsOnEarth){
  //   const secondsInEarthYear = 31536000;
  //   let remainingYears = remainingYearsOnEarth * 11.86;
  //   return remainingYears;
  // }

}
