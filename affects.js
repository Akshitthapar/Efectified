var delay;
var Chorus;
var WahWah;
var tremolo;
var overdrive;

function tuna(){
//creates on indtsnce of tuna passing the audio context we use
var tuna =new Tuna (context);
//creates a new Tuna delay instance

WahWah= new tuna.WahWah({
  automode: true, //true/false
  baseFrequency:0.8, //0to1
  excursionOctaves:1, //1to 6
  sweep: 0.6, //0 to1
  resonance:70, //1 to 100
  sensitivity:0.5, // -1 to 1
  bypass:1 //either 1 or 0 currently it is true and off//
});

delay =new tuna.Delay({
   feedback:0.78,
   delayTime:70,
   wetLevel:0.9,
   cutoff:5000,
   bypass:true
});

var chorus = new tuna.Chorus({
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: 0
});

overdrive=new tuna.Overdrive({
  outputGain: 1,
  drive:0.7, //0 to 1//
  curveAmount: 1,
  algorithmIndex:4,
  bypass:1,
});
tremolo=new tuna.Tremolo({
  intensity:1,
  rate:8,
//  stereoPhase:14,//
  bypass:1
});
}// this is for tuna functon//



var context= new AudioContext;
tuna();
var song= document.querySelector("audio");
var source= context.createMediaElementSource(song);

source.connect(WahWah.input);
source.connect(tremolo.input);
source.connect(overdrive.input);
source.connect(delay.input);
WahWah.connect(context.destination);
delay.connect(context.destination);
overdrive.connect(context.destination);
tremolo.connect(context.destination);


var a= document.querySelector(".a");
var b= document.querySelector(".b");
var c= document.querySelector(".c");
var d= document.querySelector(".d");

var x=0;
var y=0;
/*element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}*/



a.addEventListener("click",function (e){
  $(this).toggleClass("border");

  if (delay.bypass) {

    delay.bypass=false;
    console.log("false");
  }
  else {
    delay.bypass=true;
    console.log("true");
  }
});
 b.addEventListener("click",function (e){
  $('this').toggleClass("border");

  if (WahWah.bypass) {

    wahwah.bypass=0;
  }
  else {
    wahwah.bypass=1;

  }
});


  c.addEventListener("click",function (e){
  $(this).toggleClass("border");

  if (overdrive.bypass) {

    overdrive.bypass=0;
  }
  else {
    overdrive.bypass=1;

  }
});

d.addEventListener("click",function (e){
  $(this).toggleClass("border");

  if (tremolo.bypass) {

    tremolo.bypass=0;

  }
  else {
    tremolo.bypass=1;

  }

});
