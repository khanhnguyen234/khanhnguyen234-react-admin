import * as React from 'react';
import MicroModule from '@khanhnguyen234/react-core/src/micro-module';
import RootComponent from './root.component';
import { INTERNAL_URLS } from '@khanhnguyen234/react-common/src/lib/const';

function Placeholder() {
  return <div>HomeModule placeholder</div>;
}

const Module = new MicroModule({
  name: 'RootAdmin',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const adminProduct = (await import('../admin-product/admin-product.module'))
      .default;
    return {
      layout: RootComponent,
      named: {},
      routing: [
        {
          path: INTERNAL_URLS.adminProductCreate,
          module: adminProduct.getComponent(ctx),
        },
        {
          path: INTERNAL_URLS.adminProductDetail,
          module: adminProduct.getComponent(ctx),
        },
      ],
      subs: [],
    };
  },
});

export default Module;
