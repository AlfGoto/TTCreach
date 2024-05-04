'use client';

import { useEffect, useState, useRef } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { getJSON } from './actions.js'

import { Button } from "@/components/ui/button"

import { EditorTitle } from '/components/editorTitle'
import { EditorImg } from '/components/editorImg'
import { EditorName } from '/components/editorName'
import { EditorAge } from '/components/editorAge'
import { EditorMail } from '/components/editorMail'
import { EditorGender } from '/components/editorGender'
import { EditorCity } from '/components/editorCity'
import { EditorBio } from '/components/editorBio'
import { EditorHappy } from '/components/editorHappy'
import { EditorDesc } from '/components/EditorDescr'


function FormElement() {
    const [send, setSend] = useState('Send !')

    const [titleON, setTitleON] = useState(false)
    const [titleC, setTitleC] = useState('')

    const [descON, setDescON] = useState(false)
    const [descC, setDescC] = useState('')

    const [imgON, setImgON] = useState('')

    const [nameON, setNameON] = useState(false)
    const [nameT, setNameT] = useState('')
    const [nameD, setNameD] = useState('')

    const [ageON, setAgeON] = useState(false)
    const [ageT, setAgeT] = useState('')
    const [ageD, setAgeD] = useState('')

    const [mailON, setMailON] = useState(false)
    const [mailT, setMailT] = useState('')
    const [mailD, setMailD] = useState('')

    const [genderON, setGenderON] = useState(false)
    const [genderT, setGenderT] = useState('')
    const [genderD, setGenderD] = useState('')

    const [cityON, setCityON] = useState(false)
    const [cityT, setCityT] = useState('')
    const [cityD, setCityD] = useState('')

    const [bioON, setBioON] = useState(false)
    const [bioT, setBioT] = useState('')
    const [bioD, setBioD] = useState('')

    const [happyON, setHappyON] = useState(false)
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
        }
        f()
    }, [])

    async function post() {
        setSend('Sending...')

        const jason = {
            "title": {
                "on": titleON,
                "content": titleC,
            },
            "desc": {
                "on": descON,
                "content": descC
            },
            "img": imgON,
            "name": {
                "on": nameON,
                "title": nameT,
                "desc": nameD
            },
            "age": {
                "on": ageON,
                "title": ageT,
                "desc": ageD
            },
            "email": {
                "on": mailON,
                "title": mailT,
                "desc": mailD
            },
            "gender": {
                "on": genderON,
                "title": genderT,
                "desc": genderD
            },
            "city": {
                "on": cityON,
                "title": cityT,
                "desc": cityD
            },
            "bio": {
                "on": bioON,
                "title": bioT,
                "desc": bioD
            },
            "happy": {
                "on": happyON,
                "title": happyT,
                "desc": happyD
            }
        }


        const { data, error } = await supabase
            .from('options')
            .update({
                json: jason
            }).eq('id', 3)
    }


    //c'est clairement possible de ne faire qu'un component editor modulable mais je m'en suis rendu compte trop tard avec le temps qu'il me restait
    return (
        <form onSubmit={post} className="gap-[1svw] flex flex-col w-4/5">

            <EditorTitle
                changeOn={titleOn => setTitleON(titleOn)}
                titleOn={titleON}
                changeC={titleC => setTitleC(titleC)}
                titleC={titleC}
            />

            <EditorImg
                changeOn={imgON => setImgON(imgON)}
                on={imgON}
            />

            <EditorDesc
                changeOn={descON => setDescON(descON)}
                on={descON}
                changeC={descC => setDescC(descC)}
                c={descC}
            />

            <EditorName
                changeOn={nameON => setNameON(nameON)}
                on={nameON}
                changeT={nameT => setNameT(nameT)}
                t={nameT}
                changeD={nameD => setNameD(nameD)}
                d={nameD}
            />

            <EditorAge
                changeOn={ageON => setAgeON(ageON)}
                on={ageON}
                changeT={ageT => setAgeT(ageT)}
                t={ageT}
                changeD={ageD => setAgeD(ageD)}
                d={ageD}
            />
            <EditorMail
                changeOn={mailON => setMailON(mailON)}
                on={mailON}
                changeT={mailT => setMailT(mailT)}
                t={mailT}
                changeD={mailD => setMailD(mailD)}
                d={mailD}
            />
            <EditorGender
                changeOn={genderON => setGenderON(genderON)}
                on={genderON}
                changeT={genderT => setGenderT(genderT)}
                t={genderT}
                changeD={genderD => setGenderD(genderD)}
                d={genderD}
            />
            <EditorCity
                changeOn={cityON => setCityON(cityON)}
                on={cityON}
                changeT={cityT => setCityT(cityT)}
                t={cityT}
                changeD={cityD => setCityD(cityD)}
                d={cityD}
            />
            <EditorBio
                changeOn={bioON => setBioON(bioON)}
                on={bioON}
                changeT={bioT => setBioT(bioT)}
                t={bioT}
                changeD={bioD => setBioD(bioD)}
                d={bioD}
            />
            <EditorHappy
                changeOn={happyON => setHappyON(happyON)}
                on={happyON}
                changeT={happyT => setHappyT(happyT)}
                t={happyT}
                changeD={happyD => setHappyD(happyD)}
                d={happyD}
            />

            <Button type="submit">{send}</Button>
        </form>
    )
}



export default FormElement