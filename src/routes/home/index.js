/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action() {
    // Code to fetch external data
    // const resp = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: '{news{title,link,content}}',
    //   }),
    //   credentials: 'include',
    // });
    // const { data } = await resp.json();
    // if (!data || !data.news) throw new Error('Failed to load the news feed.');

    // Dummy data
    const latest_news = [
      'INSTITUTE DUES SEMII -16-17',
      'GATE 2018',
      'Notification for ST students applying for National Scholarship',
      'ATTENTION STUDENTS WHO WILL BE ON CAMPUS (SEM I, 17-18)',
    ];
    return {
      title: 'Student Welfare Division',
      component: <Layout><Home sideCardData={latest_news} /></Layout>,
    };
  },

};
