import {Age} from './../js/solar-age.js'

$(function(){
  $("#solarAge").submit(function(event){
    event.preventDefault();

    let birthDate = new Date($("input#birthDate").val());
    console.log($("input#birthDate").val());
    let currentDate = new Date();
    let age = new Age(birthDate,currentDate);
    let secondsOnEarth = age.calculateAgeInSeconds(age.birthDate,age.currentDate);
    let mercuryAge = age.calculateAgeInMercuryYears(secondsOnEarth);
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
