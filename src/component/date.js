import './date.css'
function Date(props){
    const month= props.date.toLocaleString('fr-FR',{month: "long"})
    const day = props.date.getDate();
    const year = props.date.getFullYear();

    return (
        <div className="Expenses-date" class="date"> 
        <div className="expense-date_month">{month}</div>
        <div className="expense-date_day">{day}</div>
        <div className="expense-date_year">{year}</div>
        </div>
    )
}
export default Date