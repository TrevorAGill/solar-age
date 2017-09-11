import {Age} from './../js/solar-age.js';

$(function(){
  $("#solarAge").submit(function(event){
    event.preventDefault();
    $('#solarAge').children('input').val('')
    $(".well").show();
    let birthDate = new Date($("#birthDate").val());
    let sex = $("#sex").val();
    let country = $("#country").val();
    let currentDate = new Date();
    let age = new Age(birthDate,currentDate);
    let apiUrl = age.craftApiUrl(sex,country);
    let secondsOnEarth = age.calculateAgeInSeconds();
    let earthAge = age.calculateAgeInEarthYears(secondsOnEarth);
    let mercuryAge = age.calculateAgeInMercuryYears(secondsOnEarth);
    let venusAge = age.calculateAgeInVenusYears(secondsOnEarth);
    let marsAge = age.calculateAgeInMarsYears(secondsOnEarth);
    let jupiterAge = age.calculateAgeInJupiterYears(secondsOnEarth);
    $(".ageMercury").text(mercuryAge);
    $(".ageVenus").text(venusAge);
    $(".ageEarth").text(earthAge);
    $(".ageMars").text(marsAge);
    $(".ageJupiter").text(jupiterAge);
    age.getAPIData(apiUrl,function(remainingYears){
      let remainingYearsMercury = (remainingYears / .24).toFixed(2);
      let remainingYearsVenus = (remainingYears / .62).toFixed(2);
      let remainingYearsEarth = (remainingYears).toFixed(2);
      let remainingYearsMars = (remainingYears / 1.88).toFixed(2);
      let remainingYearsJupiter = (remainingYears / 11.86).toFixed(2);
      $(".remainingMercury").text(remainingYearsMercury);
      $(".remainingVenus").text(remainingYearsVenus);
      $(".remainingEarth").text(remainingYearsEarth);
      $(".remainingMars").text(remainingYearsMars);
      $(".remainingJupiter").text(remainingYearsJupiter);
    });
  });
});
