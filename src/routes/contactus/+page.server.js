import axios from '$lib/utils/axios.js'
import { redirect } from '@sveltejs/kit'

export const actions = {
    store: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData())

        const  { data } = await axios.post('/contact', formData)

        throw redirect(303, '/thank-you')

    }
}