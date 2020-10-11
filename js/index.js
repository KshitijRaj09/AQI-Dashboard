function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
function defaultpage(){
    document.getElementById("defaultOpen").click();
/* fetch('sample.json')
.then((res) => res.json())
.then((data) => {
    // console.log(data.Station[0]._id);
 //});
     let output = `<h2>Users<h2>`
    Object.keys(data).forEach(function(key){
        output+= `<ul><li>
            Region: ${key._id}</li></ul>` ;
        console.log(data[key]);
       +\    
     });*/
}
function pageload(){
  
  var PM10;
  var t=document.getElementById("v_Table");
  let dropdown = document.getElementById('region');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Region';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var url = 'assests/sample.json';

  fetch(url)  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.warn('Looks like there was a problem. Status Code: ' + response.status);  
          return;  
        }

        // Examine the text in the response  
        response.json().then(function(data) {  
          let option;
      
        for (let i = 0; i < data.Station.length; i++) {
            option = document.createElement('option');
            option.text = data.Station[i]._id;
            option.value = data.Station[i]._id;;
            dropdown.add(option);
        }  
        
        var d=data.Station;
        //Default region
        t.rows[1].cells[1].innerHTML=d[0].Pollutant_Index[0]._Min;
        t.rows[1].cells[2].innerHTML=d[0].Pollutant_Index[0]._Max;
        t.rows[1].cells[3].innerHTML=d[0].Pollutant_Index[0]._Avg;
        t.rows[2].cells[1].innerHTML=d[0].Pollutant_Index[1]._Min;
        t.rows[2].cells[2].innerHTML=d[0].Pollutant_Index[1]._Max;
        t.rows[2].cells[3].innerHTML=d[0].Pollutant_Index[1]._Avg;
        t.rows[3].cells[1].innerHTML=d[0].Pollutant_Index[2]._Min;
        t.rows[3].cells[2].innerHTML=d[0].Pollutant_Index[2]._Max;
        t.rows[3].cells[3].innerHTML=d[0].Pollutant_Index[2]._Avg;
        t.rows[4].cells[1].innerHTML=d[0].Pollutant_Index[3]._Min;
        t.rows[4].cells[2].innerHTML=d[0].Pollutant_Index[3]._Max;
        t.rows[4].cells[3].innerHTML=d[0].Pollutant_Index[3]._Avg;
        t.rows[5].cells[1].innerHTML=d[0].Pollutant_Index[4]._Min;
        t.rows[5].cells[2].innerHTML=d[0].Pollutant_Index[4]._Max;
        t.rows[5].cells[3].innerHTML=d[0].Pollutant_Index[4]._Avg;
        t.rows[6].cells[1].innerHTML=d[0].Pollutant_Index[5]._Min;
        t.rows[6].cells[2].innerHTML=d[0].Pollutant_Index[5]._Max;
        t.rows[6].cells[3].innerHTML=d[0].Pollutant_Index[5]._Avg;
        t.rows[7].cells[1].innerHTML=d[0].Pollutant_Index[6]._Min;
        t.rows[7].cells[2].innerHTML=d[0].Pollutant_Index[6]._Max;
        t.rows[7].cells[3].innerHTML=d[0].Pollutant_Index[6]._Avg; 
      
     document.getElementsByTagName("b")[0].innerHTML=d[0]._id;
     document.querySelectorAll("b.table_text")[0].innerHTML=d[0]._id;  
      document.querySelectorAll("b.table_text")[1].innerHTML= d[0].Pollutant_Index[1]._Max;
      PM10 = d[0].Pollutant_Index[1]._Max; 
          

      if(PM10 <= 50){
          document.getElementById('span1').style.backgroundColor="#19E912";
          document.getElementById("span1").innerHTML="Good";
      }
          else if(PM10 >= 51 && PM10 <= 100){
               document.getElementById('span1').style.backgroundColor="#CBDF11";
               document.getElementById("span1").innerHTML="Satisfactory";
          }
          else if(PM10>=101 && PM10 <= 150){
            document.getElementById('span1').style.backgroundColor="#EE771C";
            document.getElementById("span1").innerHTML="Moderate";
          }
          else if(PM10>=151 && PM10 <= 200){
            document.getElementById('span1').style.backgroundColor="#EC154E";
            document.getElementById("span1").innerHTML="Poor";
          }
          else if(PM10>=201 && PM10 <= 300){
            document.getElementById('span1').style.backgroundColor="#7215EC";
            document.getElementById("span1").innerHTML="Very Poor";
          }
          else{
               document.getElementById('span1').style.backgroundColor="#5A0404";
               document.getElementById("span1").innerHTML="Hazardous";                 
              }
        
        });  
      }  
    )  
    .catch(function(err) {  
      console.error('Fetch Error -', err);  
    });

    var d = new Date();
    var n = d.toLocaleTimeString();
    document.querySelector("u").innerHTML = n;
}
      