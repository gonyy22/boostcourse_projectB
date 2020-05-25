var acc = document.querySelectorAll(".question_title");

for(var i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    var answer = this.nextElementSibling;
    if(answer.style.display === "block"){
      answer.style.display = "none";
    }
    else{
      answer.style.display = "block";
    }
  });
}
