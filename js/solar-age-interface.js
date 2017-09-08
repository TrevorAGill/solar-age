import {Age} from './../js/solar-age.js'

jQuery.when(
    jQuery.getJSON('http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20Kingdom/2001-05-11/49y2m/')
).done( function(json) {
    var apiArray = (json);
    var expectedRemainingLife = apiArray.remaining_life_expectancy
    console.log(expectedRemainingLife);
});
;



// var test = $.getJSON('http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20Kingdom/2001-05-11/49y2m/', function(data) {
// //data is the JSON string
// });
// var remainingLifeTest = test.responseJSON;
// console.log(test);

$(function(){
  $("#solarAge").submit(function(event){
    event.preventDefault();

    let birthDate = new Date($("input#birthDate").val());
    var sex = $("input#sex").val();
    var country = $("input#country").val();
    let currentDate = new Date();
    let age = new Age(birthDate,currentDate);
    let apiUrl = age.craftApiUrl(sex,country)
    alert(apiUrl);



    let secondsOnEarth = age.calculateAgeInSeconds();
    let mercuryAge = age.calculateAgeInMercuryYears(secondsOnEarth);
    let venusAge = age.calculateAgeInVenusYears(secondsOnEarth);
    let marsAge = age.calculateAgeInMarsYears(secondsOnEarth);
    let jupiterAge = age.calculateAgeInJupiterYears(secondsOnEarth);

    // let remainingLife = age.calculateRemainingLifeInSeconds()

    $("#birthDate").text(birthDate);
    $("#currentDate").text(currentDate);



    // var line1 = $("input#haikuLine1").val();
    // var line2 = $("input#haikuLine2").val();
    // var line3 = $("input#haikuLine3").val();
    // var newHaiku = new Haiku(line1,line2,line3);
    // var wordArray1 = newHaiku.translateLineToArray(line1);
    // var wordArray2 = newHaiku.translateLineToArray(line2);
    // var wordArray3 = newHaiku.translateLineToArray(line3);
    // var sylCountLine1 = newHaiku.loopThroughAllWords(wordArray1);
    // var sylCountLine2 = newHaiku.loopThroughAllWords(wordArray2);
    // var sylCountLine3 = newHaiku.loopThroughAllWords(wordArray3);
    // $("#firstLineSyllables").text(sylCountLine1);
    // $("#secondLineSyllables").text(sylCountLine2);
    // $("#thirdLineSyllables").text(sylCountLine3);
    // var output = newHaiku.isValidHaiku(sylCountLine1, sylCountLine2, sylCountLine3);
    // $("#output").text(output);
  });
});
