"use client"


import {CountryFilter} from "@/components/Filter/CountryFilter";
import SearchCountries from "@/components/Filter/SearchCountries";
import CardCountryList from "@/components/Card/CardCountryList";
import {CountryData, useFetchCountries} from "@/hooks/useFetchCountries";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import Spinner from "@/components/ui/spinner";

export default function Home() {
    const { countries, loading } = useFetchCountries("https://restcountries.com/v3.1/all");
    const [filter, setFilter] = useState<CountryData[]>([]);
    const [countrySearch, setCountrySearch] = useState<CountryData[]>([]);
    const [visibleCountries, setVisibleCountries] = useState<CountryData[]>([]);
    const [itemsToShow, setItemsToShow] = useState(8);

    const { ref, inView } = useInView({
        threshold: 1.0,
    });

    useEffect( () => {
        const timeout = setTimeout(()=>{
            if (inView && itemsToShow < countries.length) {
                setItemsToShow((prev) => prev * 2);
            }
        },1000)
        return () => clearTimeout(timeout);
    }, [countries.length, inView, itemsToShow]);

    useEffect(() => {
        if (countries && countries.length > 0) {
            setFilter(countries);
            setCountrySearch(countries);
        }
    }, [countries]);

    useEffect(() => {
        setVisibleCountries(countrySearch.slice(0, itemsToShow));
    }, [countrySearch, itemsToShow]);

    useEffect(() => {
        setCountrySearch(filter);
        setItemsToShow(8)
    }, [filter]);

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center w-full mt-10 lg:gap-0 gap-y-10">
                <SearchCountries countries={filter} setFilter={setCountrySearch} />
                <CountryFilter countries={countries} setFilter={setFilter} />
            </div>
            <div className="mt-10">
                <CardCountryList countries={visibleCountries} loading={loading} />
            </div>
            { itemsToShow < countries.length &&
                <div className="my-10 flex justify-center" ref={ref}>
                    <Spinner/>
                </div>
            }
        </div>
    );
}
