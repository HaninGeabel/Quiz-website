var xhr=new XMLHttpRequest();
var xmldoc;
window.onload= function getXMLFile() {

  xhr.onreadystatechange = function() {
    document.getElementById("answercal").addEventListener("onclick", function(){getGrade();},false);
    if (xhr.readyState == 4 && xhr.status == 200) {
        xmldoc = xhr.responseXML;
      processXML();
      
     
    }
  };
  xhr.open("GET", "FinalQuiz.xml", true);
  xhr.send();
	
};

function processXML() {

    var i;
    //get data as xml file
    
    //start table
    var table ="";
    //process data by record
    var x = xmldoc.getElementsByTagName("question");
    
      for (i = 0; i <x.length; i++) { 
        //alert(x[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue);
        table += "<tr><td>"+(i+1)+") "+
        x[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue +
        "</td></tr><tr><td><input class='answers' type= radio name=answer"+i+" value=a>" +"  A) "+
        x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue +
        "</td></tr><tr><td> <input class='answers' type= radio name=answer"+i+" value=b>" + "  B) "+
        x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue +
        "</td></tr><tr><td> <input  class='answers' type= radio name=answer"+i+" value=c>" +"  C) "+
        x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue +
        "</td></tr><tr><td> <input class='answers' type= radio name=answer"+i+" value=d>" +"  D) "+
        x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue +
        "</td></tr><tr><td><br>" ;
      
    }
      document.getElementById("displayContent").innerHTML = table;
    
    }
    var Your_Answer= [];
    var y;
    // var correctAnswer ;
    function getGrade(xhr){
       var grade=0;
    var  YourAnswer = document.getElementsByClassName('answers');

    for(var i = 0; i < YourAnswer.length; i++){
    if(YourAnswer[i].checked){
        Your_Answer.push( YourAnswer[i].value);
        
    }
}

       //var radioButtons = document.getElementsByClassName("answers").value;  
       var x =xmldoc.getElementsByTagName("rightanswers");
       for (i = 0; i <x.length; i++){
        y =  x[i].childNodes[0].nodeValue;
        
      }
     var correctAnswer = y.split(',');

      for (i = 0; i <Your_Answer.length; i++){
          
        if (correctAnswer[i]==Your_Answer[i]){
            grade++;
        }
        
        
      }
       
        
        
        
        document.getElementById("grade").innerHTML ="Your grade is "+ grade+"/5";
   
       }
  
      
      
       

        
    

 