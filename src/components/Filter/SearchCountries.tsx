"use client"

import React, {Dispatch, SetStateAction, useEffect} from 'react'
import {CountryData} from "@/hooks/useFetchCountries";
import {Input} from "@/components/ui/input";

interface ISearchCountries {
    setFilter: Dispatch<SetStateAction<CountryData[]>>
    countries: CountryData[]
}

const SearchCountries = ({ setFilter, countries }: ISearchCountries) => {
    const[debounced,setDebounced] = React.useState("")
    const[search,setSearch] = React.useState("")
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounced(search)
        },1000)
        return () => {
            clearTimeout(timeout)
        }
    },[search])

    useEffect(() => {
            if (debounced !== "") {
                const filteredByQuery = countries.filter((country) =>
                    country.name.common.toLowerCase().includes(debounced.toLowerCase())
                );
                setFilter(filteredByQuery);
            } else {
                setFilter(countries);
            }
    }, [countries, debounced, setFilter]);
    return (
        <div className="flex items-center border rounded-md lg:w-[30vw] p-2 pl-8 shadow-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
            </svg>
            <Input
                type="text"
                placeholder="Search for a Country..."
                className="flex-grow pl-5 focus:outline-none py-3 border-none focus:border-none focus:ring-0 focus-visible:ring-0"
                onChange={(e)=>{
                    setSearch(e.target.value)
                }}
            />
        </div>
    );
};
export default SearchCountries;

