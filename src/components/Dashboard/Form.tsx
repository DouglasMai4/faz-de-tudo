'use client'

import { useEffect, useState } from "react"
import { Icon } from '@iconify/react'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

type LocationType = {
    id: string | number
    nome?: string
    name?: string
}
  

export default function Form() {
    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [cities, setCities] = useState([])

    useEffect(() => {
        async function fetchStates() {
            const data = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1|2|3|4|5/estados")

            const statesData = await data.json()

            setStates(statesData.map((state: LocationType) => ({ id: state.id, name: state.nome })))
        }

        fetchStates()
    })

    async function fetchCities(id: string) {
        const data = await fetch(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${ id || state }/municipios`)

        const citiesData = await data.json()

        console.log(citiesData);

        setCities(citiesData.map((city: LocationType) => ({ id: city.id, name: city.nome })))
    }

    return (
        <form>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Nome do trabalhador" />
                <Button type="submit">Pesquisar</Button>
            </div>
            <div className="flex gap-2 mt-2">
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Ordernar por" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="avaliation">Avaliação</SelectItem>
                        <SelectItem value="name">Nome</SelectItem>
                        <SelectItem value="distance">Distancia</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Profissão" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="encanador">Encanador</SelectItem>
                        <SelectItem value="eletricista">Eletricista</SelectItem>
                        <SelectItem value="jardineiro">Jardineiro</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <Collapsible className="text-center">
                <CollapsibleTrigger>
                    <Icon icon="ph:caret-down" />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex gap-2">
                    <Select
                        onValueChange={ (value: string) => {
                            setState(value)
                            fetchCities(value)
                        }}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                states.map((state: LocationType) => (
                                    <SelectItem
                                        key={ state.id }
                                        value={ String(state.id) }
                                    >
                                        { state.name }
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Cidade" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                cities.map((city: LocationType) => (
                                    <SelectItem
                                        key={ city.id }
                                        value={ String(city.id) }
                                    >
                                        { city.name }
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </CollapsibleContent>
            </Collapsible>
        </form>
    )
}