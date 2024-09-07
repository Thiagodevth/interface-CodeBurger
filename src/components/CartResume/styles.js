import styled from "styled-components";

export const Container = styled.div`
   background-color: #ffffff;
   min-height: 33vh;
   box-shadow: 10px 10px rgba(0, 0, 0, 0.03);
   border-radius: 20px;
   padding: 15px;
   width: 25%;
   margin-bottom: 40px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   .container-top {
      display: grid;
      grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

      .title {
      grid-area: title;
      margin-bottom: 20px;
      }
      .items {
      grid-area: items;
      }
      .items-price {
      grid-area: items-price;
      }
      .delivery-tax {
      grid-area: delivery-tax;
      }
      .delivery-tax-price {
      grid-area: delivery-tax-price;
      }

   }

 
   .container-bottom{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 24px;
   }

`;

export const Button = styled.button`
   width: 100%;`