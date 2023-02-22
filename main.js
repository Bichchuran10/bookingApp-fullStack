const save=async(event)=>{
    try{
        event.preventDefault()
        const name=event.target.name.value;
        const email=event.target.email.value;
        const phonenumber=event.target.phonenumber.value;

        const user={
            name,
            email,
            phonenumber
        }

    let response=await axios.post('http://localhost:3000/user/add-user',user)
    showNewBookingsOnScreen(response.data.newUserDetail)
    }
    catch(e)
    {
        console.log(e)
        document.body.innerHTML=document.body.innerHTML+"<h3>Something went wrong </h3>"
    }
}
//window.addEventListener
window.addEventListener('DOMContentLoaded',async()=>{
    try{
    let response=await axios.get('http://localhost:3000/user/get-users')
    for(let i=0;i<response.data.allUsers.length;i++)
    {
        console.log(response.data.allUsers[i])

        showNewBookingsOnScreen(response.data.allUsers[i]);
    }
    }catch(e)
    {
        console.log(e)
    }

})

const showNewBookingsOnScreen=(user)=>{

    const parentNode=document.getElementById('listOfUsers');
   // console.log(`hello name ${user.name}, email ${user.email}, phone is ${user.phonenumber}`)
    const childHTML=`<li id=${user.id}> Name: ${user.name} Email: ${user.email} Phone: ${user.phonenumber}
                    <button onclick=deleteUser('${user.id}')>Delete User</button>
                    <button onclick=editUser('${user.name}','${user.email}','${user.phonenumber}','${user.id}')>Edit User</button></li>`
    
    parentNode.innerHTML=parentNode.innerHTML+childHTML;

}

const deleteUser=async(id)=>{
    try{
        //console.log(`hahaahhahha ${id}`)
        await axios.delete(`http://localhost:3000/user/delete-user/${id}`)
        console.log(`${id} will be deleted`)
        removeUserFromScreen(id)
    }
    catch(e)
    {
        console.log(e)
    }
    
}

const removeUserFromScreen=(id)=>{
    try{
    const parentNode=document.getElementById('listOfUsers');
    const childNodeToBeDeleted=document.getElementById(id);
    parentNode.removeChild(childNodeToBeDeleted)
    }
    catch(e)
    {
        console.log("Couldn't delete",e)
    }
}

const editUser=(name,email,phonenumber,id)=>{

    try{
        document.getElementById('name').value=name
        document.getElementById('mail').value=email
        document.getElementById('number').value=phonenumber
        deleteUser(id)
    }
    catch(e)
    {
        console.log("editing failed",e)
    }

}