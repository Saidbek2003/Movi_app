import './app.css'
import Info from "../info/info"
import AppFilter from "../appFilter/appFilter"
import SearchPanel from "../searchPanel/searchPanel"
import Movilist from '../moviList/movilist'
import Movi_add_form from '../movi-add-form/movi-add-form'
const App = ()=>{
   return  (

<div className="app font-momospace">
    <div className="content">
        <Info/>
        <div className='searchPanel'>  
            <SearchPanel/>
            <AppFilter/>
        </div>
            <Movilist/> 
       <Movi_add_form/>

    </div>
</div>


   )
}
export default App