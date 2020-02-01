
$(function(){
   //$("#wrapper-chat").prop("hidden", true);
    function appendChatButton() {
        // this function add button in the frontend task
        const html = "<br><button onclick='appendChat()' id='menu-toggle' class='btn btn-secondary'><i id=\"toggleIcon\" class=\"fa fa-angle-double-up\"></i> Collaboration</button>";
        let task_panel = $('#task');
        task_panel.append(html);
    }
    appendChatButton();
});

     function appendChat(){
         var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
         $("#toggleIcon").toggleClass("fa fa-angle-double-up fa fa-angle-double-down")
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

