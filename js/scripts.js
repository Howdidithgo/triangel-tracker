
// business logic
// check if a triangle is legal
var legalTriangle = function(side1, side2, side3){
  var resultString = "";
  if ((side1 + side2 <= side3) ||(side1 + side3 <= side2) || (side2 + side3 <= side1)){
    resultString = "It is not a legal triangle, please try again";
  }else if(side1 === side2 === side3){
    resultString = "It is a Equilateral. Thank you.";
  }else if(side1 === side2 || side1 === side3 || side2 === side3){
    resultString = "It is a Isosceles. Thank you.";
  }else if(side1 != side2 || side1 != side3 || side2 != side3){
    resultString = "It is a Scalene. Thank you.";
  }
    return resultString;
  }



//user interface logic
$().ready(function(){
  $(".triangle-form").submit(function(e){
    e.preventDefault()
    try{
      var side1 = parseInt($("[name='side1']").val());
      var side2 = parseInt($("[name='side2']").val());
      var side3 = parseInt($("[name='side3']").val());
    }catch (e) {
      $(".output").text("Please enter three sides in digitals.");
    }

    if (side1 && side2 && side3){
      var result = legalTriangle(side1, side2, side3);
      $(".input").text('You entered: '+side1 + " , " + side2 + " , " + side3);
      $(".output").text(result);
    }else{
      $(".output").text("Please enter three sides in digitals.");
    }
    $(".result").show();

  });
});
