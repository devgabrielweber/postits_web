import Image from "next/image";
import styles from "./page.module.css";
import Postit from "@/assets/postit/Postit";
import PostitGrid from "@/assets/postit/Postit";

interface postit {
  codigo: string,
  titulo: string,
  texto: string
}

interface postitArr {
  postits: postit[]
}

export default function Home() {
  return (
    <div className={styles.PostitContainer}>
      <PostitGrid postits={
        [
          { id: 1, codigo: "001", titulo: "Estudar React", texto: "Aprender os fundamentos" },
          { id: 2, codigo: "002", titulo: "Aprender TypeScript", texto: "Tipagem forte no JS" },
          { id: 3, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 4, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 5, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 6, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 7, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 8, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 9, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" },
          { id: 10, codigo: "003", titulo: "Criar um projeto", texto: "Fazer algo prático" }
        ]}></PostitGrid>
    </div>
  );
}
