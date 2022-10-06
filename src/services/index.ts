import { Product } from '../types';

const PRODUCT_LIST: Array<Product> = [
  {
    id: 1,
    name: 'Biji Bunga Matahari',
    price: 1500,
    image_url: '',
    description: 'Kuwaci paling enak sepanjang masa',
  },
  {
    id: 2,
    name: 'Batu Bata',
    price: 25000,
    image_url: '',
    description: 'Bata terkuat sejagad raya',
  },
  {
    id: 3,
    name: 'Pepsodent',
    price: 16000,
    image_url: '',
    description: 'Pasta gigi sejuta manusia',
  },
  {
    id: 4,
    name: 'Rinso 1kg',
    price: 9500,
    image_url: '',
    description: 'Detergen terbaik saat ini karena sudah ada dari dahulu.',
  },
];

export const getProductList = () => {
  return PRODUCT_LIST;
};

export const getProduct = (id: number) => {
  return PRODUCT_LIST.find((product) => product.id === id) as Product;
};
