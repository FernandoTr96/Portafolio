import Image from 'next/image';
import { FC } from 'react';
import style from '../../styles/Loader.module.css';

interface Props{
    src:string;
    w:number;
    h:number;
} 

export const Loader:FC<Props> = ({src,w,h}) => {
    return (
        <div className={style.loader}>
            <Image
                src={src}
                alt='loader'
                width={w}
                height={h}
                objectFit='contain'
            />
        </div>
    )
}
