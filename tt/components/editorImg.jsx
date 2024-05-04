'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"

export function EditorImg(props) {
    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    useEffect(() => {
        const f = async () => {
            let { data: options, error } = await supabase
                .from('options')
                .select('json')
            let j = options[0].json
            props.changeOn(j.img)
        }
        f()
    }, [])

    return (
        <div className="border-[0.1svw] border-solid border-[lightgray] p-[1svw]">
            <p>Image</p>
            <div className="flex">
                <Input
                    type='checkbox'
                    checked={props.on}
                    onChange={e => { props.changeOn(!props.on) }}
                    className='w-6/12'
                />
            </div>
        </div>
    )

}