'use client';

import { useState } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Form() {
    const [title, setTitle] = useState('');
    const [send, setSend] = useState('Send !')
    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    async function post() {
        setSend('Sending...')

        const { data, error } = await supabase
            .from('posts')
            .insert([
                { text: title, }
            ])
            .select()

    }

    return (
        <form onSubmit={post}>
            <h3>Create a new Note</h3>
            <Input
                type="text"
                placeholder="Text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit">{send}</Button>

        </form>
    )
}



export default Form