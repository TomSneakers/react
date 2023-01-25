import Date from "./date"
import "./Description.css"
function Description (props){

    return(
    <p class="Box">
        <ul >
            <div class="date">
            <li><Date date={props.expense.date}></Date></li>
            </div>
            <div class="titre">
            <li>{props.expense.titre}</li>
            </div>
            <div class="montant">
            <li>{props.expense.montant}€</li>
            </div>
        </ul>
        </p>
    )
}
export default Description