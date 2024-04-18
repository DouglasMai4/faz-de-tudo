import { InputHTMLAttributes } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    type: 'text' | 'password' | 'number' | 'email'
    label: string
    placeholder: string
    value: string | number
}

export default function InputComponent({ id, type, label, placeholder, value, ...rest }: Props) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={ id }>{ label }</Label>
            <Input
                id={ id }
                type={ type }
                placeholder={ placeholder }
                value={ value }
                { ...rest }
            />
        </div>
    )
}