
function regionsel(){
  const url = 'assests/sample_long_lat.json';
  var value=document.getElementById('region').value;
  var PM10;
  var t=document.getElementById("v_Table");  
fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        var d= data.Station;
    	  for (let i = 0; i < d.length; i++) {
            if(!value.localeCompare(d[i]._id))
            {
              t.rows[1].cells[1].innerHTML=d[i].Pollutant_Index[0]._Min;
              t.rows[1].cells[2].innerHTML=d[i].Pollutant_Index[0]._Max;
              t.rows[1].cells[3].innerHTML=d[i].Pollutant_Index[0]._Avg;
              t.rows[2].cells[1].innerHTML=d[i].Pollutant_Index[1]._Min;
              t.rows[2].cells[2].innerHTML=d[i].Pollutant_Index[1]._Max;
              t.rows[2].cells[3].innerHTML=d[i].Pollutant_Index[1]._Avg;
              t.rows[3].cells[1].innerHTML=d[i].Pollutant_Index[2]._Min;
              t.rows[3].cells[2].innerHTML=d[i].Pollutant_Index[2]._Max;
              t.rows[3].cells[3].innerHTML=d[i].Pollutant_Index[2]._Avg;
              t.rows[4].cells[1].innerHTML=d[i].Pollutant_Index[3]._Min;
              t.rows[4].cells[2].innerHTML=d[i].Pollutant_Index[3]._Max;
              t.rows[4].cells[3].innerHTML=d[i].Pollutant_Index[3]._Avg;
              t.rows[5].cells[1].innerHTML=d[i].Pollutant_Index[4]._Min;
              t.rows[5].cells[2].innerHTML=d[i].Pollutant_Index[4]._Max;
              t.rows[5].cells[3].innerHTML=d[i].Pollutant_Index[4]._Avg;
              t.rows[6].cells[1].innerHTML=d[i].Pollutant_Index[5]._Min;
              t.rows[6].cells[2].innerHTML=d[i].Pollutant_Index[5]._Max;
              t.rows[6].cells[3].innerHTML=d[i].Pollutant_Index[5]._Avg;
              t.rows[7].cells[1].innerHTML=d[i].Pollutant_Index[6]._Min;
              t.rows[7].cells[2].innerHTML=d[i].Pollutant_Index[6]._Max;
              t.rows[7].cells[3].innerHTML=d[i].Pollutant_Index[6]._Avg; 
            
           document.getElementsByTagName("b")[0].innerHTML=d[i]._id;
           document.querySelectorAll("b.table_text")[0].innerHTML=d[i]._id;  
            document.querySelectorAll("b.table_text")[1].innerHTML= d[i].Pollutant_Index[1]._Max;
            PM10 = d[i].Pollutant_Index[1]._Max; 
                
 
            if(PM10 <= 50){
                document.getElementById('span1').style.backgroundColor="#19E912";
                document.getElementById("span1").innerHTML="Good";
                document.getElementById('span1').style.color="#000000";
            }
                else if(PM10 >= 51 && PM10 <= 100){
                     document.getElementById('span1').style.backgroundColor="#CBDF11";
                     document.getElementById("span1").innerHTML="Satisfactory";
                     document.getElementById('span1').style.color="#000000";
                }
                else if(PM10>=101 && PM10 <= 150){
                  document.getElementById('span1').style.backgroundColor="#EE771C";
                  document.getElementById("span1").innerHTML="Moderate";
                  document.getElementById('span1').style.color="#000000";
                }
                else if(PM10>=151 && PM10 <= 200){
                  document.getElementById('span1').style.backgroundColor="#EC154E";
                  document.getElementById("span1").innerHTML="Poor";
                  document.getElementById('span1').style.color="white";
                }
                else if(PM10>=201 && PM10 <= 300){
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
          
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });
}      