var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log multiple values at a single time
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames,enemyHealth,enemyAttack);

// function to start a new game
var startGame = function() {
    // reset play status
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } // if we're not at the last enemy in the array and player is alive
        if (i < enemyNames.length - 1 && playerHealth > 0) {
            // ask player if they would like to visit the store before next round
            var storeConfirm = window.alert("The fight is over, visit the store before the next round?");
                //if yes, go to store
                if(storeConfirm) {
                    shop();
                }
        }
        else {
            window.alert("You have lost your robot in battle. GAME OVER.");
            break;
        }
    }
    //play again or end game?
    endGame();
};
// end of function to start a new game

// function to end entire game or play again
var endGame = function() {
    // if player is still alive, player wins, else, you lost
    if (playerHealth > 0) {
        window.alert("Great job, you survived the game. You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You lost your robot in battle. ☠️")
    }
    // play again?
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else
        //end game entire game 
        window.alert("Thank you for playing Robot Gladiators. Play again soon.");
}
// end of function to end entire game

// function to shop
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // use switch to carry out the shopOptionPrompt choice
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for $7.");
                //increase health and decreate money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("This costs $7. You do not have enough money. You have $" + playerMoney + ".");
            }
            break;
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for $7.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("This costs $7. You do not have enough money. You have $" + playerMoney + ".");
            }
            break;
        case "leave":
        case "LEAVE":
        case "Leave":
            window.alert("Leaving the store.");
            break;
        default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
    }
};
// end of function to shop

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

// I BELIEVE THE BELOW CODE IS UNNECESSARY FOR THE GAME TO FUNCTION PROPERLY
// // the for loop is BELOW defining the fight function bc we need to already know how the fight function in this loop
// for(var i = 0; i < enemyNames.length; i++) {
//     if (playerHealth > 0) {
//         // identify the round
//         window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
//         //pick new enemy to fight based on the index of the enemyNames array
//         var pickedEnemyName = enemyNames[i];
//         //reset enemyHealth before starting a new fight
//         enemyHealth = 50;
//         //pass the pickedEnemyName into the fight function, where it will assume the value of the enemyName parameter
//         fight(pickedEnemyName)
//     }
//     else {
//         window.alert("You have lost your robot in battle. Game Over.");
//         break;
//     }
// }
// // end for loop

// call the startGame function to be executed when the page loades
startGame();