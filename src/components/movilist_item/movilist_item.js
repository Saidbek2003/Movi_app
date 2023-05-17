import "./movilist_item.css"

const Movilist_item = () => {
  return (
   <li className="list-group-item d-flex justify-content-between align-item-center">
    <span className="list-group-item-label">Empirs of Osam</span>
    <input type="number" className="list-group-item-input" />
    <div className="d-flex justify-content-center align-items-center">
      <button type="button"className="btn-cookie btn-sm" >
      <i class="fa-solid fa-cookie"></i>
      </button>
      <button type="button"className="btn-trash btn-sm" >
      <i class="fa-solid fa-trash"></i>
      </button>
      <i class="fa-regular fa-star"></i>
    </div>
   </li>
  )
}

export default Movilist_item
