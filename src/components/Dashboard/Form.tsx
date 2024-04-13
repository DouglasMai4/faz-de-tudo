import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  

export default function Form() {
    return (
        <form>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Nome do trabalhador" />
                <Button type="submit">Pesquisar</Button>

            </div>
            <div className="flex gap-2 mt-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ordernar por" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="avaliation">Avaliação</SelectItem>
                        <SelectItem value="name">Nome</SelectItem>
                        <SelectItem value="distance">Distancia</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Profissão" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="encanador">Encanador</SelectItem>
                        <SelectItem value="eletricista">Eletricista</SelectItem>
                        <SelectItem value="jardineiro">Jardineiro</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </form>
    )
}