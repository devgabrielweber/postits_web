"use server"
import { getMongoose } from "@/database/mongoconnection"
import { grid_de_gatos } from "@/assets/gatos/gatos"

export async function Mongoosegatos() {

    const mongoose = await getMongoose()
    interface gatoSchema {
        nome: String,
        fala: String
    }
    const gatoSchema = new mongoose.Schema({
        nome: String,
        fala: String
    })
    const Gato = mongoose.models.Gato || mongoose.model('Gato', gatoSchema);
    const geraGato = async ({ nome, fala }: gatoSchema) => {
        let novoGato = new Gato({ nome: nome, fala: fala })
        await novoGato.save()
        return novoGato
    }
    const getGatos = async () => {
        return Gato.find()
    }

    return {
        geraGato,
        getGatos
    }
}

export default async function main() {
    return grid_de_gatos()
}