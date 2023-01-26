import {achivements} from '../typings';

export const fetchAchievements = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAchievements`);

    
    const data = await res.json();
    const achievement:achivements[]=data.achievement;
    // console.log("fetching",skills)
    return achievement;
    }