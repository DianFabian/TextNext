//pagina inicial
//import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Counter from "@/components/Counter"
import Login from "@/components/login"
import Registro from "@/components/Registro"
import IndexPage from "@/components/IndexPage"

export default function Home(){
    return (
    <div className={styles.container}>
        {/* <Head>
        <title>Mi Pagina Web</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width-devicewidth, initial-scale=1, shrink-to-fit=no"/>
        </Head>} */}

        {/*Navbar*/}

        {/* <nav className={styles.navbar}>
            <a href="#" className={styles.navbarBrand}>Home</a>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                <a href="#" className={styles.navbarLink}>Ayuda</a>
                </li>
                <li className={styles.navImen}>
                <a href="#" className={styles.navbarLink}>Sesion</a>
                </li>
            </ul>
        </nav> */}

        {/* Navbar*/}
        {/* <div className={styles.content}>
          <h1>Hola mundo</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>Alumna: Diana Elizabeth Fabian Cruz</h1>
          <br/>
          <br/>
          <br/>
            {/* Imagen 
        </div> */}
    
    {/* Contenido */}
    {/* <Footer/>
    <Counter/> */}

    <IndexPage/>

    </div>
    )
}

