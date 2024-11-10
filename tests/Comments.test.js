import { mount } from '@vue/test-utils'
import Comments from '../src/views/ComentariFetch.vue'
import { vi, describe, it, expect } from 'vitest'

// Mock the global fetch function
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{
            id: 1,
            name: 'Comentari de Prova',
            email: 'test@example.com',
            body: 'Comentari de prova'
        }])
    })
)

describe('fetch', () => {
    it('fetches comments from API', async () => {
        // Munta el component
        const wrapper = mount(Comments)

        // Espera al següent tic per assegurar-se que l'actualitzacio dels components
        await wrapper.vm.$nextTick()
        await new Promise(resolve => setTimeout(resolve, 100)) // Espera a que el fetch es completi

        // Comprova que els comentaris estiguin carregats i que hi ha almenys un comentari
        expect(wrapper.vm.comments.length).toBeGreaterThan(0)

        // Verifica el contingut del comentari
        const commentItem = wrapper.find('li')
        expect(commentItem.text()).toContain('Comentari de Prova')
        expect(commentItem.text()).toContain('test@example.com')
        expect(commentItem.text()).toContain('Comentari de prova')
    })
})











