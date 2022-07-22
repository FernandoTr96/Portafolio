import {NextApiRequest, NextApiResponse} from 'next';
import { Project } from '../../interfaces/interfaces';
import dataSpanish from '../../db/db-es.json';

interface response{
    ok:boolean;
    data:  Array<Project>;
}

export default async function getDataBase(req:NextApiRequest,res:NextApiResponse<response>){
    if (dataSpanish) {

        return res.status(200).json({
            ok: true,
            data: dataSpanish
        })

    }
    else {

        return res.status(400).json({
            ok: false,
            data: []
        })

    }
}