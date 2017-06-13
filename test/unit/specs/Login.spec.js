import Vue from 'vue'
import Login from '@/components/login'

describe('login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.trial').textContent)
      .to.equal("You're now a member @Dianne's blogs")
  })
})