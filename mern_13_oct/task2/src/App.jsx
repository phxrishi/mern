import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import users from './users'

const App = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-10 mx-auto">
        <h2 className='text-center mt-2 mb-3'><span className='text-warning'>#Users</span>DetailsList</h2>
        <table className='table'>
          <thead className='table-warning text-light'>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Profile Image</th>
            </tr>
          </thead>
          <tbody>{
            users.map((item, index)=>{
              return(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>
                      <img src={item.image} alt="" height={60} width={60} className=''/>
                      </td>
                </tr>
              )
            })
            }

          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>
  )
}

export default App