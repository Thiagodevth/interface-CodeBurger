import React from "react";

import { Container } from "./styles";
import { Button } from '../Button'

export function CartResume() {
    return (
        <>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">R$ 10,00</p>
                    <p className="delivery-tax">Taxa de entrega</p>
                    <p className="delivery-tax-price">R$ 7,00</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>R$ 49,00</p>
                </div>
                <Button style={{ width: '100%' }}>
                    Finalizar pedido
                </Button>
            </Container>

        </>
    )
}

