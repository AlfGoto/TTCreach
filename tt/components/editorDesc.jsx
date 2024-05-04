'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function EditorDesc(props) {
    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    useEffect(() => {
        const f = async () => {
            let { data: options, error } = await supabase
                .from('options')
                .select('json')
            let j = options[0].json
            props.changeOn(j.desc.on)
            props.changeC(j.desc.content)
        }
        f()
    }, [])

    return (
        <div className="border-[0.1svw] border-solid border-[lightgray] p-[1svw] flex flex-col gap-[0.5svw]">
            <p>Description</p>
            <div className="flex">
                <Input
                    type='checkbox'
                    checked={props.on}
                    onChange={e => { props.changeOn(!props.on) }}
                    className='w-6/12'
                />
            </div>
            <Textarea 
                value={props.d}
                onChange={e => { props.changeC(e.target.value) }}
            />
        </div>
    )

}