import { type Transaction } from "../types/Transaction";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Bar, BarChart, Tooltip } from "recharts";

interface Props {
    transactions: Transaction[],
}

const Graphe =({transactions}:Props)=>{
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

    return(
        <div className="card p-3 shadow mt-4">
                <h3 className="mb-3">Graphiques</h3>
                <ResponsiveContainer height={500} width="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="montant" fill="#0d6efd" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
    )

}

export default Graphe;