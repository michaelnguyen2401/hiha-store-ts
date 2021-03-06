import { lazy } from 'react';
import { IRoute } from 'common/definitions/routes';
import { Main } from 'common/layouts';

const CollectionPreviewPage = lazy(() =>
  import('modules/shop/pages').then(({ CollectionPreview }) => ({
    default: CollectionPreview,
  })),
);

const CollectionPage = lazy(() =>
  import('modules/shop/pages').then(({ CollectionPage }) => ({
    default: CollectionPage,
  })),
);

const SHOP_PAGE_PATH = '/shop';

const routes: IRoute[] = [
  {
    path: SHOP_PAGE_PATH,
    title: 'Shop page',
    exact: true,
    component: CollectionPreviewPage,
    layout: Main,
  },
  {
    path: `${SHOP_PAGE_PATH}/:collectionName`,
    title: 'Collection page',
    component: CollectionPage,
    layout: Main,
  },
];

export { SHOP_PAGE_PATH, routes };
