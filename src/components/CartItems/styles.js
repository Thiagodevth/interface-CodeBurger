import styled from "styled-components";

export const Container = styled.div`
   background-color: #ffffff;
   box-shadow: 10px 40px rgba(0, 0, 0, 0.03);
   border-radius: 20px;
   padding: 10px;
   width: max-content;
   `;

export const Header = styled.div`
   display: grid;
   grid-template-columns: repeat(5,1fr);
   padding: 10px;
   border-bottom: 1px solid #b5b5b5;
   p{
      font-size: 16px;
      color: #b5b5b5;
   }
   ;`

export const Body = styled.div`
   display: grid;
   grid-template-columns: repeat(5,1fr);
   width: max-content;
   gap: 10px 15px;
   padding: 10px;
   align-items: center;

   img{
      border-radius: 10px;
      width: 120px;
   }

   p{
      font-size: 16px;
      color: #000000;
   }

   .quantity-container{
      display: flex;
      gap: 20px;
      align-items: center;

      button{
         height: 30px;
         background: transparent;
         border: none;
         cursor: pointer;

      }
      p{
         margin-top: 0px;
      }
   }
   `;

export const EmptyCart = styled.p`
   padding: 20px;
   text-align: center;
   `;
