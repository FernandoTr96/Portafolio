import {NextApiRequest, NextApiResponse} from 'next';
import sgMail from '@sendgrid/mail';


interface response{
    ok:boolean;
    msg:string;
}

export default async function sendEmail(req:NextApiRequest,res:NextApiResponse<response>){
    if(req.method === 'POST'){

        const {name,email,subject,message} = req.body;
        sgMail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);
        
        // el correo en el from debe ser el sender verificado en sendGrid
        // el correo en el to seran los destinos

        const msg = {
          to: 'fernando.tr96@outlook.es', 
          from: 'fernandoweb150991133@gmail.com', 
          subject: subject,
          text: message,
          html: `
            <strong>${name}</strong><br/>
            <i>${email}</i><br/>
            <hr/>
            <p>${message}</p>
          `
        }
    
        try {

            await sgMail.send(msg);

            return res.status(200).json({
                ok: true,
                msg: 'Enviado'
            })
            
        } catch (error:any) {

            console.log(error.response.body);

            return res.status(400).json({
                ok: false,
                msg: error.response.body.message
            })

        }

    }
}