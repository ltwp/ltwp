$(document).ready(function(){


  // COMMENT MANAGEMENT
  var n_comments = $("comment").length;
  var comments = [];
  var on_off = [];

  for(var i = 0; i < n_comments; i++){
    var pos = $("comment").eq(i).position();
    $("comment").eq(i).css("top",pos.top+"");
    $("comment").eq(i).attr("id",i+"");
    var content = $("comment").eq(i).html();
    comments.push(content+"<span style='font-style: italic;'>&nbsp-LTWP</span>");
    on_off.push("off");
    $("comment").eq(i).html("&#9758;");
  }

  $("comment").click(function(){
    var num = parseInt($(this).attr("id"));

    if(on_off[num] == 'off'){
      $("comment").eq(num).html(comments[num]);
      $("comment").eq(num).css("font-size","10pt");
      on_off[num] = 'on';
    }else{
      $("comment").eq(num).html("&#9758;");
      $("comment").eq(num).css("font-size","14pt");
      on_off[num] = 'off';
    }
  });
});
