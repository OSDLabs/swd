module.exports = {
  0: {
    table: {
      old: {
        union: ['student_info', 'cgpa'],
        on: 'student_info.login_id = cgpa.login_id',
      },
      new: 'student',
    },
    fields: {
      id: 'login_id',
      studentName: 'student_name',
      bitsId: 'id',
      hostelPs: {
        if: {
          condition: {
            or: [
              { eval: { operator: '===', first_attribute: 'hostel', second_value: 'PS2' } },
              { eval: { operator: '===', first_attribute: 'hostel', second_value: 'THESIS' } },
            ],
          },
          pass: { value: 1 },
          fail: { value: 0 },
        },
      },
      gender: 'gender',
      bDay: 'bday',
      phone: 'phone',
      email: 'email',
      address: 'address',
      bloodGroup: 'bloodgroup',
      cgpa: 'cgpa',
      admit: 'admit',
      parentName: 'father_name',
      parentPhone: 'father_phone',
      parentEmail: 'father_email',
    },
  },
};
