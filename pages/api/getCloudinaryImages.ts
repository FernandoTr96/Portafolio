import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../../config/cloudinarySDK';
import { CloudinaryImage } from '../../interfaces/interfaces';

interface response {
    ok: boolean;
    images?: Array<CloudinaryImage>;
    msg?: string;
}

export default async function getCloudinaryImages(req: NextApiRequest, res: NextApiResponse<response>) {
    if (req.method === 'POST') {
        const { folderCloudinary } = req.body;
        try {

            await cloudinary.v2.search
                .expression(`resource_type:image AND folder:"${folderCloudinary}"`)
                .sort_by('public_id', 'asc')
                .execute().then(result => res.status(200).json({
                    ok: true,
                    images: result.resources.map((img:CloudinaryImage)=>img.secure_url)
                }));

        } catch (error:any) {
            console.log(error);
            res.status(200).json({
                ok: false,
                msg: error
            })
        }
    }
}