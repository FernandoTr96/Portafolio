import { createContext } from 'react';
import { Project } from '../interfaces/interfaces';

interface globalContextProps {
    project: Project;
    ui:{
        principalMenuOpen: boolean;
        uiTranslated: boolean;
    };
    principalMenuToggle: (value:boolean) => void;
    setIsTranslated: (value:boolean) => void;
}

export const GlobalContext = createContext<globalContextProps>({} as globalContextProps);