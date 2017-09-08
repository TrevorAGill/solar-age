import {Age} from './../js/solar-age.js'

$(function(){
  $("#solarAge").submit(function(event){
    event.preventDefault();
    let birthDate = new Date($("#birthDate").val());
    let sex = $("#sex").val();
    let country = $("#country").val();
    let currentDate = new Date();
    let age = new Age(birthDate,currentDate);
    let apiUrl = age.craftApiUrl(sex,country)
    let secondsOnEarth = age.calculateAgeInSeconds();
    let mercuryAge = age.calculateAgeInMercuryYears(secondsOnEarth);
    let venusAge = age.calculateAgeInVenusYears(secondsOnEarth);
    let marsAge = age.calculateAgeInMarsYears(secondsOnEarth);
    let jupiterAge = age.calculateAgeInJupiterYears(secondsOnEarth);
    let remainingYearsOnEarth = age.calculateRemainingLifeInEarthYears(apiUrl);
    let remainingYearsOnMercury = age.calculateAgeInMercuryYears(remainingYearsOnEarth);
    let remainingYearsOnVenus = age.calculateAgeInVenusYears(remainingYearsOnEarth);
    let remainingYearsOnMars = age.calculateAgeInMarsYears(remainingYearsOnEarth);
    let remainingYearsOnJupiter = age.calculateAgeInJupiterYears(remainingYearsOnEarth);



    $("#birthDate").text(birthDate);
    $("#currentDate").text(currentDate);
  });
});
