'use client'

import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type Props = {
    id: string | number
    image?: string
    name: string
    profission: string
    distance: number
    avaliation: number
}

export default function Worker({ id, image, name, profission, distance, avaliation }: Props) {
    const router = useRouter()

    return (
        <div
            className="flex gap-4 p-1 border rounded-md transition-all hover:bg-zinc-50 items-center hover:shadow cursor-pointer"
            onClick={ () => router.push(`/worker/${id}`) }
        >
            <Avatar>
                <AvatarImage src={ image || "https://placehold.co/400" } />
                <AvatarFallback>Worker Profile</AvatarFallback>
            </Avatar>

            <div className="">
                <h2>{ name }</h2>
                <h3>{ profission }</h3>
            </div>

            <div className="flex flex-col ml-auto">
                <Badge>{ distance }KM</Badge>
                <span>{ avaliation }/5.0</span>
            </div>
        </div>
    )
}