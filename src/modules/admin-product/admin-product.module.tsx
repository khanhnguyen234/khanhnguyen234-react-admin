import * as React from 'react';
import MicroModule from '@khanhnguyen234/react-core/src/micro-module';
import _data from './dataSrc';
import _s2 from './admin-product.component';

function Placeholder() {
  return <div>Placeholder</div>;
}

const Module = new MicroModule({
  name: 'AdminProductModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_data, _s2] = (
      await Promise.allSettled([
        import('./dataSrc'),
        import('./admin-product.component'),
      ])
    ).map((microModule) => {
      microModule.status === 'rejected' && console.error(microModule.reason);
      return microModule.status === 'fulfilled'
        ? microModule.value.default
        : null;
    });
    return {
      layout: _s2,
      named: {},
      routing: [],
      subs: [],
      data: [_data],
    };
  },
});

export default Module;
