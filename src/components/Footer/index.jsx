import Logo from "../../assets/LogoAmanhecer.jpg";
import styles from "./style.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         {/* <div className="container"> */}
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Amanhecer" />
               <div className={styles.paragraph}>
                  <p className={styles.paragraph}>
                     &copy; Todos os direitos reservados - Junio Chaves
                  </p>
               </div>
            </div>
         {/* </div> */}
      </footer>
   );
};