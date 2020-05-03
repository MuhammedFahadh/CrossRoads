$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
            cfname:{
                required:true,
                minlength:4,
                maxlength:12
            },
            cfmobile:{
                required:true,
                number:true,
                minlength:10,
                maxlength:15
            },
            cfemail:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:4,
                maxlength:20
            },
            cfmessage:{
                required:true,
                minlength:5,
                maxlength:100
            }
        },
        messages:{
            cfname:{
                required:"Please enter your name",
                minlength:"Enter atleast 4 characters"
            },
            cfmobile:{
                required:"Please enter your mobile number",
                number:"Enter valid mobile number",
                minlength:"Enter valid mobile number",
                maxlength:"Enter valid mobile number"
            },
            cfemail:{
                required:"Please enter your mail id",
                email:"Enter valid mail id"
            },
            subject:{
                required:"Please enter your subject",
                minlength:"Enter atleast 4 characters",
                maxlength:"You have reached your maximum limit of characters allowed"
            },
            cfmessage:{
                required:"Please enter your message",
                minlength:"Enter atleast 5 characters",
                maxlength:"You have reached your maximum limit of characters allowed"
            }
        }
    })
})