'use client'

import { useParams, useRouter } from "next/navigation"
import { Icon } from "@iconify/react"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import Header from "@/components/Header"

export default function WorkerPage() {
    const params = useParams()
    const router = useRouter()

    const workers = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8',
            name: 'Michael Thompson',
            profission: 'Eletricista',
            distance: 5,
            avaliation: 4.8
        },
        {
            id: 2,
            name: 'Gabriel Vieira',
            profission: 'Encanador',
            distance: 15,
            avaliation: 3.8
        }
    ]

    const workerData = workers.filter((worker) => String(worker.id) === params.id)[0]

    return (
        <>
            <Header
                image={ workerData.image }
                name={ workerData.name }
                userAccount={ false }
            />

            <main className="m-2 border rounded-t-xl min-h-screen p-2">
                <section className="border rounded-xl p-2 bg-zinc-0">
                    <h2><strong>Descrição</strong></h2>
                    <Separator />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat, magnam, repellendus asperiores dolorum minus eaque sunt iste est porro non ut voluptate vero quae deleniti. Doloribus dicta laborum minus?
                    </p>
                </section>
                <section className="border rounded-xl p-2 bg-zinc-50 mt-2">
                    <h2><strong>Informações</strong></h2>
                    <Separator />

                    <h3>Profissão: <span>{ workerData.profission }</span></h3>
                    <h3>Localização: <span>Espinheiros</span> - <span>Joinville</span></h3>
                    <h3>Distancia: { workerData.distance }KM</h3>
                    <h3>Nota: <span>{ workerData.avaliation }/5.0</span></h3>
                </section>

                <Button className="w-full mt-2 gap-2 text-md">
                    <Icon icon="ph:whatsapp-logo" />
                    Contato
                </Button>
                <Button
                    className="w-full mt-2 gap-2 text-md"
                    onClick={ () => router.back() }
                >
                    <Icon icon="ph:arrow-arc-left" />
                    Voltar
                </Button>
            </main>
        </>
    )
}