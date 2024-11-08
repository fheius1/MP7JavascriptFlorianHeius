import { mount } from '@vue/test-utils'
import Comments from '../src/views/ComentariFetch.vue'
import { vi, describe, it, expect } from 'vitest'

// Mock the global fetch function
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{
            id: 1,
            name: 'Test Comment',
            email: 'test@example.com',
            body: 'This is a comment'
        }])
    })
)

describe('fetch', () => {
    it('fetches comments from API', async () => {
        // Mount the component
        const wrapper = mount(Comments)

        // Wait for the next tick to ensure the component updates
        await wrapper.vm.$nextTick()
        await new Promise(resolve => setTimeout(resolve, 100)) // Wait a bit more for fetch to complete

        // Verify that comments are loaded and there is at least one comment
        expect(wrapper.vm.comments.length).toBeGreaterThan(0)

        // Verify the content of the comment
        const commentItem = wrapper.find('li')
        expect(commentItem.text()).toContain('Test Comment')
        expect(commentItem.text()).toContain('test@example.com')
        expect(commentItem.text()).toContain('This is a comment')
    })
})

