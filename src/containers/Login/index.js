import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { toast } from 'react-toastify';
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../services/api'

import { useUser } from "../../hooks/UserContext";
import { Button } from "../../components";
import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo.svg";
import {
   Container,
   LoginImage,
   ContainerItens,
   Label,
   Input,
   SignInLink,
   ErrorMessege
} from './styles'

function Login() {
   const history = useHistory()
   const { putUserData } = useUser()

   const schema = Yup.object().shape({
      email: Yup
         .string()
         .email('Digite um e-mail válido')
         .required('O e-mail é obrigatório'),
      password: Yup
         .string()
         .required('A senha é obrigatória')
         .min(6, 'A senha deve ter pelo menos 6 digitos'),
   })

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema)
   });

   const onSubmit = async clientData => {
      const { data } = await toast.promise(
         api.post('/sessions', {
            email: clientData.email,
            password: clientData.password,
         }),
         {
            pending: 'Verificando seus dados',
            success: 'Seja Bem-Vindo(a) 👌',
            error: 'Email ou Sanha Incorretos 🤯',
         }
      )

      putUserData(data)

      setTimeout(() => {
         history.push('/')
      }, 1000)
   };

   return (
      <Container>
         <LoginImage src={LoginImg} alt="logo-image" />
         <ContainerItens>
            <img src={Logo} alt="logo-code-burger" />
            <h1>Login</h1>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
               <Label>Email</Label>
               <Input type="email" {...register("email")}
                  error={errors.email?.message} />
               <ErrorMessege>{errors.email?.message}</ErrorMessege>

               <Label>Senha</Label>
               <Input type="password" {...register("password")}
                  error={errors.password?.message} />
               <ErrorMessege>{errors.password?.message}</ErrorMessege>

               <Button type="submit" style={{ marginTop: 20, marginBottom: 25 }} >Entrar</Button>
            </form>
            <SignInLink>
               Não possui conta?{' '}
               <Link style={{ color: 'white' }} to="/cadastro">
                  Clique Aqui</Link>
            </SignInLink>
         </ContainerItens>
      </Container >
   )
}

export default Login