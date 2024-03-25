import { AmanhecerContext } from "../../providers/AmanhecerContext";
import { ModalEdit } from "./Modal/modalEdit";
import { ContactCard } from "./ContactCard/index";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { EditModal } from "./EditModal/editModal";

export const AmanhecerList = () => {
  const { amanhecerList } = useContext(AmanhecerContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditAmanhecer, setEditAmanhecer] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditAmanhecer = () => {
    setEditAmanhecer(true);
  };

  const closeEditAmanhecer = () => {
    setEditAmanhecer(false);
  };

  return (
    <section className={styles.amanhecerListSection}>
      <div>
        <h1 className="title">Lista de contatos</h1>
      </div>
      <div>
        <button className="btn solid" onClick={openModal}>
          Clique aqui
        </button>
        <ModalEdit isOpen={isModalOpen} onRequestClose={closeModal} />
        <button className="btn solid" onClick={openEditAmanhecer}>
          Editar
        </button>
        <EditModal
          isOpen={isEditAmanhecer}
          onRequestClose={closeEditAmanhecer}
        />
      </div>
      <ul>
        {amanhecerList.map((amanhecer) => (
          <ContactCard key={amanhecer.id} amanhecer={amanhecer} />
        ))}
      </ul>
    </section>
  );
};
