import Date from "./date"
function Description (props){

    return(
        <div>
            <Date date={props.expense.date}></Date>
            <div>{props.expense.titre}</div>
            <div>{props.expense.montant}</div>
        </div>
    )

    
}
export default Description