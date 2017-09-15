/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const HostelType = new ObjectType({
  name: 'hostel',
  fields: {
    hostelName: { type: StringType },
    hostelRoom: { type: StringType },
  },
});

const studentType = new ObjectType({
  name: 'student',
  fields: {
    id: { type: StringType },
    bitsId: { type: new NonNull(ID) },
    studentName: { type: new NonNull(StringType) },
    gender: { type: StringType },
    hostel: { type: HostelType },
    admit: { type: StringType },
  },
});

export default studentType;
