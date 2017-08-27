import {
    // GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    // GraphQLNonNull as NonNull,
    GraphQLList as List,
} from 'graphql';

import StudentType from '../types/StudentType';
import Student from '../models/student_info';


const student = {
  type: new List(StudentType),
  args: {
    Name: {
      type: StringType,
    },
    ID: {
      type: StringType,
    },
    Hostel: {
      type: StringType,
    },
    Room: {
      type: StringType,
    },
    Branch: {
      type: StringType,
    },
  },

  resolve(root, request) {
        // constructs the where clause for sql
        // TODO: Bad code; someone help
    const query = {};
    if (request.Name) query.student_name = { $like: `%${request.Name}%` };
    if (request.ID) query.id = { $like: `%${request.ID}%` };
    if (request.Hostel) query.hostel = { $like: `%${request.Hostel}%` };
    if (request.Room) query.hostel_room = { $like: `%${request.Room}%` };
    if (request.Branch) query.id = { $like: `%${request.Branch}%` }; // TODO: Queries either for branch or ID; not both

    return Student.findAll({
      attributes: [
        'id',
        'student_name',
        'login_id',
        'gender',
        'hostel',
        'hostel_room',
        'admit',
      ],
      where: query,
    }).then(res =>
            res.map(val => ({
              id: val.get().id,
              name: val.get().student_name,
              loginID: val.get().login_id,
              gender: val.get().gender,
              hostel: {
                hostelName: val.get().hostel,
                hostelRoom: val.get().hostel_room,
              },
              admit: val.get().admit,
            })),
        );
  },
};

export default student;
