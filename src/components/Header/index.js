import React from "react";

import Person from '../../assets/person.svg'
import Cart from '../../assets/cart.svg'

import { Container, ContainerLeft, PageLink, ContainerRight, ContainerText } from "./styles";

export function Header() {
    return (
        <Container>
            <ContainerLeft>
                <PageLink>
                    Home
                </PageLink>
                <PageLink>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Cart} alt="logo carrinho" />
                </PageLink>
                <div></div>
                <PageLink>
                    <img src={Person} alt="logo pessoa" />
                </PageLink>

                <ContainerText>
                    <p>
                        Olá, Thiago
                    </p>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}

