
//consulta();
$(function(){
    $("#chat-container").parents('#main_container').addClass('main_container_parent');
    $("body").css('background-color','#f2f2f2');
})


     function appendChat(){
         var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
         $("#toggleIcon").toggleClass("fa fa-angle-double-down fa fa-angle-double-up")
         $("#wrapper-chat").toggleClass("toggled");

         if(isIE11){
            if($("#wrapper-chat").hasClass("toggled")){
             $('#sidebar-wrapper').css("margin-left", "-268px")
            }
            else {
              $('#sidebar-wrapper-chat').css("margin-left", "-250px")
            }
        }
     }

     function consulta() {
         fetch('/plugins/un_colab/api/score_task_user',{course_id: 'group-5'}).then((result)=>{

           console.log(result)
       })
     }

