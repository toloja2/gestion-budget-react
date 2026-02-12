import { type Transaction } from "../types/Transaction"
import FormulaireTransaction from "../composants/FormulaireTransaction";
import ListeTransactions from "../composants/ListetTransactions";
import CarteResume from "../composants/CarteResume";



interface Props {
    transactions: Transaction[],
    onSupprimer: (id: string) => void,
    onAjouter: (t: Transaction) => void
}

const Dashboard = ({ transactions, onAjouter, onSupprimer }: Props) => {
    return (

        <div className="row align-items-center">
            <div className="col-md-5">
                <FormulaireTransaction onAjouter={onAjouter} />
            </div>
            <div className="col-md-7">
                <CarteResume transactions={transactions} />
                <ListeTransactions transactions={transactions} onSupprimer={onSupprimer} typeMessageVide="revenu et depense"/>
            </div>
        </div>



    )
}

export default Dashboard;