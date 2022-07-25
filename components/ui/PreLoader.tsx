import Image from 'next/image';
import style from '../../styles/PreLoader.module.css';
import { useState, useEffect } from 'react';

export const PreLoader = () => {
  
    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        window.addEventListener('load', ()=>setLoaded(true));
    },[])
  
    return (
    <div className={`${style.preloader} ${loaded ? style.removePreloader : ''}`}>
        <Image src='/img/loading.svg' alt='loader' width='50' height='50' objectFit='contain' />
    </div>
  )
}
