import { Separator } from "@/components/ui/separator"

import Form from "./Form"
import Worker from "./Workers"

export default function Dashboard() {
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

    return (
        <main className="m-2 border rounded-t-xl shadow-md p-2 min-h-screen">
            <Form />

            <Separator className="my-2" />

            <section className="flex flex-col gap-2">
                {
                    workers.map((workerData) => (
                        <Worker
                            key={ workerData.id }
                            id={ workerData.id }
                            image={ workerData.image }
                            name={ workerData.name }
                            profission={ workerData.profission }
                            distance={ workerData.distance }
                            avaliation={ workerData.avaliation }
                        />
                    ))
                }
            </section>
        </main>
    )
}