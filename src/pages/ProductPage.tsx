import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@material-ui/core';
import Product from '../components/Product';
import products from '../assets/products';

export default function ProductPage() {
  const product = products[0];
  return (
    <Page>
      <Products>
        <Product
          {...product}
          handleAddToCart={(): void => {
            console.log('aaaa');
          }}
        />
      </Products>
    </Page>
  );
}

const Page = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${colors.blueGrey[50]};
`;

const Products = styled.ul`
  padding: 24px;
`;
