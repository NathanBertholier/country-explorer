"use client"
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Country } from "@/types/types";
import { Pagination } from "@nextui-org/react";



export default function CountryList() {
    const [countries, setcountries] = useState<Country[]>([])
    const [page, setpage] = useState({ total: 1, initialPage: 1 })
    useEffect(() => {
        getCountries(1)
    }, [])

    const getCountries = async (page: number) => {
        const res = await fetch("https://api.worldbank.org/v2/country?format=json&language=fr&page=" + page)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await res.json()
        console.log(data[1])
        setpage({ total: data[0].pages, initialPage: data[0].page })
        setcountries(data[1])
    }

    const countryCardList = countries.filter((country) => country.capitalCity).map((country) => <CountryCard key={country.id} country={country} />)

    return (
        <div className="mx-6">
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-4">
                {countryCardList}
            </div>
            <Pagination className="flex justify-center m-2" total={page.total} initialPage={page.initialPage} onChange={(index) => getCountries(index)} />

        </div>
    )
}