import { useContext, useState } from "react";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { AmanhecerContext } from "../../../providers/AmanhecerContext";
import styles from "./style.module.scss";
import { EditModal } from "../EditModal/editModal";

export const ContactCard = ({ amanhecer }) => {
   const { user } = useContext(UserContext);
   // const navigate = useNavigate();
   const { deleteAmanhecer } = useContext(AmanhecerContext);

   // Estado para controlar a exibição do modal de edição
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   // Função para abrir o modal de edição
   const openEditModal = () => {
      setIsEditModalOpen(true);
   };

   // Função para fechar o modal de edição
   const closeEditModal = () => {
      setIsEditModalOpen(false);
   };

   return (
      <li className={styles.contactCard}>
         <div>
            <span className="paragraph">
               <strong>{amanhecer.author}</strong> {amanhecer.email}
            </span>
            <p className="paragraph">{amanhecer.content}</p>
         </div>
         <div>
            {user.id === amanhecer.userId ? (
               <>
                  {/* Botão para abrir o modal de edição */}
                  <button
                     onClick={() => openEditModal()}
                     title="Editar"
                     aria-label="edit"
                  >
                     <MdOutlineEdit size={30} />
                  </button>
                  <button
                     onClick={() => deleteAmanhecer(amanhecer.id)}
                     title="Remover"
                     aria-label="remove"
                  >
                     <MdOutlineDelete size={30} />
                  </button>
               </>
            ) : null}
         </div>
         {/* Renderização condicional do modal de edição */}
         {isEditModalOpen && (
            <EditModal 
               id={amanhecer.id}
               isOpen={isEditModalOpen}
               onRequestClose={closeEditModal}
               amanhecer={amanhecer} // Passando os dados do amanhecer para o modal de edição
            />
         )}
      </li>
   );
};


// import { useContext } from "react";
// import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../../providers/UserContext";
// import { AmanhecerContext } from "../../../providers/AmanhecerContext";
// import styles from "./style.module.scss";
// import { EditModal } from "../EditModal/editModal";

// export const ContactCard = ({ amanhecer }) => {
//    const { user } = useContext(UserContext);

//    const navigate = useNavigate();

//    const { deleteAmanhecer } = useContext(AmanhecerContext);

//    return (
//       <li className={styles.contactCard}>
//          <div>
//             <span className="paragraph">
//                <strong>{amanhecer.author}</strong> {amanhecer.email}
//             </span>
//             <p className="paragraph">{amanhecer.content}</p>
//          </div>
//          <div>
//             {user.id === amanhecer.userId ? (
//                <>
//                   <button
//                      onClick={() => {
//                         EditModal(amanhecer);
//                         navigate("/user/edit");
//                      }}
//                      title="Editar"
//                      aria-label="edit"
//                   >
//                      <MdOutlineEdit size={30} />
//                   </button>
//                   <button
//                      onClick={() => deleteAmanhecer(amanhecer.id)}
//                      title="Remover"
//                      aria-label="remove"
//                   >
//                      <MdOutlineDelete size={30} />
//                   </button>
//                </>
//             ) : null}
//          </div>
//       </li>
//    );
// };
