"use client"


import {CountryFilter} from "@/components/Filter/CountryFilter";
import SearchCountries from "@/components/Filter/SearchCountries";
import CardCountryList from "@/components/Card/CardCountryList";
import {CountryData, useFetchCountries} from "@/hooks/useFetchCountries";
import {useEffect, useState} from "react";

export default function Home() {
    const { countries, loading } = useFetchCountries("https://restcountries.com/v3.1/all");
    const [filter, setFilter] = useState<CountryData[]>([]);
    const [countrySearch, setCountrySearch] = useState<CountryData[]>([]);

    useEffect(() => {
        if (countries && countries.length > 0) {
            setFilter(countries);
            setCountrySearch(countries);
        }
    }, [countries]);

    useEffect(() => {
        setCountrySearch(filter);
    }, [filter]);

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center w-full mt-10 lg:gap-0 gap-y-10">
                <SearchCountries countries={filter} setFilter={setCountrySearch} />
                <CountryFilter countries={countries} setFilter={setFilter} />
            </div>
            <div className="mt-10">
                <CardCountryList countries={countrySearch} loading={loading} />
            </div>
        </div>
    );
}
