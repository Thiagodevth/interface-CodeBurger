import React from "react";

import ProductsLogo from '../../assets/products-logo.svg'
import { Container, ProductsImg } from "./styles";

function Products() {
    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo-de-products" />
        </Container>
    )
}

export default Products