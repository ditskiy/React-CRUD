import "./app-filter.css"

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            tupe="button">
                Все сотрудники
            </button>
            <button 
            className="btn btn-outline-light"
            tupe="button">
                На Повышение
            </button>
            <button 
            className="btn btn-outline-light"
            tupe="button">
                З/П больше 1000$
            </button>
        </div>
    );
}

export default AppFilter;