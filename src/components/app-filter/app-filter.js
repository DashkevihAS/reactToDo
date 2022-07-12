import "./app-filter.css";

const AppFilter = ({onFilterSelect, filter}) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = name === filter;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={()=>onFilterSelect(name)}
                    >
                    {label}
                    
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;