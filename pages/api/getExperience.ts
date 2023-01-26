import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import {groq} from 'next-sanity';
import { Experience } from '../../typings';

const query = groq`
*[_type=="experience"]{
  ...,
  technologies[]->
}
`


type Data = {   
  experiences: Experience[]

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const experiences:Experience[]=await sanityClient.fetch(query);  // the data will come back in form of array in social[]
    

    res.status(200).json({ experiences})
  }
  

