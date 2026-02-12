import { useState } from "react";
import type { Transaction } from "../types/Transaction";

interface Props {
    transactions: Transaction[],
    onSupprimer: (id: string) => void,
    typeMessageVide: string,
}

const ListeTransactions = ({ transactions, onSupprimer, typeMessageVide }: Props) => {

    const [filtre, setFiltre] = useState("");
    const transactionFiltres = transactions.filter((t) => t.titre.toLocaleLowerCase().includes(filtre.toLocaleLowerCase()));
    return (
        <div className="card mt-4 mt-md-0 p-3 shadow">
            <h4 className="mb-4">Liste des {typeMessageVide.toLocaleLowerCase()+"s"}</h4>
            <div className="mb-3">
                <input type="text" className="form-control" value={filtre} placeholder="Rechercher titre..." onChange={(e) => { setFiltre(e.target.value) }} />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Catégorie</th>
                        <th>Montant</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {transactionFiltres.map((t) => (
                        <tr key={t.id}>
                            <td>{t.titre}</td>
                            <td>{t.categorie}</td>
                            <td className={t.type === "Depense" ? "text-danger" : "text-success"}>{t.montant.toLocaleString()} Ar</td>
                            <td>{t.type}</td>
                            <td className="text-muted">{new Date(t.date).toLocaleDateString()}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => onSupprimer(t.id)}>X</button>
                            </td>
                        </tr>
                    ))}

                    {transactions.length == 0 && (
                        <tr >
                            <td colSpan={6} className="text-center"><div className="alert alert-info">{typeMessageVide.toLocaleLowerCase()=="revenu"? "Aucun":"Aucune"} {typeMessageVide.toLocaleLowerCase()} pour le moment.</div></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default ListeTransactions;