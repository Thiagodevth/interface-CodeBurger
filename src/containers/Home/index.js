import React from "react";

import HomeLogo from '../../assets/Home-logo.svg'
import { Container, HomeImg } from "./styles";
import { CategoryCarousel, OffersCarousel } from "../../components";

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo-da-home" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}

export default Home