import React from 'react'
import {CountryData} from "@/hooks/useFetchCountries";
import Image from "next/image";
import {useRouter} from "next/navigation";


export interface CountryProps {
    country: CountryData;
    loading: boolean;
}

const Card = ({country}:CountryProps) => {
    const router = useRouter();
    return (
       <>
           {
               country != undefined && <div className="rounded-lg shadow-md  cursor-pointer" onClick={() => {
                  router.push(country.name.common)
               }}>
                   <Image src={country.flags.png} width={100} height={100} alt="" className={"w-full h-72 rounded-t-lg shadow-sm"} objectFit={"cover"}  unoptimized/>
                   <div className={"flex flex-col justify-center p-7 leading-loose"}>
                       <h1 className={"text-2xl font-bold mb-5"}>{country.name.common}</h1>
                       <h1 className={"font-bold text-md"}>Population: <span
                           className={"font-normal"}>{country.population}</span>
                       </h1>
                       <h1 className={"font-bold text-md"}>Region: <span className={"font-normal"}>{country.region}</span>
                       </h1>
                       <h1 className={"font-bold text-md"}>Capital: <span className={"font-normal"}>{country.capital}</span>
                       </h1>

                   </div>
               </div>
           }

       </>
    )
}
export default Card
