import styled from "styled-components";

export const Container = styled.div`
   background: #ffffff;
   height: 72px;
   box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-around;
   `;

export const ContainerLeft = styled.div`
   display: flex;
   gap: 30px;
   `;

export const PageLink = styled.a`
   cursor: pointer;
   text-decoration: none;
   color: ${props => props.isActive ? '#975BA6' : '#555555'};
   font-size: 19px;
   line-height: 19px;
   font-weight: ${props => props.isActive ? 'bold' : 'normal'};;
   `;

export const ContainerRight = styled.div`
   display:flex;
   align-items: center;
   gap: 20px;`

export const Line = styled.div`
   height: 40px;
   border-right: 0.5 solid #bababa;
   `;

export const ContainerText = styled.div`
p{
   font-style: normal;
   font-weight: 500;
   font-size: 15px;
   line-height: 16px;
   color: #555555;
   margin-right: 3px
}
`;

export const PageLinkExit = styled.a`
   font-size: 19px;
   font-weight: bold;
   font-style: normal;
   line-height:16px;
   display: flex; 
   align-items: center;
   color: #9758a6;
   cursor: pointer;

   &:hover{
      font-size: 19.4px;
   }
   `;


