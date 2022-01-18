function addUser(){
    player_1_name=document.getElementById("player1_name_input").value;
    player_2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name_key",player_1_name);
    localStorage.setItem("player2_name_key",player_2_name);
    window.location="game_page.html";
}
function sendWord() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
}