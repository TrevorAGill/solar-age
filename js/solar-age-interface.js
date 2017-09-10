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

    // let remainingYearsOnEarth = calculateRemainingLifeInEarthYears(apiUrl);
    // let remainingYearsOnEarth = slimDownJSON(apiUrl, getJSON);
    // alert(remainingYearsOnEarth);



    // let json =  $.ajax({
    //   url: `http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20Kingdom/2001-05-11/49y2m/`,
    //   type: 'GET',
    //   datatype: 'jsonp'
    // });
    // jQuery.when(
    //   let json =  $.ajax({
    //     url: `http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20Kingdom/2001-05-11/49y2m/`,
    //     type: 'GET',
    //     datatype: 'jsonp'
    //   ).done(
    // console.log(json));



    // let whatever = "this is a test";
    // let whateverObjectified = JSON.parse(whatever);
    // let lifeRemaining = whateverObjectified.remaining_life_expectancy;
    // alert(lifeRemaining);



    // var scriptEl = document.createElement('script');
    // scriptEl.src =
    //     'http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20Kingdom/2001-05-11/49y2m/to/jsonp?callback=myJsonpCallback';
    // document.body.appendChild(scriptEl);
    //
    // window.myJsonpCallback = function(data) {
    //   debugger;
    //   var apiArray = data;
    //   console.log(apiArray);
    //   // expectedRemainingLife = apiArray.remaining_life_expectancy;
    //   // console.log(expectedRemainingLife);
    // };




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


    // let remainingYearsOnEarth = jQuery.when(jQuery.getJSON(apiUrl)).done(age.calculateRemainingLifeInEarthYears(json));
    // alert(remainingYearsOnEarth);
    // let remainingYearsOnMercury = age.calculateAgeInMercuryYears(remainingYearsOnEarth);
    // let remainingYearsOnVenus = age.calculateAgeInVenusYears(remainingYearsOnEarth);
    // let remainingYearsOnMars = age.calculateAgeInMarsYears(remainingYearsOnEarth);
    // let remainingYearsOnJupiter = age.calculateAgeInJupiterYears(remainingYearsOnEarth);

    // $(".mercury").append("<ul><li>Your Age: " + mercuryAge + "</li><li>Your Remaining Life Expectancy: " + remainingYearsOnEarth + "</li></ul>");

    $("#birthDate").text(birthDate);
    $("#currentDate").text(currentDate);



  });
});
