var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//log multiple values at a single time
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName,enemyHealth,enemyAttack);

var fight = function() {
    // alert players the round is starting
    window.alert("Welcome to Robot Gladiators!");
    // enemyHealth - playerAttack and update enemyHealth with result
    enemyHealth = enemyHealth - playerAttack;
    // log message to console to confirm math worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // playerHealth - enemyAttack and update playerHealth with result
    playerHealth = playerHealth - enemyAttack;
    // log message to confole to confirm math worked
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
};

fight();