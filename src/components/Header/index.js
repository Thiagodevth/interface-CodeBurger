import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useUser } from "../../hooks/UserContext";

import Person from '../../assets/person.svg'
import Cart from '../../assets/cart.svg'

import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit
} from "./styles";

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')}
          isActive={pathname === '/'}>Home</PageLink>
        <PageLink onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="logo carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo pessoa" />
        </PageLink>
        <Line></Line>
        <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        <Line></Line>
        <ContainerText>
          <p>Olá, {userData.name}</p>
        </ContainerText>
      </ContainerRight>

    </Container>
  )
}

