import { LoginForm } from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import styles from "./style.module.scss";


export const HomePage = () => {
   return (
      <main className={pageStyles.pageBox}>
         <div className="container sm">
            <div className={styles.flexBox}>
               <LoginForm />
            </div>
         </div>
      </main>
   );
};