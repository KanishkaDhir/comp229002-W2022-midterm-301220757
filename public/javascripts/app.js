//Name-Kanishka Dhir
//StudentID-301220757
console.log('Goes to the client side.');
console.log('App.js--Kanishka Dhir--301220757--Movies')

//displaying delete pop up box before deleting
if(getTitle == "Movie List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}