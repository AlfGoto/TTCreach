'use client';

import { useEffect, useState, useRef } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { getJSON } from './actions.js'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"


function title(arg) {
    if (arg.on) {
        return (<h1 className='text-[4svw]'>{arg.content}</h1>)
    } else {
        return (<></>)
    }
}


function FormElement() {
    const [send, setSend] = useState('Send !')

    const [titleON, setTitleON] = useState(null)
    const [titleC, setTitleC] = useState('')

    const [imgON, setImgON] = useState('')

    const [nameON, setNameON] = useState(null)
    const [nameT, setNameT] = useState('')
    const [nameD, setNameD] = useState('')

    const [ageON, setAgeON] = useState(null)
    const [ageT, setAgeT] = useState('')
    const [ageD, setAgeD] = useState('')

    const [mailON, setMailON] = useState(null)
    const [mailT, setMailT] = useState('')
    const [mailD, setMailD] = useState('')

    const [genderON, setGenderON] = useState(null)
    const [genderT, setGenderT] = useState('')
    const [genderD, setGenderD] = useState('')

    const [cityON, setCityON] = useState(null)
    const [cityT, setCityT] = useState('')
    const [cityD, setCityD] = useState('')

    const [bioON, setBioON] = useState(null)
    const [bioT, setBioT] = useState('')
    const [bioD, setBioD] = useState('')

    const [happyON, setHappyON] = useState(null)
    const [happyT, setHappyT] = useState('')
    const [happyD, setHappyD] = useState('')

    const [j, setJ] = useState(null)

    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    useEffect(() => {
        const f = async () => {
            let { data: options, error } = await supabase
                .from('options')
                .select('json')
            let j = options[0].json
            console.log(j)
            if (j.title.on) {
                setTitleON('checked')
                setTitleC(j.title.content)
            }
            if (j.img) {
                setImgON('checked')
            }
            if (j.name.on) {
                setNameON('checked')
                setNameT(j.name.title)
                setNameD(j.name.desc)
            }
            if (j.age.on) {
                setAgeON('checked')
                setAgeT(j.age.title)
                setAgeD(j.age.desc)
            }
            if (j.email.on) {
                setMailON('checked')
                setMailT(j.email.title)
                setMailD(j.email.desc)
            }
            if (j.gender.on) {
                setGenderON('checked')
                setGenderT(j.gender.title)
                setGenderD(j.gender.desc)
            }
            if (j.city.on) {
                setCityON('checked')
                setCityT(j.city.title)
                setCityD(j.city.desc)
            }
            if (j.bio.on) {
                setBioON('checked')
                setBioT(j.bio.title)
                setBioD(j.bio.desc)
            }
            if (j.happy.on) {
                setHappyON('checked')
                setHappyT(j.happy.title)
                setHappyD(j.happy.desc)
            }

        }
        f()
    }, [])

    async function post() {
        setSend('Sending...')

        const { data, error } = await supabase
            .from('options')
            .update([{
                json: ''
            }])
            .select()
    }

    return (
        <>

            <form onSubmit={post} className="gap-[1svw] flex flex-col w-4/5">

                <div>
                    <p>Title</p>
                    <Input
                        type='checkbox'
                        {...titleON}
                    />
                </div>

                <Button type="submit">{send}</Button>
            </form>
        </>
    )
}



export default FormElement