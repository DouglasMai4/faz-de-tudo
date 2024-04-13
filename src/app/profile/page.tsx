'use client'

import { useState } from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

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

export default function Profile() {
    const router = useRouter()

    const [fullName, setFullName] = useState('Douglas Maia')
    const [email, setEmail] = useState('douglasmai4@protonmail.com')
    const [password, setPassword] = useState('12345678')

    return (
        <>
            <main className="m-2 min-h-[100dvh] border rounded-t-xl p-2 shadow">
                <section className="flex gap-4 p-2 rounded-xl bg-zinc-50 border">
                    <Image
                        className="rounded-xl"
                        src="https://github.com/DouglasMai4.png"
                        alt="Profile Picture"
                        width={ 100 }
                        height={ 100 }
                    />

                    <div className="flex flex-col">
                        <h1><strong>Nome: </strong> Douglas Maia</h1>
                        <h2><strong>Tipo da conta: </strong> Cliente</h2>
                    </div>
                </section>

                <section className="flex gap-4 p-2 rounded-2xl bg-zinc-50 border mt-2">
                    <form className="flex flex-col gap-2 w-full">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="full-name">Nome Completo</Label>
                            <Input
                                id="full-name"
                                type="text"
                                placeholder="John Snow"
                                value={ fullName }
                                onChange={ ({ target }) => setFullName(target.value) }
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemplo@email.com"
                                value={ email }
                                onChange={ ({ target }) => setEmail(target.value) }
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                value={ password }
                                onChange={ ({ target }) => setPassword(target.value) }
                            />
                        </div>

                        <Select defaultValue="client">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Tipo da conta" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="client">Cliente</SelectItem>
                                <SelectItem value="worker">Trabalhador</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button>Salvar</Button>
                    </form>
                </section>

                <Button
                    onClick={ () => router.push('/') }
                    className="w-full mt-2"
                >
                    Voltar
                </Button>
            </main>
        </>
    )
}