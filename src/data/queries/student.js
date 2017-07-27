import {
    // GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    // GraphQLNonNull as NonNull,
    GraphQLList as List,
} from 'graphql';

import studentType from '../types/studentType';
import student from '../models/student';


const studentQuery = {
  type: new List(studentType),
  args: {
    name: {
      type: StringType,
    },
    id: {
      type: StringType,
    },
    hostelPs: {
      type: StringType,
    },
    // room: {
    //   type: StringType,
    // },
    // branch: {
    //   type: StringType,
    // },
  },

  resolve(root, request) {
    // constructs the where clause for sql
    // TODO: Bad code; someone help
    const query = {};
    if (request.name) query.name = { $like: `%${request.name}%` };
    if (request.id) query.id = { $like: `%${request.id}%` };
    if (request.hostelPs) query.hostelPs = { $like: `%${request.hostelPs}%` };
    // if (request.Room) query.hostel_room = { $like: `%${request.Room}%` };
    // if (request.Branch) query.id = { $like: `%${request.Branch}%` };
    // TODO: Queries either for branch or ID; not both


    return student.findAll({
      attributes: [
        'id',
        'studentName',
        'bitsId',
        'gender',
        'hostel',
        'admit',
      ],
      where: query
    }).then(res =>
            res.map(val => ({
              id: val.get().id,
              name: val.get().name,
              bitsId: val.get().bitsId,
              gender: val.get().gender,
              // hostel: {
              //   hostelName: val.get().hostel,
              //   hostelRoom: val.get().hostel_room,
              // },
              admit: val.get().admit,
            })),
        );
  },
};

export default studentQuery;
