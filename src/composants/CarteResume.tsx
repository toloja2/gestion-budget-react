import { Link } from "react-router-dom";
import { type Transaction } from "../types/Transaction"

interface Props {
    transactions: Transaction[],
}

const CarteResume = ({ transactions }: Props) => {
    const totalRevenu = transactions.filter(t => t.type === "Revenu").reduce((acc, t) => acc + t.montant, 0);
    const totalDepense = transactions.filter(t => t.type === "Depense").reduce((acc, t) => acc + t.montant, 0);
    const solde = totalRevenu - totalDepense;

    return (
        <div className="row mt-4 ">
            <div className="col-md-4 mb-3 ">
                <div className="card text-center p-3 shadow">
                    <h5>Total Revenu(s)</h5>
                    <p className="text-success fs-4">{totalRevenu.toLocaleString()} Ar</p>
                    <Link to="/statistiques/Revenu" className="btn btn-success ">Voir le Détail</Link>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card text-center p-3 shadow">
                    <h5>Total Dépense(s)</h5>
                    <p className="text-danger fs-4">{totalDepense.toLocaleString()} Ar</p>
                    <Link to="/statistiques/Depense" className="btn btn-danger ">Voir le Détail</Link>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card text-center p-3 shadow">
                    <h5>Solde(s)</h5>
                    <p className={solde >= 0 ? "text-success fs-4" : "text-danger fs-4"}>{solde.toLocaleString()} Ar</p>
                </div>
            </div>
        </div>
    )

}

export default CarteResume;