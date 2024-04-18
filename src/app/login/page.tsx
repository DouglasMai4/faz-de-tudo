'use client'

import { FormEvent, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useToast } from "@/components/ui/use-toast"

import InputComponent from "@/components/InputComponent"

type LocationType = {
    id: string | number
    nome?: string
    name?: string
}

export default function Login() {
    const router = useRouter()
    const { toast } = useToast()

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accountType, setAccountType] = useState('')
    const [profission, setProfission] = useState('')
    const [description, setDescription] = useState('')

    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [cities, setCities] = useState([])
    const [city, setCity] = useState('')

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

        setCities(citiesData.map((city: LocationType) => ({ id: city.id, name: city.nome })))
    }

    function handleLogin(e: FormEvent) {
        e.preventDefault()

        router.push('/')
    }

    function handleRegister(e: FormEvent) {
        e.preventDefault()

        if (!fullName) {
            toast({
                title: "Erro ao registrar usuário",
                description: "O nome é obrigatório!",
            })
            return
        }

        if (!email) {
            toast({
                title: "Erro ao registrar usuário",
                description: "O email é obrigatório!",
            })
            return 
        }

        if (!password) {
            toast({
                title: "Erro ao registrar usuário",
                description: "A senha é obrigatória!",
            })
            return 
        }

        router.push('/')
    }

    return (
        <div className="flex p-2 justify-center items-center min-h-[100dvh]">
            <main className="m-2 rounded-xl border p-2 shadow w-full">
                <Tabs defaultValue="login" className="w-full mx-auto ">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-full" value="login">Entrar</TabsTrigger>
                        <TabsTrigger className="w-full" value="register">Registrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <form className="flex flex-col gap-2 p-2" onSubmit={ handleLogin }>
                            <InputComponent
                                id="email"
                                type="email"
                                label="Email"
                                placeholder="exemplo@email.com"
                                value={ email }
                                onChange={ ({ target }) => setEmail(target.value) }
                            />
                            <InputComponent
                                id="password"
                                type="password"
                                label="Senha"
                                placeholder="********"
                                value={ password }
                                onChange={ ({ target }) => setPassword(target.value) }
                            />

                            <Button type="submit">Entrar</Button>
                        </form>
                    </TabsContent>
                    <TabsContent value="register">
                        <form className="flex flex-col gap-2 p-2" onSubmit={ handleRegister }>
                            <InputComponent
                                id="full-name"
                                type="text"
                                label="Nome Completo"
                                placeholder="John Snow"
                                value={ fullName }
                                onChange={ ({ target }) => setFullName(target.value) }
                            />
                            <InputComponent
                                id="email"
                                type="email"
                                label="Email"
                                placeholder="exemplo@email.com"
                                value={ email }
                                onChange={ ({ target }) => setEmail(target.value) }
                            />
                            <InputComponent
                                id="password"
                                type="password"
                                label="Senha"
                                placeholder="********"
                                value={ password }
                                onChange={ ({ target }) => setPassword(target.value) }
                            />

                            <div className="flex gap-2">
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

                                <Select disabled={ !cities.length }>
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
                            </div>

                            <Select onValueChange={ (value) => setAccountType(value) }>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Tipo da conta" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="client">Cliente</SelectItem>
                                    <SelectItem value="worker">Trabalhador</SelectItem>
                                </SelectContent>
                            </Select>

                            {
                                accountType === 'worker' ? (
                                    <>
                                        <Select onValueChange={ (value) => setProfission(value) }>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Profissão" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="client">Eletricista</SelectItem>
                                                <SelectItem value="worker">Encanador</SelectItem>
                                                <SelectItem value="worker">Jardineiro</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <textarea cols={ 30 } rows={ 10 } />
                                    </>
                                ) : null
                            }

                            <Button type="submit">Registrar</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}