import {useEffect, useState} from "react";


type Currency = {
    name: string;
    symbol: string;
};

type Currencies = {
    [key: string]: Currency;
};


export interface CountryData {
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    capital:string[];
    tld:string[];
    region: string;
    "subregion":string;
    population: number;
    currencies: Currencies;
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
}

export const useFetchCountries = (url:string) => {
    const[countries, setCountries] = useState<CountryData[]>([]);
    const[loading, setLoading] = useState(true);
    useEffect(() => {
       const fetchCountries = async () => {
           try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`Failed to fetch countries for ${countries}`);
                }
               const json = await response.json();
                setCountries(json);
           }catch(e){
               console.error(e);
           }finally {
               setLoading(false);
           }
       }
       fetchCountries();
    },[url])
    return {countries,loading,setCountries};
}