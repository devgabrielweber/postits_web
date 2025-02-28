import Image from "next/image";
import styles from "./page.module.css";
import Postit from "@/assets/postit/Postit";
import PostitGrid from "@/assets/postit/Postit";
import { Mongoosegatos } from "./pages/mongooseTeste/mongooseTeste";

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
      <PostitGrid postits={[]}></PostitGrid>
    </div>
  );
}
