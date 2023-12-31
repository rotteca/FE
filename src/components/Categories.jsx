import React from 'react'
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoriesItems from "./CategoriesItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoriesItems item={item} key={item.id}></CategoriesItems>
        ))}
    </Container>
  )
}

export default Categories