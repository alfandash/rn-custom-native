import { getProduct } from '../services';
import { Product, ProductCart } from '../types';
import { createContext, useReducer, ReactNode, Dispatch, useMemo } from 'react';

interface Action {
  type: string;
  payload?: any;
}

interface AppState {
  cart: Array<ProductCart> | any[];
  dispatcher: ReturnType<typeof dispatcher>;
}

const ADD_PRODUCT = 'ADD_PRODUCT';
const REDUCE_QTY_PRODUCT = 'REDUCE_QTY_PRODUCT';
const ADD_QTY_PRODUCT = 'ADD_QTY_PRODUCT';

const dispatcher = (dispatch: Dispatch<Action>): any => ({
  addItem: (payload: Product) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: payload.id,
    });
  },
  reduceQty: (payload: Product) => {
    dispatch({
      type: REDUCE_QTY_PRODUCT,
      payload: payload.id,
    });
  },
  addQty: (payload: Product) => {
    dispatch({
      type: ADD_QTY_PRODUCT,
      payload: payload.id,
    });
  },
});

export const appInitialState: AppState = {
  cart: [],
  dispatcher: {},
};

const storeContext = createContext(appInitialState);
const { Provider } = storeContext;

export const appReducer = (reducerState: AppState, action: Action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const product = getProduct(action.payload);

      const checkCart = reducerState.cart.find(
        (productCart: Product) => productCart.id === product.id,
      );

      if (checkCart) {
        return {
          ...reducerState,
          cart: reducerState.cart.map((productCart) => {
            if (productCart.id === product.id) {
              productCart.qty++;
              productCart.totalPrice += product.price;
            }
            return productCart;
          }),
        };
      }
      return {
        ...reducerState,
        cart: [
          ...reducerState.cart,
          {
            ...product,
            qty: 1,
            totalPrice: product.price,
          },
        ],
      };
    }
    case REDUCE_QTY_PRODUCT: {
      return {
        ...reducerState,
        cart: reducerState.cart
          .map((productCart) => {
            if (productCart.id === action.payload) {
              productCart.qty--;
              productCart.totalPrice -= productCart.price;

              if (productCart.qty <= 0) {
                return;
              }
            }
            return productCart;
          })
          .filter((product) => product),
      };
    }
    case ADD_QTY_PRODUCT: {
      return {
        ...reducerState,
        cart: reducerState.cart.map((productCart) => {
          if (productCart.id === action.payload) {
            productCart.qty++;
            productCart.totalPrice += productCart.price;
          }
          return productCart;
        }),
      };
    }

    default:
      return { ...reducerState };
  }
};

interface AppStateWrapperProps {
  initialState: AppState;
  children: ReactNode;
}

const AppStateWrapper = ({ initialState, children }: AppStateWrapperProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(
    () => ({
      ...state,
      dispatcher: dispatcher(dispatch),
    }),
    [state, dispatch],
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export { storeContext, AppStateWrapper };
