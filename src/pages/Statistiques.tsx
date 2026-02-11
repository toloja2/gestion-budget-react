import { type Transaction } from "../types/Transaction";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Bar, BarChart, Tooltip } from "recharts";

interface Props {
    transactions: Transaction[],
}


const Statistiques = ({ transactions }: Props) => {

    const data = [
        {
            name: "Revenu",
            montant: transactions.filter(t => t.type === "Revenu").reduce((acc, t) => acc + t.montant, 0)
        },

        {
            name: "Depense",
            montant: transactions.filter(t => t.type === "Depense").reduce((acc, t) => acc + t.montant, 0)
        }
    ]
    const totalRevenu = data.find(d => d.name == "Revenu")?.montant || 0;
    const totalDepense = data.find(d => d.name == "Depense")?.montant || 0
    const solde = totalRevenu - totalDepense;

    return (
        <div className="mt-4">
            <h3 className="mb-3">Statistiques</h3>
            <div className="card p-3 shadow mt-4">
                <p>Total Revenu : {totalRevenu.toLocaleString()} Ar</p>
                <p>Total Dépense : {totalDepense.toLocaleString()} Ar</p>
                <p>Soldes : {solde.toLocaleString()} Ar</p>
            </div>
            <div className="card p-3 shadow mt-4">
                <h3 className="mb-3">Graphiques</h3>
                <ResponsiveContainer height={400} width="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="2 2 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="montant" fill="#0d6efd" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>


    )
}

export default Statistiques;