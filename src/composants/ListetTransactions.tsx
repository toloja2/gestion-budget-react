import type { Transaction } from "../types/Transaction";

interface Props {
    transactions: Transaction[],
    onSupprimer: (id: string) => void
}

const ListeTransactions = ({ transactions, onSupprimer }: Props) => {


    return (
        <div className="card mt-4 p-3 shadow">
            <h4 className="mb-4">Liste des transactions</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Montant</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id}>
                            <td>{t.titre}</td>
                            <td>{t.montant.toLocaleString()} Ar</td>
                            <td>{t.type}</td>
                            <td>{new Date(t.date).toLocaleDateString()}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => onSupprimer(t.id)}>X</button>
                            </td>
                        </tr>
                    ))}

                    {transactions.length == 0 && (
                        <tr >
                            <td colSpan={5} className="text-center"><div className="alert alert-info">Aucune transaction pour le moment.</div></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default ListeTransactions;