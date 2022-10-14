import { Product } from '@types';

const PRODUCT_LIST: Array<Product> = [
  {
    id: 1,
    name: 'Biji Bunga Matahari',
    price: 1500,
    image_url: '',
    description: 'Kuwaci paling enak sepanjang masa',
  },
];

export const getProductList = () => {
  return PRODUCT_LIST;
};

export const getProduct = (id: number) => {
  return PRODUCT_LIST.find((product) => product.id === id) as Product;
};
