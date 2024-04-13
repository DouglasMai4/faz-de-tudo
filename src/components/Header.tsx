'use client'

import { useRouter } from 'next/navigation'

import { Icon } from '@iconify/react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
type Props = {
    image?: string
    name: string
    userAccount: boolean
}

export default function Header({ image, name, userAccount }: Props) {
    const router = useRouter()

    return (
        <header className="bg-zinc-50/50 border backdrop-blur sticky top-2 flex m-2 p-2 rounded-xl shadow justify-between items-center">
            <Avatar>
                <AvatarImage src={ image || "https://placehold.co/100" } />
                <AvatarFallback>Profile Picture</AvatarFallback>
            </Avatar>

            <span className="mx-auto">
                {
                    userAccount ? ( `Olá ${name}` ) : name
                }
            </span>

            {
                userAccount ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Icon icon="ph:list" className="text-2xl" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={ () => router.push('/profile') }
                                className="cursor-pointer"
                            >
                                Perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={ () => router.push('/login') }
                                className="cursor-pointer text-red-600"
                            >
                                Sair
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : null
            }
        </header>
    )
}