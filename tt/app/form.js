'use client';

import { useEffect, useState, useRef } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

function FormElement() {
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState('');
    const [genderClass, setGenderClass] = useState('hidden');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [happy, setHappy] = useState('');
    const [mail, setMail] = useState('');


    const [send, setSend] = useState('Send !')

    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)




    async function post() {
        setSend('Sending...')

        const { data, error } = await supabase
            .from('posts')
            .insert([{
                name: title,
                age: number,
                gender: gender,
                city: city,
                bio: area,
                happy: happy,
                email: mail,
            }])
            .select()


    }

    //Cette fonction sert a récupérer la valeur du select. C'est du bon gros bricolage mais ça fonctionne bien !
    useEffect(() => {
        setInterval(() => {
            if (document.querySelector('button span') != null) {
                if (document.querySelector('button span').textContent != 'Where are you from ?') {
                    setCity(document.querySelector('button span').textContent)
                }
            }
            if (document.querySelector('span span span.block') != null) {
                setHappy(document.querySelector('span span span.block').getAttribute('aria-valuenow'))
                // console.log('set')
            }
        }, 1000)
    }, [])

    return (
        <form onSubmit={post} className="gap-[1svw] flex flex-col w-4/5">


            <Label htmlFor='name'>Name</Label>
            <Input
                id='name'
                type="text"
                placeholder="Write your Name here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />


            <Label htmlFor='age'>Age</Label>
            <Input
                id='age'
                type="Number"
                placeholder="Write your age here..."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
            />

            <Label htmlFor='mail'>Email</Label>
            <Input
                id='mail'
                type="email"
                placeholder="Write your mail here..."
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />



            <Label>Gender</Label>
            <fieldset className="border-[lightgray] border-solid border-[.1svw] rounded-[1svw] flex flex-col p-[1svw] items-center">
                <legend className="justify-self-center">What is your gender ? </legend>

                <div className="w-[20svw] h-[5svh] flex align justify-center items-center">
                    <Input
                        className='w-[5svw]'
                        type="radio"
                        name="radio"
                        value="man"
                        onChange={(e) => {
                            setGender(e.target.value)
                            setGenderClass('hidden')
                        }}
                    />
                    <Label htmlFor="man">Man</Label>
                </div>

                <div className="w-[20svw] h-[5svh] flex align justify-center items-center">
                    <Input
                        className='w-[5svw]'
                        type="radio"
                        name="radio"
                        value="woman"
                        onChange={(e) => {
                            setGender(e.target.value)
                            setGenderClass('hidden')
                        }}
                    />
                    <label htmlFor="woman">Woman</label>
                </div>

                <div className="w-[20svw] h-[5svh] flex align justify-center items-center">
                    <Input
                        className='w-[5svw]'
                        type="radio"
                        name="radio"
                        value="other"
                        onChange={(e) => {
                            setGender('')
                            setGenderClass('block')
                        }}
                    />
                    <label htmlFor="other">Other</label>
                </div>

                <div className={genderClass}>
                    <Input
                        id='gender'
                        type="text"
                        placeholder="So... What is your gender ?"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
            </fieldset>


            <Label>City</Label>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Where are you from ?" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Paris">Paris</SelectItem>
                    <SelectItem value="Marseille">Marseille</SelectItem>
                    <SelectItem value="Lyon">Lyon</SelectItem>
                    <SelectItem value="Toulouse">Toulouse</SelectItem>
                    <SelectItem value="Nice">Nice</SelectItem>
                    <SelectItem value="Nantes">Nantes</SelectItem>
                </SelectContent>
            </Select>


            <Label htmlFor="bio">Bio</Label>
            <Textarea
                id='bio'
                placeholder="A little note about yourself, what your ambitions are, what are your hobbies..."
                value={area}
                onChange={e => setArea(e.target.value)}
                required
            />


            <Label htmlFor='happyness'>Happyness (Sad ←→ Happy)</Label>
            <Slider
                name='happy'
                id='happyness'
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-full"
            />




            <Button type="submit">{send}</Button>
        </form>
    )
}



export default FormElement