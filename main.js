
var images = [
    "https://s3-projectsassets.whjr.online/Monkey_01.png",
    "https://s3-projectsassets.whjr.online/Monkey_02.png",
    "https://s3-projectsassets.whjr.online/Monkey_03.png",
    "https://s3-projectsassets.whjr.online/Monkey_04.png",
    "https://s3-projectsassets.whjr.online/Monkey_05.png",
    "https://s3-projectsassets.whjr.online/Monkey_06.png",
    "https://s3-projectsassets.whjr.online/Monkey_07.png",
    "https://s3-projectsassets.whjr.online/Monkey_08.png",
    "https://s3-projectsassets.whjr.online/Monkey_09.png",
    "https://s3-projectsassets.whjr.online/Monkey_10.png"
    ];
    
    //initialize the variable i to 0
    var i=0 ;
    function nextslide() { 
     
       if(i == 9)
         {
           i=0;
         }
        //add images[i] to add new image link to image component.
        document.getElementById("album").src =images[i];
      i++;
     
    }
    
    
    