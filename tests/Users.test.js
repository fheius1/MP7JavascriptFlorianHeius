import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import AxiosUsers from '../src/views/AxiosUsers.vue';

// Simula axios para evitar peticiones reales durante las pruebas
vi.mock('axios');

describe('axios', () => {

    it('intenta fer una peticio amb dos elements amb el nom de raul i marcs', async () => {
        // Mock de respuesta de axios
        const mockUsers = [
            {
                id: 1,
                firstName: "raul",
                lastName: "patrascu",

            },
        ];

        axios.get.mockResolvedValueOnce({ data: { users: mockUsers } });

        const wrapper = mount(AxiosUsers);

        await wrapper.vm.$nextTick();

        await new Promise(resolve => setTimeout(resolve, 100));

        const postTitles = wrapper.findAll('h2');

        expect(postTitles.length).toBe(1);

        expect(postTitles[0].text()).toContain('raul');
    });
});
