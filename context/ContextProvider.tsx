import GlobalReducer from '../reducers/globalReducer';
import {GlobalState} from '../interfaces/interfaces';
import { GlobalContext } from './GlobalContext';
import { FC, useReducer } from 'react';

interface props {
  children: JSX.Element | JSX.Element[]
}

const initialState: GlobalState = {
    project: {
        id: 0,
        projectName: '',
        company: '',
        tecnologies: '',
        link: '',
        folderCloudinary: ''
    },
    ui: {
      principalMenuOpen: false,
      uiTranslated: false
    }
}

const ContextProvider:FC<props> = ({ children }) => {

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // thunks
  const principalMenuToggle = (value:boolean)=>{
    dispatch({
      type: 'MENU_TOGGLE', 
      payload: value
    })
  }

  const setIsTranslated = (value:boolean)=>{
    dispatch({
      type: 'UI_TRANSLATED', 
      payload: value
    })
  }

  return (
    <GlobalContext.Provider value={{
      ...state,
      principalMenuToggle,
      setIsTranslated
    }}>
      {children}
    </GlobalContext.Provider>
  )

}

export default ContextProvider