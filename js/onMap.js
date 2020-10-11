var d;
var long =[];
var latt = [];
var len= 0;
var Name= [];
var marker= [];
var pm2_5_Min = [];
var pm2_5_Avg = [];
var pm2_5_Max = [];
var pm10_Avg = [];
var pm10_Min = [];
var pm10_Max = [];
var no2_Avg = [];
var no2_Max = [];
var no2_Min = [];
var nh3_Avg = [];
var nh3_Min = [];
var nh3_Max = [];
var so2_Avg = [];
var so2_Min = [];
var so2_Max = [];
var co_Avg = [];
var co_Min = [];
var co_Max = [];
var ozone_Max = [];
var ozone_Avg = [];
var ozone_Min = [];
var count=[];
var baseLayer;
var mymap;

const url1 = './assests/sample_long_lat.json';
fetch(url1)  
.then(  
     function(response) {  
       if (response.status !== 200) {  
         console.warn('Looks like there was a problem. Status Code: ' + 
           response.status);  
         return;  
       }
     
       // Examine the text in the response  
       response.json().then(function(data) {  
            d= data.Station;
            for(var i=0;i<d.length; i++){
                Name[i]= d[i]._id;
                long[i]= d[i]._long;
                latt[i]= d[i]._lat;
              
                pm2_5_Avg[i] = d[i].Pollutant_Index[0]._Avg;
                pm2_5_Min[i] = d[i].Pollutant_Index[0]._Min;
                pm2_5_Max[i] = d[i].Pollutant_Index[0]._Max;
                pm10_Avg[i]= d[i].Pollutant_Index[1]._Avg;
                pm10_Min[i]= d[i].Pollutant_Index[1]._Min;
                pm10_Max[i]= d[i].Pollutant_Index[1]._Max;
                no2_Avg[i] = d[i].Pollutant_Index[2]._Avg;
                no2_Min[i] = d[i].Pollutant_Index[2]._Min;
                no2_Max[i] = d[i].Pollutant_Index[2]._Max;  
                nh3_Avg[i] = d[i].Pollutant_Index[3]._Avg;
                nh3_Min[i] = d[i].Pollutant_Index[3]._Min;
                nh3_Max[i] = d[i].Pollutant_Index[3]._Max; 
                so2_Avg[i] = d[i].Pollutant_Index[4]._Avg;
                so2_Min[i] = d[i].Pollutant_Index[4]._Min; 
                so2_Max[i] = d[i].Pollutant_Index[4]._Max;  
                co_Avg[i] = d[i].Pollutant_Index[5]._Avg;
                co_Min[i] = d[i].Pollutant_Index[5]._Min;
                co_Max[i] = d[i].Pollutant_Index[5]._Max; 
                ozone_Avg[i] = d[i].Pollutant_Index[6]._Avg;
                ozone_Min[i] = d[i].Pollutant_Index[6]._Min;
                ozone_Max[i] = d[i].Pollutant_Index[6]._Max;  
               
                len++;  
            }   
        myfun();
        })
     }); 
     function myfun(){  
      
       
     mymap = L.map('mapid',{scrollWheelZoom:false}).setView([23, 79], 4.8);
    

     	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    }).addTo(mymap);
    var greenIcon = L.icon({
    iconUrl: 'icons/1.png',

    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});


var customcss={
    'className':'custom'
}
for( var i=0; i < len; i++ ) 
{
    marker[i] =   L.marker( [latt[i], long[i]], {icon: greenIcon})
    .bindTooltip('<b>'+ Name[i] +'</b> <br>' + 'AQI : ' + pm10_Avg[i]+'<br>'+ "Click for more Info" +'</br>',customcss )
   // .bindPopup('<b>'+ Name[i] +'</b> <br>' + 'AQI : ' + PM10[i]+'<br>'+ "Click for more Info" +'</br>',customcss )
    .on("click", function(e){
            func1(e.latlng.lat, e.latlng.lng);
    })
    .addTo(mymap);  
}
   function func1(lt,ln){
        var t=document.getElementById("v_Table");
                for( var i=0;i<len;i++){
                if(lt == latt[i] && ln== long[i]){
                    console.log(pm2_5_Avg[i]);
                    t.rows[1].cells[1].innerHTML=pm2_5_Min[i];
                    t.rows[1].cells[2].innerHTML=pm2_5_Max[i];
                    t.rows[1].cells[3].innerHTML=pm2_5_Avg[i];
                    t.rows[2].cells[1].innerHTML=pm10_Min[i];
                    t.rows[2].cells[2].innerHTML=pm10_Max[i];
                    t.rows[2].cells[3].innerHTML=pm10_Avg[i];
                    t.rows[3].cells[1].innerHTML=no2_Min[i];
                    t.rows[3].cells[2].innerHTML=no2_Max[i];
                    t.rows[3].cells[3].innerHTML=no2_Avg[i];
                    t.rows[4].cells[1].innerHTML=nh3_Min[i];
                    t.rows[4].cells[2].innerHTML=nh3_Max[i];
                    t.rows[4].cells[3].innerHTML=nh3_Avg[i];
                    t.rows[5].cells[1].innerHTML=so2_Min[i];
                    t.rows[5].cells[2].innerHTML=so2_Max[i];
                    t.rows[5].cells[3].innerHTML=so2_Avg[i];
                    t.rows[6].cells[1].innerHTML=co_Min[i];
                    t.rows[6].cells[2].innerHTML=co_Max[i];
                    t.rows[6].cells[3].innerHTML=co_Avg[i];
                    t.rows[7].cells[1].innerHTML=ozone_Min[i];
                    t.rows[7].cells[2].innerHTML=ozone_Max[i];
                    t.rows[7].cells[3].innerHTML=ozone_Avg[i]; 
                    
                    document.getElementsByTagName("b")[0].innerHTML=Name[i];
                    document.querySelectorAll("b.table_text")[0].innerHTML=Name[i];  
                    document.querySelectorAll("b.table_text")[1].innerHTML= pm10_Max[i]; 
                        
        
                    if(pm10_Max[i] <= 50){
                        document.getElementById('span1').style.backgroundColor="#19E912";
                        document.getElementById("span1").innerHTML="Good";
                        document.getElementById('span1').style.color="#000000";
                        
                        }
                        else if(pm10_Max[i] >= 51 && pm10_Max[i] <= 100){
                            document.getElementById('span1').style.backgroundColor="#CBDF11";
                            document.getElementById("span1").innerHTML="Satisfactory";
                            document.getElementById('span1').style.color="#000000";
                          
                        }
                        else if(pm10_Max[i]>=101 && pm10_Max[i] <= 150){
                        document.getElementById('span1').style.backgroundColor="#EE771C";
                        document.getElementById("span1").innerHTML="Moderate";
                        document.getElementById('span1').style.color="#000000";
                      
                        }
                        else if(pm10_Max[i]>=151 && pm10_Max[i] <= 200){
                        document.getElementById('span1').style.backgroundColor="#EC154E";
                        document.getElementById("span1").innerHTML="Poor";
                        document.getElementById('span1').style.color="white";
                      
                        }
                        else if(pm10_Max[i]>=201 && pm10_Max[i] <= 300){
                        document.getElementById('span1').style.backgroundColor="#7215EC";
                        document.getElementById("span1").innerHTML="Very Poor";
                        document.getElementById('span1').style.color="white";
                       
                        }
                        else{
                            document.getElementById('span1').style.backgroundColor="#5A0404";
                            document.getElementById("span1").innerHTML="Hazardous"; 
                            document.getElementById('span1').style.color="white";
                            }
                        
                
                   
                }

            }
    }
   
}


    