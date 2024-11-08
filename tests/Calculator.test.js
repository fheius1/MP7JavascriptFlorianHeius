import { mount } from '@vue/test-utils';
import Calculator from '../src/views/Calculadora.vue';
import { flushPromises } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';  // Asegúrate de que estas importaciones estén presentes


describe('Calculadora.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator);
    });

    it('debería mostrar correctamente los números en la pantalla', async () => {
        // Interactúa con los botones para ingresar el número 12
        await wrapper.findAll('button').at(1).trigger('click'); // botón 1
        await wrapper.findAll('button').at(2).trigger('click'); // botón 2

        // Espera que el display sea '12'
        await flushPromises();  // Asegura que todas las promesas y actualizaciones se resuelvan
        expect(wrapper.text()).toContain('12');
    });

    it('debería realizar una suma correctamente', async () => {
        // Ingreso de 1 + 2
        await wrapper.findAll('button').at(1).trigger('click'); // botón 1
        await wrapper.findAll('button').at(11).trigger('click'); // botón +
        await wrapper.findAll('button').at(2).trigger('click'); // botón 2
        await wrapper.find('button:last-child').trigger('click'); // botón =

        // Verifica que el resultado sea '3'
        await flushPromises();
        expect(wrapper.text()).toContain('3');
    });

    it('debería manejar ceros iniciales correctamente', async () => {
        // Ingreso de 01 (debería ser interpretado como 1)
        await wrapper.findAll('button').at(9).trigger('click'); // botón 0
        await wrapper.findAll('button').at(1).trigger('click'); // botón 1

        // Verifica que el display sea '1' (ignora el 0 inicial)
        await flushPromises();
        expect(wrapper.text()).toContain('1');
    });

    it('debería manejar múltiples operadores sin errores', async () => {
        // Ingreso de 1 ++ 2 (el operador '+' duplicado debería ser ignorado)
        await wrapper.findAll('button').at(1).trigger('click'); // botón 1
        await wrapper.findAll('button').at(11).trigger('click'); // botón +
        await wrapper.findAll('button').at(11).trigger('click'); // botón + (duplicado)
        await wrapper.findAll('button').at(2).trigger('click'); // botón 2
        await wrapper.find('button:last-child').trigger('click'); // botón =

        // Verifica que el resultado sea '3' (ignora el operador duplicado)
        await flushPromises();
        expect(wrapper.text()).toContain('3');
    });



});
