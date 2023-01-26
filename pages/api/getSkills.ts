import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import {groq} from 'next-sanity';
import { Skill } from '../../typings';

const query = groq`*[_type == "skills"]`


type Data = {   
  skills: Skill[]

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const skills: Skill[]=await sanityClient.fetch(query);  // the data will come back in form of array in social[]
    

    res.status(200).json({ skills})
  }
  

