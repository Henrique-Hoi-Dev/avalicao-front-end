export function createProductRequest(values) {
  return {
    type: '@product/CREATE_PRODUCT_REQUEST',
    payload: { values },
  };
}

export function getByIdProductRequest(data) {
  return {
    type: '@user/GET_BYID_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function getByIdProductSuccess(data) {
  return {
    type: '@user/GET_BYID_PRODUCT_SUCCESS',
    payload: { data },
  };
}

export function findAllProductRequest(data) {
  return {
    type: '@product/FINDALL_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function findAllProductSuccess(data) {
  return {
    type: '@product/FIND_ALL_PRODUCT_SUCCESS',
    payload: { data },
  };
}

export function deleteProductRequest(data) {
  return {
    type: '@product/DELETE_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function deleteProductSuccess(data) {
  return {
    type: '@user/DELETE_PRODUCT_SUCCESS',
  };
}

export function productFailure() {
  return {
    type: '@product/SIGN_FAILURE',
  };
}
