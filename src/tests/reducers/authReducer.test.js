import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

const initialState = {
  checking: true,
  // uid:null,
  // name:null
};

describe('Pruebas en authReducer', () => {
  test('Debe retornar el estado por defecto', () => {
    const action = {};
    const state = authReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  test('Debe autenticar el usuario', () => {
    const action = {
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'Fernando',
      },
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      checking: false,
      name: 'Fernando',
      uid: '123',
    });
  });
});
