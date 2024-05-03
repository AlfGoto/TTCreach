'use server'

import supabase from '../utils/supabase'

export async function getJSON() {
    let { data: options, error } = await supabase
        .from('options')
        .select('json')


    return options[0].json
}