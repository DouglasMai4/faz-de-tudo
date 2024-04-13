'use client'

import { FormEvent, useState } from "react"
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

export default function Login() {
    const router = useRouter()
    const { toast } = useToast()

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    value={ password }
                                    onChange={ ({ target }) => setPassword(target.value) }
                                />
                            </div>

                            <Button type="submit">Entrar</Button>
                        </form>
                    </TabsContent>
                    <TabsContent value="register">
                        <form className="flex flex-col gap-2 p-2" onSubmit={ handleRegister }>
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
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    value={ password }
                                    onChange={ ({ target }) => setPassword(target.value) }
                                />
                            </div>

                            <Button type="submit">Registrar</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}