"use client"


import React from 'react'
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import {CountryData, useFetchCountries} from "@/hooks/useFetchCountries";
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";


const Page =  () => {
    const params = useParams<{ country: string }>()
    const url = `https://restcountries.com/v3.1/name/${params.country}`;
    const { countries} = useFetchCountries(url);

    const router = useRouter();
    return (
        <div className="px-5">
            <Button className="mt-8 mb-16 "  onClick={() => router.back()}>
                <ArrowLeft />
                Back
            </Button>
            {
                countries != null && countries.map((country: CountryData) => {
                    const currencyKey =Object.keys(country.currencies);

                    return <div key={country.name.common}>
                        <Image src={country.flags.png} width={100} height={100} alt="" className={"w-full lg:w-[20vw] h-72 rounded-t-lg shadow-sm mb-10"} objectFit={"cover"}  unoptimized/>

                        <h1 className="font-bold text-2xl">{country.name.common}</h1>
                        <div className=" leading-loose">
                            <h4 className="mt-8">Native Name: {country.name.common}</h4>
                            <h4>Population: {country.population}</h4>
                            <h4>Region: {country.region}</h4>
                            <h4>Sub Region: {country.subregion}</h4>
                            <h4>Capital: {country.capital}</h4>
                        </div>
                        <div className="mt-8">
                            <h1 className="">Top Level Domain: {country.tld}</h1>
                            {currencyKey.map((currency,i:number)=> {
                                return <h1 key={i+currency}>Currency: {country.currencies[currency].name} </h1>
                            })

                            }
                        </div>
                    </div>
                })
            }


        </div>
    )
}
export default Page
