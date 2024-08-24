import { useQuery } from 'react-query';
import { ICompany } from '../interfaces';

const useGetCompanyById = (companyId: number) => {
  return useQuery<ICompany | null>(['company', companyId], async () => {
    const response = await fetch(`https://ncodenfun.frevva.com/api/companies/${companyId}/info`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const commpany = await response.json();

    return commpany as ICompany;
  });
};

export default useGetCompanyById;
