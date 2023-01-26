import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import {groq} from 'next-sanity';
import { Social } from '../../typings';

const query = groq`*[_type == "social"]
`


type Data = {   
    socials: Social[]

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const socials: Social[]=await sanityClient.fetch(query);  // the data will come back in form of array in social[]
    

    res.status(200).json({ socials})
  }
  

