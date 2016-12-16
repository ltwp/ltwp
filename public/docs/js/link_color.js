$("a").hover(function(){
    /*

  console.log("Link hover; changing color.");
  //var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var randomColor = "hsl("+Math.floor(Math.random()*360).toString()+",75%,55%)";
  $(this).css("color",""+randomColor);
  $(this).css("border-bottom","1px solid "+randomColor);


  $('#top').css("background-color",""+randomColor);
  $('#top').css("visibility","visible");
  $('#left').css("background-color",""+randomColor);
  $('#left').css("visibility","visible");
  $('#right').css("background-color",""+randomColor);
  $('#right').css("visibility","visible");
  $('#bottom').css("background-color",""+randomColor);
  $('#bottom').css("visibility","visible");

},function(){
  $(this).css("color","blue");
  $(this).css("border-bottom","1px solid blue");
  $('#top').css("visibility","hidden");
  $('#left').css("visibility","hidden");
  $('#right').css("visibility","hidden");
  $('#bottom').css("visibility","hidden"); */

    //console.log($(this).attr("hovcol"));
    var hovcol = $(this).attr("hovcol");
    if(typeof hovcol != 'undefined'){
        $(this).css("background-color",hovcol);
        $(this).css("border-bottom","1px solid "+hovcol);
    }else{
        $(this).css("background-color","blue");
    }
},function(){
    $(this).css("background-color","transparent");
    $(this).css("border-bottom","1px solid blue");
    console.log('hey');
});
