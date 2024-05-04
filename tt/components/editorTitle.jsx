'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"

export function EditorTitle(props) {
    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    useEffect(() => {
        const f = async () => {
            let { data: options, error } = await supabase
                .from('options')
                .select('json')
            let j = options[0].json
            props.changeOn(j.title.on)
            props.changeC(j.title.content)
        }
        f()
    }, [])

    return (
        <div className="border-[0.1svw] border-solid border-[#a1505b] p-[1svw]">
            <p>Title</p>
            <div className="flex">
                <Input
                    type='checkbox'
                    checked={props.titleOn}
                    onChange={e=>{props.changeOn(!props.titleOn)} }
                />
                <Input
                    type='text'
                    value={props.titleC}
                    onChange={e => { props.changeC(e.target.value) }}

                />
            </div>
        </div>
    )

}