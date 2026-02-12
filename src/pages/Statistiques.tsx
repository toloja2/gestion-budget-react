import ListeTransactions from "../composants/ListetTransactions";
import { type Transaction } from "../types/Transaction";

interface Props {
    transactions: Transaction[],
    onSupprimer: (id: string) => void,
    typeStatistiques: string,
}


const Statistiques = ({ transactions, onSupprimer, typeStatistiques }: Props) => {

    const totalRevenu = transactions.filter(t => t.type === "Revenu").reduce((acc, t) => acc + t.montant, 0);
    const totalDepense = transactions.filter(t => t.type === "Depense").reduce((acc, t) => acc + t.montant, 0);
    const solde = totalRevenu - totalDepense;

    return (
        <div className="mt-4">
            <h3 className="mb-3">Statistique des {typeStatistiques + "s"}</h3>
            <ListeTransactions transactions={transactions} onSupprimer={onSupprimer} typeMessageVide={typeStatistiques} />
            <div className="card p-3 shadow mt-4">
                <div className={typeStatistiques.toLocaleLowerCase() == "revenu" ? "d-none " : "d-flex"}>
                    <label >Total Dépenses :</label>
                    <p className="text-danger mx-4"> {totalDepense.toLocaleString()}Ar</p>
                </div>

                <div className={typeStatistiques.toLocaleLowerCase() == "revenu" || typeStatistiques.toLocaleLowerCase() == "revenu et dépense" ? "d-flex " : "d-none"}>
                    <label>Total Revenus :</label>
                    <p className="text-success mx-4"> {totalRevenu.toLocaleString()}  Ar</p>
                </div>

                <div>
                    <label>Soldes :</label>
                    <p className={solde >= 0 ? "text-success fs-4 fw-bold mx-2" : "text-danger fs-4 fw-bold mx-2"}>{solde.toLocaleString()} Ar</p>
                </div>

            </div>

        </div>


    )
}

export default Statistiques;