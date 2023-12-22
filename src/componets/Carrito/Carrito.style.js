import styled from "styled-components";
import { CartPlus } from "@styled-icons/fa-solid/CartPlus";

export const Carrito_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;

export const Carrito_Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 200px;
`;

export const Carrito_Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Carrito_Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Carrito_Nombre = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

export const Carrito_Precio = styled.h4`
  font-size: 16px;
  color: #333333;
`;

export const Carrito_Desc = styled.p`
  font-size: 14px;
  color: #777777;
`;

export const Carrito_Button = styled.button`
  background-color: #f5c152;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f2994a;
  }
`;

export const ConteinerNADD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Carrito_Icon = styled(CartPlus)`
  color: black;
  width: 60px;
  margin-right: 10px;
`;
