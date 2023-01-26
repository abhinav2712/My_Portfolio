interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };

}

export interface achivements extends SanityBody {
    _type: "achievements";
    achTitle: string;
    
    achpoints: string[];
    date: string;
}


export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    
}

export interface Tehnology extends SanityBody  {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    summary: string;
    
    image: Image;
    
    linkToBuild: string;
   
    technologies: Tehnology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrenltyWorking: boolean;
    jobTitle: string;
    points: string[];
    technologies: Tehnology[];
   
    

}

// achiveemnts is left


export interface Skill extends SanityBody {
    _type: "skill";
    
    image: Image;
    title: string;
    progress: number;
}

export interface Social extends SanityBody {        
    _type: "social";
    title:string,
    url:string,
}
