    window.onload = function () {
           if (!window.webkitAudioContext) {
               document.getElementById("body").innerHTML = "Oops, your browser doesn't support this demo! Please try the latest Google Chrome.";
               return;
           } else {
               if (!window.Audio) {
                   document.getElementById("body").innerHTML = "Oops, your browser doesn't support this demo! Please try the latest Google Chrome.";
                   return;
               }
           }
var context = new webkitAudioContext(),
             tuna = new Tuna(context);


         /*These are the effects made with tuna*/

         var wahwah = new tuna.WahWah({
             automode: true, //true/false
             baseFrequency: 0.5, //0 to 1
             excursionOctaves: 3, //1 to 6
             sweep: 0, //0 to 1
             resonance: 2, //1 to 100
             sensitivity: 1, //-1 to 1
             bypass: 0
         });
         var phaser = new tuna.Phaser({
             rate: 1.2, //0.01 to 8 is a decent range, but higher values are possible
             depth: 0.8, //0 to 1
             feedback: 0.9, //0 to 1+
             stereoPhase: 180, //0 to 180
             baseModulationFrequency: 700, //500 to 1500
             bypass: 0
         });
         var tremolo = new tuna.Tremolo({
             intensity: 0.2, //0 to 1
             rate: 8, //0.001 to 8
             stereoPhase: 0, //0 to 180
             feedback: 0.9, //0 to 1+
             bypass: 0
         });




         var freq = 55 * Math.pow(1.059463, 11);
         var osc;


         //no effect
         function createNoTuna() {
             osc = context.createOscillator();
             osc.type = 3; // triangle wave
             osc.frequency.value = freq
             osc.connect(context.destination);
             osc.noteOn(0);
         }

         //play with wahwah effect
         function createWahWah() {
             osc = context.createOscillator();
             osc.type = 3; // triangle wave
             osc.frequency.value = freq
             osc.connect(wahwah.input);
             wahwah.connect(context.destination);
             osc.noteOn(0);
         }

         //play with phaser effect
         function createPhaser() {
             osc = context.createOscillator();
             osc.type = 3; // triangle wave
             osc.frequency.value = freq
             osc.connect(phaser.input);
             phaser.connect(context.destination);
             osc.noteOn(0);
         }

         //play with tremolo effect
         function createTremolo() {
             osc = context.createOscillator();
             osc.type = 3; // triangle wave
             osc.frequency.value = freq
             osc.connect(tremolo.input);
             tremolo.connect(context.destination);
             osc.noteOn(0);
         }

         function stopWave() {
             osc.noteOff(0);
         }

         document.getElementById('notuna').addEventListener('mousedown', createNoTuna)
         document.getElementById('notuna').addEventListener('mouseup', stopWave)
         document.getElementById('wahwah').addEventListener('mousedown', createWahWah)
         document.getElementById('wahwah').addEventListener('mouseup', stopWave)
         document.getElementById('phaser').addEventListener('mousedown', createPhaser)
         document.getElementById('phaser').addEventListener('mouseup', stopWave)
         document.getElementById('tremolo').addEventListener('mousedown', createTremolo)
         document.getElementById('tremolo').addEventListener('mouseup', stopWave)
}
