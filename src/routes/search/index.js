import React from 'react';
import Layout from '../../components/Layout';
import Search from './Search';

const title = 'Search';

export default {
  path: '/search',

  action() {
    return {
      title,
      component: (
        <Layout>
          <Search title={title} />
        </Layout>
			),
    };
  },
};
