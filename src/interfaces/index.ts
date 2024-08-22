export interface Icompanies {
  id: string;
  name: string;
  description: string;
  logo: string;
  phone: string;
  address: string;
  website: string;
  industry: string;
}
export interface Ijobs {
  name: string;
  description: string;
  company_id?: string;
  contact_email: string;
  logo: string;
  field: string;
}
