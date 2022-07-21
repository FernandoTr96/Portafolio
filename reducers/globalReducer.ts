import { GlobalState } from '../interfaces/interfaces';

type actionType =
| { type: 'MENU_TOGGLE', payload: boolean }
| { type: 'UI_TRANSLATED', payload: boolean };

const globalReducer = (state:GlobalState, action: actionType):GlobalState => {
    switch (action.type) {

        case 'MENU_TOGGLE':
            return {
                ...state,
                ui: {
                    ...state.ui,
                    principalMenuOpen: action.payload
                }
            }

        case 'UI_TRANSLATED':
            return {
                ...state,
                ui: {
                    ...state.ui,
                    uiTranslated: action.payload
                }
            }

        default:
            return state;
    }
}

export default globalReducer;