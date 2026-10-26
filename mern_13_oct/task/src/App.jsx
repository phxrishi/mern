import React from 'react'
import details from './details'
import 'bootstrap/dist/css/bootstrap.css'


const App=()=> {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-10 mx-auto">
          <h2 className='text-center mt-2 mb-4'><span className='text-danger my-4'>#Ekart</span>ProductList</h2>
         <h4 className='my-3'>Total Number Of Products : {details.length}</h4>

          <table className='table'>
            <thead className='table-info'>
              <tr>
                <th>Sr.No</th>
                <th>Title </th>
                <th>Rating</th>
                <th>Price</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              
              {
                details.map((item, index)=>{
                  return(
                   <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.rating}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.thumbnail} alt="" height={70} width={70}/>
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