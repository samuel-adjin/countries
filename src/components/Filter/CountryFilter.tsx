import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {regions} from "@/components/data/Regions";
import {CountryData} from "@/hooks/useFetchCountries";
import {Dispatch, SetStateAction} from "react";

interface ICountryFilter {
    countries: CountryData[]
    setFilter: Dispatch<SetStateAction<CountryData[]>>
}

export function CountryFilter({countries,setFilter}:ICountryFilter) {

    return (
        <Select onValueChange={(selectedRegion) => {
            if (selectedRegion) {
                const filteredByRegion = countries.filter(
                    (country) => country.region === selectedRegion
                );
                setFilter(filteredByRegion);
            } else {
                setFilter(countries);
            }
        }}
        >
            <SelectTrigger className="w-[200px] p-8 shadow-md">
                <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {regions.map((region, index) => (
                        <SelectItem value={region} key={index}>{region}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
