import {
  // GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  // GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';

import studentType from '../types/studentType';
import student from '../models/student';
import hostel from '../models/hostel';
import ps from '../models/ps';

const studentQuery = {
  type: new List(studentType),
  args: {
    name: {
      type: StringType,
    },
    id: {
      type: StringType,
    },
    location: {
      type: StringType,
    },
    room: {
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
    if (request.name) query.studentName = { $like: `%${request.name}%` };
    if (request.id) query.id = { $like: `%${request.id}%` };
    if (request.hostelPs) query.hostelPs = { $like: `%${request.hostelPs}%` };
    // if (request.Room) query.hostel_room = { $like: `%${request.Room}%` };
    // if (request.Branch) query.id = { $like: `%${request.Branch}%` };
    // TODO: Queries either for branch or ID; not both

    return student
      .findAll({
        attributes: [
          'id',
          'studentName',
          'bitsId',
          'gender',
          'hostelPs',
          'admit',
        ],
        where: query,
      })
      .then(res => Promise.all(res.map(val => (val.get().hostelPs ? ps : hostel)
            .findById(val.get().id)
            .then((studentLocation) => {
              // TODO: Instead add attributes to the query
              let location = Object.assign({}, studentLocation.get());
              // whereong
              // TODO: location.thesis = location.thesis && location.thesis === 1 ? 'Thesis' : 'PS';
              location = Object.values(location); // removing the ID
              location.shift();

              return {
                id: val.get().bitsId,
                name: val.get().studentName,
                bitsId: val.get().bitsId,
                gender: val.get().gender,
                location: location.join('-'),
                admit: val.get().admit,
              };
            }))));
  },
};

export default studentQuery;
