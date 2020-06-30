/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Product as ProductType } from '../types';
import {
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  colors,
} from '@material-ui/core';
import CartIcon from '@material-ui/icons/ShoppingCart';

interface ProductProps extends ProductType {
  handleAddToCart: () => void;
}

export default function Product(props: ProductProps) {
  const { title, coverImage, price, availableCoupon, handleAddToCart } = props;
  return (
    <Card>
      <Content>
        <ProductImage image={coverImage} title={title} />
        <CardHeader title={title} />
      </Content>
    </Card>
  );
}

const Content = styled.div`
  display: flex;
`;

const ProductImage = styled(CardMedia)`
  width: 300px;
  height: 150px;
`;
