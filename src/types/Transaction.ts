
export interface Transaction {
    id: string,
    titre: string,
    montant: number,
    type: "Revenu" | "Depense",
    categorie: string,
    date: string
}
