import React from 'react'
import '../assets/css/css-crud/crudPage.css'
import Add from '../crudPages/Add'
import Delete from '../crudPages/Delete'
import Update from '../crudPages/Update'

export default function crudPage() {
  return (
    <>
        <div className='crud-head center'> CRUD PAGE </div>

        <div className='crud-body'>
        <div class="crudCont">
             <div class="add"><Add/></div>
             <div class="update"><Update/></div>
             <div class="delete"><Delete/></div>
        </div>
        </div>  
    </>
  )
}
