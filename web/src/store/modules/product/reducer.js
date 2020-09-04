import produce from 'immer';

const INITIAL_STATE = {
  productList: [],
  form: {
    id: undefined,
    name: '',
    categoria: '0',
    altura: '',
    largura: '',
    comprimento: '',
    codigo_de_barra: '',
    peso: '',
    preco: '',
    descricao: '',
    diaDaSemana: '0',
    horario: '00:00',
  },
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/RESET_FORM': {
        draft.form = {
          id: undefined,
          name: '',
          categoria: '0',
          altura: '',
          largura: '',
          comprimento: '',
          codigo_de_barra: '',
          peso: '',
          preco: '',
          descricao: '',
          diaDaSemana: '0',
          horario: '00:00',
        };
        break;
      }
      case '@product/CREATE_PRODUCT_SUCCESS': {
        draft.productList = action.payload.data;
        break;
      }
      case '@product/FIND_ALL_PRODUCT_SUCCESS': {
        draft.productList = action.payload.data;
        break;
      }
      case '@product/GET_BYID_PRODUCT_SUCCESS': {
        draft.form = action.payload.data;
        break;
      }
      default:
    }
  });
}
