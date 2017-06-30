/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  // GraphQLObjectType as ObjectType,
  // GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';

import StudentType from '../types/StudentType';
import Student from '../models/student_info';


const student = {
  type: new List(StudentType),
  args: {
    name: {
      type: new NonNull(StringType),
    },
  },
  resolve(root, request) {
    const whereLike = `%${request.name}%`;
    return Student
      .findAll({
        attributes: ['id', 'student_name', 'login_id', 'gender', 'hostel',
          'hostel_room', 'admit'],
        where: {
          student_name: {
            $like: whereLike,
          },
        },
      })
      .then(res => res.map(val => (
        {
          id: val.get().id,
          name: val.get().student_name,
          loginID: val.get().login_id,
          gender: val.get().gender,
          hostel: {
            hostelName: val.get().hostel,
            hostelRoom: val.get().hostel_room,
          },
          admit: val.get().admit,
        }
      )));
  },
};

export default student;
