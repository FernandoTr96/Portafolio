import { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '../../interfaces/interfaces';
import dataEnglish from '../../db/db-en.json';

interface response {
    ok: boolean;
    data: Array<Project>;
}

export default async function getDataBase(req: NextApiRequest, res: NextApiResponse<response>) {

    if (dataEnglish) {

        return res.status(200).json({
            ok: true,
            data: dataEnglish
        })

    }
    else {

        return res.status(400).json({
            ok: false,
            data: []
        })

    }
}