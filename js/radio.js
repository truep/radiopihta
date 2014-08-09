/*http://radiopixta.zapto.org/script/track.txt*/
 function show()  
        {  
            $.ajax({  
                url: "txt/track.txt",  
                cache: false,  
                success: function(html){  
                    $("#title").html(html);  
                }  
            });  
        }  
      
        $(document).ready(function(){  
            show();  
            setInterval('show()',5000);  
        });  


setInterval(function(){
$("#title").load("txt/track.txt");
}, 5000);

