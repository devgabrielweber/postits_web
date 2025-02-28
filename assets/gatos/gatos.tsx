"use client"

import { Mongoosegatos } from "@/src/app/pages/mongooseTeste/mongooseTeste"

export async function gatos() {
    const { geraGato, getGatos } = await Mongoosegatos()
    await geraGato({ nome: 'felix', fala: 'miau' })
    const gatos: any = await getGatos()

    return gatos
}

export default async function grid_de_gatos() {
    const gatosRetornados = await gatos()
    var gatosSrtring: String = ''
    gatosRetornados.forEach((e: string) => {
        gatosSrtring.concat(e)
    });
    return <div>`${gatosSrtring}`</div>

}