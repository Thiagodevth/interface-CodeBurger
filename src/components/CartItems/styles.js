import styled from "styled-components";

export const Container = styled.div`
   background-color: #ffffff;
   box-shadow: 10px 10px rgba(0, 0, 0, 0.03);
   border-radius: 20px;
   padding: 10px;
   width: 57%;
   margin-bottom: 40px;
   `;

export const Header = styled.div`
   display: grid;
   grid-template-columns: repeat(5,1fr);
   padding: 10px;
   border-bottom: 1px solid #b5b5b5;
   p{
      font-size: 14px;
      color: #b5b5b5;
   }
   ;`

export const Body = styled.div`
   display: grid;
   grid-template-columns: repeat(5,1fr);
   
   gap: 10px 15px;
   padding: 10px;
   align-items: center;

   img{
      border-radius: 10px;
      width: 85px;
   }

   p{
      font-size: 14px;
      color: #000000;
   }

   .quantity-container{
      display: flex;
      gap: 20px;
      align-items: center;

      button{
         height: 25px;
         width: 25px;
         background: transparent;
         border: none;
         border-radius: 50%;
         background: #e5e5e5;
         cursor: pointer;
         font-weight: bold;

         background-color: #9758a6;
         color: #efefef;
         filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
         border: none;
         transition: 0.2s;

      }
      button:hover{
         border: 2px solid #9758a6;
         background-color: #efefef;
         color: #9758a6;
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
