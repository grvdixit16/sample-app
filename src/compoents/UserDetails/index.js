import  React from 'react';
let userNameList= [10];



export default function UserDetails(props)
{
   
 const handleUserNameChange = (e)=>
{
    e.preventDefault();
    console.log(userNameList);
}
const updateValue = (e)=>{
    userNameList.push(e.target.value);
}
    return (
        <div >
        <br></br>
        <ul>
            <li>
            <div>
              <label>User Name :</label> 
              <input type='text' name='userName' onChange={updateValue}></input>
           </div>
               <button onClick={handleUserNameChange} >Add User</button>
              
            </li>
            <li>
                <button >Delete User</button>
            </li>
            <li>
                <button >View User List</button>
            </li>
        </ul>
        
        </div>
        
    )
}