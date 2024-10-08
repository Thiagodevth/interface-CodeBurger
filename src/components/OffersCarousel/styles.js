import styled from "styled-components";

export const Container = styled.div`
   background-color: #ffffff;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 35px;
   padding: 60px 0;

   .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
   }
   .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
   }
   .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
   }
   `;

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
   display: flex;
   flex-direction: column;
   p{
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
   }
   `;

export const Image = styled.img`
   width: 193px;
   height: 130px;
   border-radius: 10px;
   margin-bottom: 16px;
   `;


export const Button = styled.button`
   margin-top: 16px;
   background: #9758a6;
   border-radius: 8px;
   height: 50px;
   border: none;
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   line-height: 100%;
   text-align: center;
   color: #ffffff;
   cursor: pointer;
   transition: 0.2s;

   &:hover {
    opacity: 0.8;
    background: #ffffff;
    color: #9758a6;
    border: 2px solid #9758a6;
   }

   &:active{
    opacity: 0.6;
   }
   `



