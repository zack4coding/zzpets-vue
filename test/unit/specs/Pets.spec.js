import Vue from 'vue';
import Pets from '@/components/Pets';

describe('Pets.vue', () => {
  it('display items from the list', () => {
    const Constructor = Vue.extend(Pets);
    const ListComponent = new Constructor().$mount();
    expect(ListComponent.maleArry)
      .to.contai('Bob');
  });
});
