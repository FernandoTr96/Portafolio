import style from '../../styles/Logo.module.css';
import { FC } from 'react';

interface Props {
    char:string;
}

export const Logo:FC<Props> = ({char}) => {
  return (
    <div className={style.logo}>
        <strong>
            {char}
        </strong>
    </div>
  )
}
