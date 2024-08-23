export interface Icompanies {
  id: string;
  name: string;
  description: string;
  logo: string;
  phone: string;
  address: string;
  website: string;
  industry: string;
  email: string;
}
export interface Ijobs {
  name: string;
  description: string;
  company_id?: string;
  contact_email: string;
  contact_phone:string;
  logo: string;
  field: string;
}
export interface Iroadmap {
  id: string;
  name: string;
}
export interface IroadmapContent {
  id: string;
  name: string;
  contents: {
    id: string;
    description: string;
    link: string;
  }[];
}


export interface userData {
  access_token: string;
  token_type: string;
  user: {
    email: string;
    id: string;
    image_link: string;
    name: string;
    phone: string;
  };
}

export interface AuthContextType {
  isLoggedIn: boolean;
  user: userData | null;
  userToken: string | null;
  login: (data: userData) => void;
  logout: () => void;
}

export interface ICompany {
  company: Icompanies;
  jobs: Ijobs;
}