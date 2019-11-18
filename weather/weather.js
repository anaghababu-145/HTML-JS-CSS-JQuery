// function for button click
$(document).ready(function(){
$("#bt").click(a);
function a()
{
var v =  $('#txt').val();
$.ajax
({
  url:"http://api.openweathermap.org/data/2.5/weather?q="+v+"&units=metric"+"&APPID=bf990c711b978836a3fd092f1913ff7e",
  type:"GET",
  datatype:"jsonp",
  success:function(data)
  {
    console.log(data);
    document.getElementById("temperature").innerHTML=data.main.temp;
    document.getElementById('name').innerHTML=v;
    var icon1="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    document.getElementById('icon').src=icon1;
  }
});
}
});
// function for fahrenheit button
$(document).ready(function(){
$("#fahren").click(a);
function a()
{
var v =  $('#txt').val();
$.ajax
({
  url:"http://api.openweathermap.org/data/2.5/weather?q="+v+"&units=metric"+"&APPID=bf990c711b978836a3fd092f1913ff7e",
  type:"GET",
  datatype:"jsonp",
  success:function(data)
  {
    console.log(data);
    var f=data.main.temp;
    var fa=(f*1.8)+32;
    document.getElementById('temperature').innerHTML=fa;

  }
});
}
});

// function for celcius button
$(document).ready(function(){
$("#celcius").click(a);
function a()
{
var v =  $('#txt').val();
$.ajax
({
  url:"http://api.openweathermap.org/data/2.5/weather?q="+v+"&units=metric"+"&APPID=bf990c711b978836a3fd092f1913ff7e",
  type:"GET",
  datatype:"jsonp",
  success:function(data)
  {
    console.log(data);

    document.getElementById('temperature').innerHTML=data.main.temp;

  }
});
}
});
