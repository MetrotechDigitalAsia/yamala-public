import axios from '$lib/utils/axios.js'
import { redirect } from '@sveltejs/kit'

export const actions = {
    store: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData())
        console.log(formData)
        const  { data } = await axios.post('/contact', formData)
        console.log(data)

        throw redirect(303, '/thank-you?access=1')

    }
}