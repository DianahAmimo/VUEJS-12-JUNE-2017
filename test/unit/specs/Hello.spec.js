// Simple assertions
import Vue from 'vue';
// The path is relative to the project root.
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  it(`should render the assigned name as its text content`, () => {

    const Const = Vue.extend(Hello)

    const comp = new Const({
      propsData:{
        propValue: "hey there welcome to Diannes tutorials point"
      }
    }).$mount()

    expect(comp.$el.querySelector(".prop").textContent)
      .to.equal('hey there welcome to Diannes tutorials point')
  })
});

