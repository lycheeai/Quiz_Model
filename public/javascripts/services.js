
sampleApp.factory('userRegister',function($http,$location){
    var register = {};

    register.UserRegister= function(){
                 var u_name,email,pass,re_pass;
        var register_data = {u_name:null,email:null,pass:null,re_pass:null};

        //Checking Fields
            getData = function(){
                console.log("nameDisplay")
                 u_name =  register_data.u_name;
                 email =  register_data.email;
                 pass =  register_data.pass;
                 re_pass =  register_data.re_pass;
               // console.log(u_name+email+pass+re_pass);
               return u_name,email,pass,re_pass ;
                }//getData()

        register_data.checkSendData = function(){
                if(!u_name){
                    register_data.error = "Username is less than 5 character";
                }else if(!email){
                    register_data.error = "Email is incorrect ";
                }else if(!pass){
                    register_data.error = "Password is less than 5 character ";
                }else if((!re_pass) || (pass != re_pass)){
                    register_data.error = "Both Password are not same or less than 5 character ";
                }else{register_data.error = "";
                    $http({
                    url:"/regStudent",
                    data:{u_name:u_name,pass:pass,email:email},
                    method:"POST"

                }).success(function(res){
                        console.log("res:"+res);

                        $location.path('/signin')
                        //console.log("registered")

                    }).error(function(){ alert("Error")   ; });}
            }//checkSendData

        return register_data;
    }//UserRegister
          return register;

});//userRegister Factory
