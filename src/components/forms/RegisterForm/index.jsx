import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormShema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(registerFormSchema),
   });
  
   const navigate = useNavigate();
   const { userRegister } = useContext(UserContext);

   const submit = async (formData) => {
      await userRegister(formData);
      navigate("/users/login"); 
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Seu nome"
            type="text"
            {...register("name")}
            error={errors.name}
         />

         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
         />

         <InputPassword
            label="Crie uma senha"
            {...register("password")}
            error={errors.password}
         />

         <InputPassword
            label="Confirme a senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
         />

         <Input
            label="Seu número de telefone"
            type="text"
            {...register("phones")}
            error={errors.phones}
         />

         <div>
            <Link className="link" to="/users/login">
               Login
            </Link>
            <button type="submit" className="btn outline">
               Cadastrar
            </button>
         </div>
      </form>
   );
};

