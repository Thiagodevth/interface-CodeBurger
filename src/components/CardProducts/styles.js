import styled from "styled-components";

export const Container = styled.div`
background: #ffffff;
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
display: flex;
gap: 12px;
padding: 16px;
max-width: 24em;
div{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
`;

export const Image = styled.img`
width: 150px;
border-radius: 10px;
`;

export const ProductName = styled.p`
font-size: 16px;
font-weight: normal;
font-style: normal;
line-height: 19px;
color: #000000;
`;

export const ProductPrice = styled.p`
font-size: 18px;
font-weight: 500;
font-style: normal;
line-height: 21px;
color: #000000;
margin-top: 30px;
`;

