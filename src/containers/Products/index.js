import React, { useEffect, useState } from "react";

import ProductsLogo from '../../assets/products-logo.svg'
import { Container, ProductsImg, CategoryButton, CategoryMenu } from "./styles";
import api from '../../services/api'

function Products() {
    const [categories, setCategories] = useState([])
    const [actveCategory, setActveCategory] = useState(0)
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }

        loadCategories()
    }, [])
    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo-de-produtos" />
            <CategoryMenu>
                {categories && categories.map(category =>
                    <CategoryButton
                        type="button"
                        key={category.id}
                        isActiveCategory={actveCategory === category.id}
                        onClick={() => { setActveCategory(category.id) }} >
                        {category.name}</CategoryButton>
                )}
            </CategoryMenu>
        </Container>
    )
}

export default Products