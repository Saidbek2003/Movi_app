import "./movi-add-form.css"

function Movi_add_form() {
  return (
    <div className='movi_add_form'>
     <h3>Yangi kino qo'shish</h3> 
     <form className="addd-form d-flex">
        <input type="text" className="form-control new-post-label " placholder="qanday kino"/>
        <input type="text" className ="form-control new-post-label" placholder="Necha marta ko'rilgan "/>
         <button className="btn btn-outline-dark">
            Qo'shish
         </button>
        </form>  
        </div>
  )
}

export default Movi_add_form