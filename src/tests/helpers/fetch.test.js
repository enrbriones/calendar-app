import { fetchSinToken, fetchConToken } from "../../helpers/fetch"

describe('Pruebas en el helper Fetch', () => {

    let token = ''

    test('fetchSinToken debe funcionar', async () => {
        const resp = await fetchSinToken('auth', {email: 'test3@test.com', password:'123456'},'POST')
        expect(resp instanceof Response).toBe(true)
        const body = await resp.json()
        expect(body.ok).toBe(true)
        token = body.token
    })

    test('fetchConToken debe funcionar', async () => {
        localStorage.setItem('token', token)
        const resp = await fetchConToken('events/5f757716e64def1560303cfc',{},'DELETE' )
        const body = await resp.json()
        expect(body.msg).toBe('Evento no existe por ese id')
    })
    
    
})
