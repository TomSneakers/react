import './App.css';
import Expenses from './component/Expenses';

function App() {

  const aLotOfExpenses = [
    {
      id:'1', 
      titre: 'Netflix',
      montant: 8.99,
      date: new Date(2023, 6 ,8)
    },
    {
      id:'2',
      titre: 'Netflix',
      montant: 8.99,
      date: new Date(2023, 0, 6)
    },
    {
      id:'3',
      titre: 'Netflix',
      montant: 8.99,
      date: new Date(2023, 0, 6)
    },
    {
      id:'4',
      titre: 'Netflix',
      montant: 8.99,
      date: new Date(2023, 0, 6)
    },

  ];
  return (
    <div class="App">
      <div>
        <header class="header">
            <h1 className='Titre'>Tableau des dépenses</h1>
        </header>
      </div>;
      <div class="tableau">
        <Expenses expense={aLotOfExpenses}></Expenses>
      </div>
    </div>

  )

}
export default App;
