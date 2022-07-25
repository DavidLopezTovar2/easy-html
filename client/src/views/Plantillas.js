import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ComponentCompanyDetails from "../components/ComponentCompanyDetails";
import { getCompany, getCompanyUrl } from "../services/company.service";


const CompanyDetail =() => {
    const { nameurlcompany }= useParams();

    const [company, setCompany] = useState();

    const getOneCompanyFromService = async () => {
        const companyFromService = await getCompanyUrl(nameurlcompany);
        setCompany(companyFromService.data.company);
        console.log(companyFromService.data.company);

        }

    useEffect(() => {
        console.log(nameurlcompany)
        nameurlcompany && getOneCompanyFromService();
    }, [])


    return(
        <>
            {company && (
            <ComponentCompanyDetails company={company[0]}/>
            )}
        </>

    )

}

export default CompanyDetail;