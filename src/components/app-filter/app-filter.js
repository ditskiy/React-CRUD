import "./app-filter.css"

const AppFilter = (props) => {
    const bottonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "like", label: "На Повышение"},
        {name: "moreThen1000", label: "З/П больше 1000$"},
    ];

    const bottons = bottonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light"
        return (
            <button 
                className={`btn ${clazz}`}
                tupe="button"
                key={name}
                onClick={() => props.onFilterSelector(name)}>
                {label}
            </button>
        )   
    })


    return (
        <div className="btn-group">
            {bottons}
        </div>
    );
}

export default AppFilter;