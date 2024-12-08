
import React from 'react'
import {CountryData} from "@/hooks/useFetchCountries";
import Card from "@/components/Card/Card";

export interface CountryProps {
    countries: CountryData[];
    loading: boolean;
}



const CardCountryList = ({countries,loading}:CountryProps) => {
    return (
        <div className={"grid  lg:grid-cols-4 gap-20 px-5 md:px-0"}>
            {
                countries.map(country => (
                    <Card country={country} loading={loading} key={country.name.common}/>
                ))
            }

        </div>
    )
}
export default CardCountryList
