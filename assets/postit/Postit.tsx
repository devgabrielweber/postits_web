'use client';

import styles from './Postit.module.css';
import { useState } from 'react';

interface postitProps {
    id: number,
    codigo: string,
    titulo: string,
    texto: string,
}

interface postitArr {
    postits: postitProps[]
}


export function Postit(dados: postitProps) {
    return (
        <div className={styles.Postit}>
            <div className={[styles.PostitContainerDeTexto, styles.PostitTitulo].join(" ")}>
                <h3 className={styles.PostitCodigo}>{dados.codigo}</h3>
                <p className={styles.PoistitTexto}>
                    {dados.titulo}
                </p>
            </div>
            <div className={[styles.PostitContainerDeTexto, styles.PostitCorpo].join(" ")}>
                <p className={styles.PoistitTexto}>
                    {dados.texto}
                </p>
            </div>
        </div >
    );
}

export default function PostitGrid({ postits = [] }: postitArr) {

    const [idCounter, setId] = useState<number>(1)
    const [postitsAtuais, setPostit] = useState<postitProps[]>([
        ...postits, { id: 1, codigo: "1", titulo: "Primeiro Post-it", texto: "Texto do primeiro post-it" },
    ]);

    const AdicionarPostitAoArray = () => {
        const novoPostit: postitProps = {
            id: idCounter,
            codigo: '#1',
            titulo: 'titulo1',
            texto: 'texto1'
        }

        setPostit((prevPostits) => [...prevPostits, novoPostit])

        setId(idCounter + 1)
    }

    const DeletarPostitDoArray = (id: number) => {
        setPostit(postits.filter(postit => postit.id != id))
    }

    return (
        <div className={styles.PostitGrid}>
            {postitsAtuais.map((postit, i) => (
                <Postit id={postit.id} key={i} codigo={postit.codigo} titulo={postit.titulo} texto={postit.texto} />
            ))}
            <AdicionarPostitProp adicionarPostit={AdicionarPostitAoArray}></AdicionarPostitProp>
        </div>
    );
}

export function AdicionarPostitProp({ adicionarPostit }: { adicionarPostit: () => void }) {
    return (
        <div className={[styles.Postit, styles.addPostit].join(" ")} onClick={adicionarPostit}>
            <p className={styles.PostitContainerDeTexto}> Adicionar Postit </p>
        </div>
    )
}
