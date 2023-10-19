export const actions = {
    store: async ({ request }) => {
        const data = Object.values(await request.formData())
        console.log(data)
    }
}