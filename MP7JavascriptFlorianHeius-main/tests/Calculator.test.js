import { mount } from '@vue/test-utils';
import Calculator from '../src/views/Calculadora.vue';
import { flushPromises } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';


describe('Calculadora.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator);
    });

    it('hauria de mostrar correctament els números a la pantalla', async () => {
        // Interactua amb els botons per ingressar el número 12
        await wrapper.findAll('button').at(1).trigger('click'); // boto 1
        await wrapper.findAll('button').at(2).trigger('click'); // boto 2

        // Espera que el display sigui '12'
        await flushPromises();
        expect(wrapper.text()).toContain('12');
    });

    it('hauria de fer una suma correctament', async () => {
        await wrapper.findAll('button').at(1).trigger('click'); // boto 1
        await wrapper.findAll('button').at(11).trigger('click'); // boto +
        await wrapper.findAll('button').at(2).trigger('click'); // boto 2
        await wrapper.find('button:last-child').trigger('click'); // boto =

        // Verifica que el resultat sigui '3'
        await flushPromises();
        expect(wrapper.text()).toContain('3');
    });

    it('hauria de manejar zeros inicials correctament', async () => {
        //Ingrés de 01 (hauria de ser interpretat com a 1)
        await wrapper.findAll('button').at(9).trigger('click'); // boto 0
        await wrapper.findAll('button').at(1).trigger('click'); // boto 1

        // Verifica que el display sigui '1' (ignora el 0 inicial)
        await flushPromises();
        expect(wrapper.text()).toContain('1');
    });

    it('hauria de manejar múltiples operadors sense errors', async () => {
        // Ingreso de 1 ++ 2 (el operador '+' duplicado debería ser ignorado)
        await wrapper.findAll('button').at(1).trigger('click'); // boto 1
        await wrapper.findAll('button').at(11).trigger('click'); // boto +
        await wrapper.findAll('button').at(11).trigger('click'); // boto + (duplicado)
        await wrapper.findAll('button').at(2).trigger('click'); // boto 2
        await wrapper.find('button:last-child').trigger('click'); // boto =

        // Verifica que el resultat sigui '3' (ignora l'operador duplicat)
        await flushPromises();
        expect(wrapper.text()).toContain('3');
    });
});

















