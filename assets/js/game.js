var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log multiple values at a single time
//console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyNames,enemyHealth,enemyAttack);

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        // play the game
        // player choose: fight or skip:
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            console.log(promptFight);
        // fighting or skipping?
        // if SKIP
            if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
                // confirm player is skipping
                var confrimSkip = window.confirm("Are you sure you'd like to quit?");
                // if confirmed skip
                    if (confrimSkip) {
                        window.alert(playerName + " has decided to skip this fight. Goodbye.");
                        // subtract money for skipping
                        playerMoney = playerMoney - 10;
                        console.log("playerMoney", playerMoney);
                        break;
                    }
            }
        // if FIGHT?
        // enemyHealth - playerAttack and update enemyHealth with result
            enemyHealth = enemyHealth - playerAttack;
            // log message to console to confirm math worked
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                // check enemyName health is <= 0
                    if (enemyHealth <= 0) {
                        window.alert(enemyName + " has died!");
                        // award player money for winning
                        playerMoney = playerMoney + 20;
                        // leave while() loop since enemy is dead
                        break;
                    }
                    else {
                        window.alert(enemyName + " still has " + enemyHealth + " health left.");
                    }
        // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
                // check player's health
                    if (playerHealth <= 0) {
                        window.alert(playerName + " has died.");
                        break;
                    }
                    else {
                        window.alert(playerName + " still has " + playerHealth + " health left.");
                    }
    } //end of while loop
} // end of fight function

// the for loop is BELOW defining the fight function bc we need to already know how the fight function in this loop
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // identify the round
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[1];
        //reset enemyHealth before starting a new fight
        enemyHealth = 50;
        //pass the pickedEnemyName into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName)
    }
    else {
        window.alert("You have lost your robot in battle. Game Over.");
        break;
    }
}

//fight();