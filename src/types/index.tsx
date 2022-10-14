export interface Product {
  id: number;
  name: string;
  price: number;
  image_url?: string;
  description: string;
}

export interface ProductCart extends Product {
  qty: number;
  totalPrice: number;
}

export type ExampleStackParamList = {
  Dummy1: undefined;
  Dummy2: undefined;
};

export interface User {
  id: number;
  name: string;
}
