'use client';

import { useEffect, useState, useRef } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { getJSON } from './actions.js'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
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
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState('');
    const [genderClass, setGenderClass] = useState('hidden');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [happy, setHappy] = useState('');
    const [mail, setMail] = useState('');


    const [send, setSend] = useState('Send !')

    const [titleON, setTitleON] = useState('hidden')
    const [titleC, setTitleC] = useState('')
    const [imgON, setImgON] = useState('hidden')

    const [descON, setDescON] = useState('hidden')
    const [descC, setDescC] = useState('')

    const [nameON, setNameON] = useState('hidden')
    const [nameT, setNameT] = useState('')
    const [nameD, setNameD] = useState('')

    const [ageON, setAgeON] = useState('hidden')
    const [ageT, setAgeT] = useState('')
    const [ageD, setAgeD] = useState('')

    const [mailON, setMailON] = useState('hidden')
    const [mailT, setMailT] = useState('')
    const [mailD, setMailD] = useState('')

    const [genderON, setGenderON] = useState('hidden')
    const [genderT, setGenderT] = useState('')
    const [genderD, setGenderD] = useState('')

    const [cityON, setCityON] = useState('hidden')
    const [cityT, setCityT] = useState('')
    const [cityD, setCityD] = useState('')

    const [bioON, setBioON] = useState('hidden')
    const [bioT, setBioT] = useState('')
    const [bioD, setBioD] = useState('')

    const [happyON, setHappyON] = useState('hidden')
    const [happyT, setHappyT] = useState('')
    const [happyD, setHappyD] = useState('')

    const supabase = createClientComponentClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    useEffect(() => {
        const f = async () => {
            let { data: options, error } = await supabase
                .from('options')
                .select('json')
            let j = options[0].json
            console.log(j)
            if (j.desc.on) {
                setDescON('block')
                setDescC(j.desc.content)
            }
            if (j.title.on) {
                setTitleON('block')
                setTitleC(j.title.content)
            }
            if (j.img) {
                setImgON('block')
            }
            if (j.name.on) {
                setNameON('block')
                setNameT(j.name.title)
                setNameD(j.name.desc)
            }
            if (j.age.on) {
                setAgeON('block')
                setAgeT(j.age.title)
                setAgeD(j.age.desc)
            }
            if (j.email.on) {
                setMailON('block')
                setMailT(j.email.title)
                setMailD(j.email.desc)
            }
            if (j.gender.on) {
                setGenderON('flex')
                setGenderT(j.gender.title)
                setGenderD(j.gender.desc)
            }
            if (j.city.on) {
                setCityON('block')
                setCityT(j.city.title)
                setCityD(j.city.desc)
            }
            if (j.bio.on) {
                setBioON('block')
                setBioT(j.bio.title)
                setBioD(j.bio.desc)
            }
            if (j.happy.on) {
                setHappyON('flex')
                setHappyT(j.happy.title)
                setHappyD(j.happy.desc)
            }

        }
        f()
    }, [])

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
        <>
            <h1 className={'text-[4svw] ' + titleON}>{titleC}</h1>
            <img
                src="/img/header.jpeg"
                alt="A picture of a man coding"
                className={'z-[-1]  w-4/5 m-[5%] ' + imgON}
            />
            <p
                className={"w-4/5 mb-[2svw] " + descON}>
                {descC}
            </p>
            <form onSubmit={post} className="gap-[1svw] flex flex-col w-4/5">


                <Label htmlFor='name'>{nameT}</Label>
                <Input
                    id='name'
                    type="text"
                    placeholder={nameD}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={nameON}
                />


                <Label htmlFor='age'>{ageT}</Label>
                <Input
                    id='age'
                    type="Number"
                    placeholder={ageD}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className={ageON}
                />

                <Label htmlFor='mail'>{mailT}</Label>
                <Input
                    id='mail'
                    type="email"
                    placeholder={mailD}
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    className={mailON}
                />



                <Label>{genderT}</Label>
                <fieldset className={"border-[lightgray] border-solid border-[.1svw] rounded-[1svw] flex-col p-[1svw] items-center " + genderON}>
                    <legend className="justify-self-center">{genderD}</legend>

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


                <Label>{cityT}</Label>
                <Select className={cityON}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={cityD} />
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


                <Label htmlFor="bio">{bioT}</Label>
                <Textarea
                    id='bio'
                    placeholder={bioD}
                    value={area}
                    onChange={e => setArea(e.target.value)}
                    className={bioON}
                />


                <Label htmlFor='happyness'>{happyT + '  ' + happyD}</Label>
                <Slider
                    name='happy'
                    id='happyness'
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className={"w-full " + happyON}
                />




                <Button type="submit">{send}</Button>
            </form>
        </>
    )
}



export default FormElement