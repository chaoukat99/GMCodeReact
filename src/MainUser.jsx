import React from 'react'

function MainUser() {


    let user={
         id:Math.floor(Math.random()*999999999),
         username:"Samir",
         email:"Samir@gmail.com",
         role:"user",
         is_connected:false
    }
  return (
    <>
    <h1>
        Espace   {user.role=="admin"?"Administrateur":"Normal Usser"} 
    </h1>
    <table className='table table-hover'>
        <thead>
            <tr>
                <td>Id</td>
                <td>User</td>
                <td>Action</td>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>1023098</td>
            <td>Karim</td>
            <td>
                {user.role=="user"?<button className='btn btn-info'>Voir</button>:
                <>
                <button className='btn btn-warning'>Update</button>
                <button className='btn btn-danger'>Delete</button>
                </>
                }
            </td>
            </tr>
            <tr>
            <td>1023098</td>
            <td>Karim</td>
            <td>
                {user.role=="user"?<button className='btn btn-info'>Voir</button>:
                <>
                <button className='btn btn-warning'>Update</button>
                <button className='btn btn-danger'>Delete</button>
                </>
                }
            </td>
            </tr>
            <tr>
            <td>1023098</td>
            <td>Karim</td>
            <td>
                {user.role=="user"?<button className='btn btn-info'>Voir</button>:
                <>
                <button className='btn btn-warning'>Update</button>
                <button className='btn btn-danger'>Delete</button>
                </>
                }
            </td>
            </tr>
            <tr>
            <td>1023098</td>
            <td>Karim</td>
            <td>
                {user.role=="user"?<button className='btn btn-info'>Voir</button>:
                <>
                <button className='btn btn-warning'>Update</button>
                <button className='btn btn-danger'>Delete</button>
                </>
                }
            </td>
            </tr>
        </tbody>
    </table>

</>
  )
}

export default MainUser