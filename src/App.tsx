

import './App.css';
import { type Transaction } from './types/Transaction';
import { useLocalStorage } from './hooks/useLocalStorage';
import Dashboard from './pages/Dashboard';
import Statistiques from './pages/Statistiques';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Graphe from './composants/Graphe';

function App() {

  const [transactions, setTransactions] = useLocalStorage<Transaction[]>("transactions", []);
  const ajouterTransaction = (nouvelleTransaction: Transaction) => {
    setTransactions([...transactions, nouvelleTransaction])
  }

  const supprimerTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  }

  const transactionFiltresRevenu = transactions.filter((t) => t.type === "Revenu");
  const transactionFiltresDepense = transactions.filter((t) => t.type === "Depense");

  return (


    <BrowserRouter>
      <div className="container mt-5">

        <h1 className="text-center text-primary mb-4 fw-bold">
          Gestionnaire de Budget
        </h1>

        <nav className="mb-4">
          <Link to="/" className='btn btn-primary me-3 mb-4'>Dashboard</Link>
          <Link to="/statistiques" className='btn btn-secondary me-3 mb-4'>Statistiques</Link>
          <Link to="/statistiques/Revenu" className="btn btn-success me-3 mb-4">Détail des revenus</Link>
          <Link to="/statistiques/Depense" className="btn btn-danger me-2 mb-4 ">Détail des dépenses </Link>
        </nav>

        <Routes>
          <Route path='/' element={<Dashboard
            transactions={transactions}
            onAjouter={ajouterTransaction}
            onSupprimer={supprimerTransaction}
          />} />

          <Route path='/statistiques' element={
            <>
            <Statistiques transactions={transactions}  onSupprimer={supprimerTransaction} typeStatistiques='Revenu et Dépense'/>
            <Graphe transactions={transactions} />
            </>
            
          }
          />

          <Route path='/statistiques/Revenu' element={
            <Statistiques transactions={transactionFiltresRevenu}  onSupprimer={supprimerTransaction} typeStatistiques='Revenu'/>
          }
          />
          <Route path='/statistiques/Depense' element={
            <Statistiques transactions={transactionFiltresDepense} onSupprimer={supprimerTransaction} typeStatistiques='Dépense' />
          }
          />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
