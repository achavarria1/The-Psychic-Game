            var winCounter = 0;
            var lossCounter = 0;
            var guessCounter = null; // Will be initialized in gameInit()
            var lettersGuessed = null; // Will be initialized in gameInit()
            var randomLetterCode = null; // Will be initialized in gameInit()

            var letterCodeMin = 65; // letter "a" TEST TEST
            var letterCodeMax = 90; // letter "z"

            document.onkeyup = function(e) {
                if (e.keyCode >= letterCodeMin && e.which <= letterCodeMax) {
                    processKeystroke(e.keyCode);
                } else {
                    console.log('Key pressed is not a-z');
                }
            };

            function gameInit() {
                // Resetting the guessCounter to 9
                guessCounter = 9;
                // Resetting the lettersGuessed to an empty array
                lettersGuessed = [];

                // Picking a new random letter
                randomLetterCode = Math.floor(Math.random()*(letterCodeMax-letterCodeMin+1)+letterCodeMin);

                // Repainting the game
                gameRepaint();
            }

            function gameRepaint() {
                gameSetDomValueById("winCounter", winCounter);
                gameSetDomValueById("lossCounter", lossCounter);
                gameSetDomValueById("guessCounter", guessCounter);
                gameSetDomValueById("lettersGuessed", lettersGuessed.toString());
            }

            function gameSetDomValueById(id, value) {
                document.getElementById(id).innerHTML = value;
            }

            function gameTriggerWin() {
                winCounter++;

                // Resetting the game !
                gameInit();
            }

            function gameTriggerLoss() {
                lossCounter++;

                // Resetting the game !
                gameInit();
            }

            function processKeystroke(keycode) {
                // Adding letter to var lettersGuessed
                lettersGuessed.push(String.fromCharCode(keycode));
                // Decrementing guessCounter
                guessCounter--;

                if (keycode == randomLetterCode) {
                    // Trigger a Win!
                    gameTriggerWin();
                }

                if (guessCounter == 0) {
                    // Trigger a Loss!
                    gameTriggerLoss();
                }

                gameRepaint();
            }

            // Initializing the game for the first time!
            gameInit();

        
