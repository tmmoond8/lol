export interface Product {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: false;
}

export interface Coupon {
  type: 'rate' | 'amount';
  title: string;
  discountRate?: number;
  discountAmount?: number;
}
