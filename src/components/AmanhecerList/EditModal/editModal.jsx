import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Input } from "../../forms/Input/index";
import styles from "./style.module.scss" 
import { useContext } from "react";
import { AmanhecerContext } from "../../../providers/AmanhecerContext";



export const EditModal = ({ isOpen, onRequestClose, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const { editAmanhecer } = useContext(AmanhecerContext);
  
  
  const onSubmit = async (formData) => {
   // eslint-disable-next-line no-undef
   await editAmanhecer(id, formData);

    onRequestClose();
  };


  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.modalHeader} >
        <h2>Editar contato</h2>
        <button className="btn outline" onClick={onRequestClose}>X</button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
          label="Seu nome"
          type="name"
          {...register("name", { required: "Este campo é obrigatório" })}
          error={errors.name}
        />
        
        <Input
          label="Seu número de telefone"
          type="text"
          {...register("phone", { required: "Este campo é obrigatório" })}
          error={errors.phone}
        />

        <Input
          label="Seu e-mail alternativo"
          type="email"
          {...register("email", { required: "Este campo é obrigatório" })}
          error={errors.email}
        />

        <div className={styles.button}>
          <button className="btn outline close" type="button" onClick={onRequestClose}>
            Cancelar
          </button>
          <button className="btn outline" type="submit">Confirmar</button>
        </div>
      </form>
    </Modal>
  );
};

