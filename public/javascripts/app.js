(function(){
    function Start()
    {
        console.log("Website is up")
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
            {
                button.addEventListener('click',(event)=>{
                    if(!confirm("Are you sure?"))
                    {
                        event.preventDefault();
                        window.location.assign('/notes');
                    }
                });
            }
    }
    window.addEventListener("load", Start);

   
 } )();