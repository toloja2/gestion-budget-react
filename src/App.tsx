

import './App.css';
import { type Transaction } from './types/Transaction';
import { useLocalStorage } from './hooks/useLocalStorage';
import Dashboard from './pages/Dashboard';
import Statistiques from './pages/Statistiques';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [transactions, setTransactions] = useLocalStorage<Transaction[]>("transactions", []);
  const ajouterTransaction = (nouvelleTransaction: Transaction) => {
    setTransactions([...transactions, nouvelleTransaction])
  }

  const supprimerTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  }

  return (


    <BrowserRouter>
      <div className="container mt-5">

        <h1 className="text-center text-primary mb-4 fw-bold">
          Gestionnaire de Budget
        </h1>

        <nav className="mb-4">
          <Link to="/" className='btn btn-primary me-2'>Dashboard</Link>
          <Link to="/statistiques" className='btn btn-secondary'>Statistiques</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Dashboard
            transactions={transactions}
            onAjouter={ajouterTransaction}
            onSupprimer={supprimerTransaction}
          />}/>

          <Route path='/statistiques' element={
            <Statistiques transactions={transactions}/>
          }
           />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
