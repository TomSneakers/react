
import Description from "./Description";
const Expenses = ({ expense }) => {

    return (
        <div>
            <ul>
                {expense.map((myExpenses) => {
                      return (
                      <Description key={myExpenses.id} expense={myExpenses} />
                      );
                    })}
            </ul>
        </div>
    )
}

export default Expenses;