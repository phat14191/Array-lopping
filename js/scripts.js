var array_car = [];
var array_name = [];
var array_two = [];

$(document).ready(function(){
  $("form#favorites").submit(function(event){
    debugger;
    // $ thong bao javascript lay tu html
    //val gia tri cua html trong form
    //array_car.push method array push gan trong array [] line 1 2 3
    array_name.push($("input#name").val());
    array_car.push($("input#car").val());
    //tao value name1
    var name1 = array_name[0];
    var car2 = array_car[1];
// dat combine 2 cai together //
    array_two.push(name1, car2);
    alert(array_two);
    // 23 24 show class name and car //
    $(".show_name").text(name1);
    $(".show_car").text(car2);
    event.preventDefault();
  });
});
