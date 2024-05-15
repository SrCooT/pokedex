import './pagination.css'

const Pagination = (props) => {
    const {page, totalPages , onLeftClick, onRightClick} = props
    return (
        <div className="loading-pokemons">

                <button onClick={onLeftClick}><div className='seta'>⬅️</div></button>
                <div>{page} de {totalPages}</div>
                <button onClick={onRightClick}><div className='seta'>➡️</div></button>
        </div>
    )
}
export  default Pagination ;