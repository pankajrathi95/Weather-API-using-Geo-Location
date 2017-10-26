$(document).ready(function() {
  var lat;
  var long;
  var url;
  if(navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(function(position) {        
      lat = position.coords.latitude;
      long = position.coords.longitude;
      
      url = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;
     
      $.getJSON(url,function(json) {
       // $(".message").html(JSON.stringify(json)
                       //   );
        var tempType = json.weather[0].main;
     //   $(".type").append(tempType);
        $(".type").html("<img src='"+json.weather[0].icon+"'>").append(tempType);
        $(".area").html(json.name);
        $(".temp").html(json.main.temp+"&deg; C");
        $("#tempChange").click(function() {
            
          var x1 = $('.temp').text();
          console.log(x1);
          if(x1.indexOf("F") > -1){
            //alert('Found it');
            $(".temp").html(json.main.temp+"&deg; C");
          }
          else{
             //alert('Not present');
            var farenheit = json.main.temp * 1.8 + 32;
          $(".temp").html(farenheit+"&deg; F");
            
          }
        })
      });
    });
  }           
});