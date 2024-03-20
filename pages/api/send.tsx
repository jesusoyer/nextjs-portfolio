// import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const { body } = req
//   const { data, error } = await resend.emails.send(
    
//     {
//     from: "jesus <jesus@jesoyer.com>",
//     to: [body.email],
//     subject: body.message,
//     react: EmailTemplate({ firstName: body.name }),
//     text:'' ,
//   } 
//   );
  
//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
//   console.log(body)
// };
