<<<<<<< HEAD
$(document).ready(function() {
    //make sure everything is loaded before we start

    /////////////// *********index***********/////////////////

    // $(document).on("submit", "#signIn", handleSignIn);

    $(document).on("submit", "#senate-search", getSenators);


        $("#signIn").on("submit", function(event){
            console.log("i work!");
            event.preventDefault();
            var signIn={
                email: $("#signInEmail").val().trim(),
                password: $("#signInPassword").val().trim()
            }
            console.log(signIn);
        //add post route to check login against our db 
        //add get route to route to profile page populated with
        //saved table and comments?   
        })
            
        $("#newUser").on("click", function(event){
            event.preventDefault();
            var newUserData ={
                name: $("#username").val().trim(),
                location: $("#location").val().trim()
            }
            var newLoginData = {
                username: $("#email").val().trim(),
                password: $("#password").val().trim()
    
            }
            console.log($("#location").val().trim())
            console.log(newUserData);
            // console.log(newLoginData);
        //add post route to add this to  db
        // add get route to route to profile page?
        })

        // function addNewUser(newUserData) {
        //     $.post("/api/user", newUserData)
        //         .then(getUser)
        // }
    
        //////
        // decide if we want forgot password functionality
        //////
    
    
    
    ///////////////****** Search pages*********////////////
    
       //
        $("#createQuery").on("submit", function(event){
            event.preventDefault();
            var a = $("byParty").val();
            var b = $("byState").val();
            var c = $("byGender").val();
            var d = $("byname").val();
            console.log(a,b,c,d);
            // set up conditionals for if one field selected 2 if 3 
        })
     
    })
=======
$(function(){
//make sure everything is loaded before we start

/////////////// *********index***********/////////////////
    $("#signIn").on("submit", function(event){
        event.preventDefault();
        var signIn={
            email: $("#signInEmail").val().trim(),
            password: $("#signInPassword").val().trim()
        }
        console.log(signIn);
    //add post route to check login against our db 
    //add get route to route to profile page populated with
    //saved table and comments?   
    })
    $("#newUser").on("click", function(event){
        event.preventDefault();
        var newUserData ={
            name: $("#username").val().trim(),
            location: $("#location").val().trim()
        }
        var newLoginData = {
            username: $("#email").val().trim(),
            password: $("#password").val().trim()

        }
        console.log($("#location").val().trim())
        console.log(newUserData);
    //add post route to add this to  db
    // add get route to route to profile page?
    })


    //////
    // decide if we want forgot password functionality
    //////



///////////////****** Search pages*********////////////
//////////house
    $("#createQuery").on("click", function(event){
        event.preventDefault();
        var query = {
            branch: $("#byBranch").val().trim(),
            party: $("#byParty").val().trim(),
            state: $("#byState").val().trim(),
            gender: $("#byGender").val().trim(),
            name: $("#byname").val().trim()
        };
        if(!query.branch && !query.party && !query.state && !query.gender && !query.name){
            console.log("this an empty query my friend")
        }
        else if (!query.branch && !query.party && !query.state && !query.gender){
            $.ajax({
                method: "GET",
                url: "/api/postspi/representative/:name",
                data: query
              })
                .then(function(response) {
                  console.log(response);
                });
        }
    })
    
 
})
>>>>>>> master
