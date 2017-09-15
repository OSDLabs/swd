import studentType from '../types/StudentType';
import student from '../models/student';


import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
    GraphQLList as List,
} from 'graphql';


const studentquery = {
  type: new List(studentType),
  args: {
    studentName: {
      type: StringType,
    },
    bitsId: {
      type: StringType,
    },
    hostel: {
      type: StringType,
    },
    hostelRoom: {
      type: StringType,
    },
    branch: {
      type: StringType,
    },
  },

  resolve(root, request) {
        // constructs the where clause for sql
        // TODO: Bad code; someone help
    const query = {};
    if (request.studentName) query.studentName = { $like: `%${request.studentName}%` };
    if (request.bitsId) query.bitsId = { $like: `%${request.bitsId}%` };
    if (request.hostel) query.hostel = { $like: `%${request.hostel}%` };
    if (request.hostelRoom) query.hostelRoom = { $like: `%${request.hostelRoom}%` };
    if (request.branch) query.bitsId = { $like: `%${request.branch}%` }; // TODO: Queries either for branch or ID; not both

    return student.findAll({
      attributes: [
        'bitsId',
        'studentName',
        'gender',
        'hostel',
        'hostelRoom',
        'admit',
      ],
      where: query,
    }).then(res =>
            res.map(val => ({
              bitsId: val.get().bitsId,
              studentName: val.get().studentName,
              gender: val.get().gender,
              hostel: {
                hostelName: val.get().hostel,
                hostelRoom: val.get().hostelRoom,
              },
              admit: val.get().admit,
            })),
        );
  },
};

export default studentquery;