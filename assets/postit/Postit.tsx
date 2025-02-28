'use client';

import { kMaxLength } from 'buffer';
import styles from './Postit.module.css';
import { useState, useRef, useEffect } from 'react';

interface postitProps {
    id: number,
    codigo: string,
    titulo: string,
    texto: string,
}

interface postitArr {
    postits: postitProps[]
}

interface InputTamanhoDinamico {
    valor: string
    className: string
    maxLength: number
}


export function InputTamanhoDinamico({ valor, className, maxLength }: InputTamanhoDinamico) {
    const [valorInput, setValor] = useState(valor)
    const [tamanho, setTamanho] = useState(valor.length + 1)

    const handleOnKeyPress = (e: any) => {
        setTamanho(e.target.value.length + 1)
        setValor(e.target.value)
    }

    return <input type='text' style={{ width: `${tamanho}ch` }} onChange={handleOnKeyPress} defaultValue={valorInput} className={className} maxLength={maxLength}></input >
}

export function TextBoxTamanhoDinamico({ valor, className, maxLength }: InputTamanhoDinamico) {
    const [valorInput, setValor] = useState(valor)
    const [tamanho, setTamanho] = useState(valor.length + 2)
    const [scrollHeight, setScrollHeight] = useState(30)

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleOnKeyPress = (e: any) => {
        setValor(e.target.value)
    }


    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'
            setScrollHeight(textAreaRef.current.scrollHeight)
            textAreaRef.current.style.height = `${scrollHeight}px`

            var linhas = valorInput.split("\n")

            var maiorElemento = linhas.reduce((a, b) => (a.length >= b.length ? a : b))
            var maiorElementoLength = 20
            if (maiorElemento.length < 20) {
                maiorElementoLength = 20
            } else {
                maiorElementoLength = maiorElemento.length
            }
            setTamanho(maiorElementoLength + 1)
        }
    }, [valorInput])

    return <textarea ref={textAreaRef} style={{ width: `${tamanho}ch`, height: `${scrollHeight}px` }} onChange={handleOnKeyPress} defaultValue={valorInput} className={className} maxLength={maxLength}></textarea >
}

export function Postit(dados: postitProps) {
    return (
        <div className={styles.Postit}>
            <div className={[styles.PostitContainerDeTexto, styles.PostitTitulo].join(" ")}>
                <h3 className={styles.PostitCodigo}><InputTamanhoDinamico valor={dados.codigo} className={[styles.PostitTexto, styles.postitInput].join(" ")} maxLength={5}></InputTamanhoDinamico></h3>
                <p className={styles.PoistitTexto}>
                    <InputTamanhoDinamico valor={dados.titulo} className={[styles.PostitTexto, styles.postitInput].join(" ")} maxLength={62}></InputTamanhoDinamico>
                </p>
            </div>
            <div className={[styles.PostitContainerDeTexto, styles.PostitCorpo].join(" ")}>
                <p className={styles.PoistitTexto}>
                    <TextBoxTamanhoDinamico valor={dados.texto} className={[styles.PostitTexto, styles.postitInput].join(" ")} maxLength={3000}></TextBoxTamanhoDinamico>
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
            codigo: '#' + idCounter,
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
