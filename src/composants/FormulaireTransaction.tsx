import { useState } from "react";
import type { Transaction } from "../types/Transaction";

interface Props {
    onAjouter: (transaction: Transaction) => void
}

const categories = [
    "Nourriture",
    "Transport",
    "Loyer",
    "Salaire",
    "Loisir",
    "Autre"
]

const FormulaireTransaction = ({ onAjouter }: Props) => {
    const [titre, setTitre] = useState('');
    const [montant, setMontant] = useState('');
    const [type, setType] = useState('Revenu');
    const [categorie, setCategorie] = useState('');
    const [erreur, setErreur] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!titre || Number(montant) <= 0) {
            setErreur("Veuillez remplir correctement tous les champs")
        }

        setErreur("")
        const nouvelleTransaction: Transaction = {
            id: Date.now().toString(),
            titre: titre,
            montant: Number(montant),
            categorie: categorie,
            type: type as "Revenu" | "Depense",
            date: new Date().toDateString()
        }

        onAjouter(nouvelleTransaction);
        setTitre('');
        setMontant("");
        setType('Revenu');
    }

    return (
        <div className="card p-4 shadow">
            {erreur && (
                <div className="alert alert-danger">{erreur}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="fom-label">Titre</label>
                    <input type="text" className="form-control" value={titre} required onChange={(e) => setTitre(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Montant (Ariary)</label>
                    <input type="number" className="form-control" required value={montant} onChange={(e) => setMontant(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select className="form-select" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="Revenu">Revenu</option>
                        <option value="Depense">Depense</option>
                    </select>
                </div>
                <div className="mb-3 mt-4">
                    <label className="form-label">Catégories</label>
                    <select className="form-select" value={categorie} onChange={(e) => setCategorie(e.target.value)} required>
                        <option value="" disabled>Choisir un catégorie</option>
                        {
                            categories.map((cat, index) => (
                                <option key={index} value={cat}> {cat}</option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={!titre || Number(montant) <= 0}>Ajouter</button>
            </form>
        </div>
    )

}

export default FormulaireTransaction;