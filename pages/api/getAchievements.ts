import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import {groq} from 'next-sanity';
import { achivements } from '../../typings';

const query = groq`
*[_type=="achievement"]
`


type Data = {   
  achivement: achivements[]

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const achivement:achivements[]=await sanityClient.fetch(query);  // the data will come back in form of array in social[]
    

    res.status(200).json({ achivement})
  }
  

