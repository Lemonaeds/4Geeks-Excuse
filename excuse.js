

 function excuseOnLoad(){
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];
    document.getElementById("excuse").innerHTML = who[Math.floor(Math.random()*3+1)] + " "+ action[Math.floor(Math.random()*3+1)] + " "+  what[Math.floor(Math.random()*3+1)] + " "+  when[Math.floor(Math.random()*3+1)];
    
 } 