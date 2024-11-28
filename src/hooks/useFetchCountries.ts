import {useEffect, useState} from "react";

export interface CountryData {
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    capital:string[];
    region: string;
    population: number;
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