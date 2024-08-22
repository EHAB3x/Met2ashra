import { useEffect, useState } from "react"

const CompanyPage = () => {
    const [companyData, setCompanyData] = useState([]);
    
    useEffect(()=>{
        fetch("https://ncodenfun.frevva.com/api/companies/1/info")
        .then(response => response.json())
        .then(data => setCompanyData(data)
        )
    },[])
    console.log(companyData);
    
  return (
    <div>CompanyPage</div>
  )
}

export default CompanyPage