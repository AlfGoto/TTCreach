'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function EditorAge(props) {
    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    useEffect(() => {
        const f = async () => {
            let { data: options, error } = await supabase
                .from('options')
                .select('json')
            let j = options[0].json
            props.changeOn(j.age.on)
            props.changeD(j.age.desc)
            props.changeT(j.age.title)
        }
        f()
    }, [])

    return (
        <div className="border-[0.1svw] border-solid border-[#a1505b] p-[1svw] flex flex-col gap-[0.5svw]">
            <p>Age</p>
            <div className="flex">
                <Input
                    type='checkbox'
                    checked={props.on}
                    onChange={e => { props.changeOn(!props.on) }}
                    className=' accent-[#a1505b]'
                />
                <Input
                    type='text'
                    value={props.t}
                    onChange={e => { props.changeT(e.target.value) }}

                />
            </div>
            <Textarea 
                value={props.d}
                onChange={e => { props.changeD(e.target.value) }}
            />
        </div>
    )

}