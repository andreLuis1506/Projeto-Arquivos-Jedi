import {  describe, expect, test, vi, } from 'vitest'
import type Vi from 'vitest'
import PeopleApi from '@/services/People/index'
import api from '@/services/api'
// import axios from 'axios'

vi.mock('../api')
const mockedAxios = api as Vi.Mocked<typeof api>;

describe('PeopleApi', () => {
    test('Detalhes de Personagem', async () => {
        const mock = require('../../mock/people.json')

        mockedAxios.get.mockResolvedValue({ data: mock.results[1] })

        const character = await PeopleApi.detail(1)

        expect(api.get).toHaveBeenCalledWith('/people/1')
        expect(character).toStrictEqual(mock.results[1])
    })

    test('Lista de personagens', async () => {
        const mock = require('../../mock/people.json')

        mockedAxios.get.mockResolvedValue({ data: mock })

        const people = await PeopleApi.list()

        expect(api.get).toHaveBeenCalledWith('/people')
        expect(people).toStrictEqual(mock)
    })

    test('Pesquisa de personagens', async () => {
        const mock = require('../../mock/people.json')

        mockedAxios.get.mockResolvedValue({ data: mock })

        const people = await PeopleApi.search('Luke')

        expect(api.get).toHaveBeenCalledWith('/people?search=Luke')
        expect(people).toStrictEqual(mock)
    })
})
