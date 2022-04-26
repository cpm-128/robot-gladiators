var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log multiple values at a single time
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName,enemyHealth,enemyAttack);

var fight = function() {
    // alert players the round is starting
        window.alert("Welcome to Robot Gladiators!");
    // player choose: fight or skip:
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            console.log(promptFight);
    // fighting or skipping?
    // if FIGHT
    if (promptFight === "FIGHT" || promptFight === "fight" || promptFight === "Fight") {
        // then FIGHT
            // enemyHealth - playerAttack and update enemyHealth with result
                enemyHealth = enemyHealth - playerAttack;
            // log message to console to confirm math worked
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            // check enemyName health is <= 0
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
            // playerHealth - enemyAttack and update playerHealth with result
                playerHealth = playerHealth - enemyAttack;
            // log message to confole to confirm math worked
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            // check playerName health is <=0
                if (playerHealth <=0) {
                    window.alert(playerName + " has died!");
                }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
    }
    // if SKIP
    else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
        // confirm player is skipping
        var confrimSkip = window.confirm("Are you sure you'd like to quit?");
        // if confirmed skip
            if (confrimSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye.");
                // subtract money for skipping
                playerMoney = playerMoney - 2;
                console.log(playerMoney);
            }
        // if not skipping
            else {
                fight();
            }
    }
    // if ERROR
    else {
        window.alert("You need to choose a valid option. Try again.");
        fight();
    }
};

fight();