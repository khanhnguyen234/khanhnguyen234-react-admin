import * as React from 'react';
import PWAModule from '@khanhnguyen234/react-core/src/pwa-module';
import RootComponent from './root.component';

function Placeholder() {
  return <div>HomeModule placeholder</div>;
}

const Module = new PWAModule({
  name: 'RootModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const productDetail = (
      await import('../product-detail/product-detail.module')
    ).default;
    return {
      layout: RootComponent,
      named: {},
      routing: [
        {
          path: '/product-detail',
          module: productDetail.getComponent(ctx),
        },
      ],
      subs: [],
    };
  },
});

export default Module;
