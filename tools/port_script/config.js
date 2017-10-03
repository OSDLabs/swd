const login = {
  student: 1,
  faculty: 2,
  staff: 3,
};

// Configuration for the database
module.exports = {
  host: 'localhost',
  user: 'swd',
  password: 'swd_base',
  db: {
    source: 'db_swd',
    destination: 'new_db_swd',
  },
  rules: [

    // loginType
    {
      query: `INSERT INTO loginType (id, type) VALUES \
        (${login.student}, "student"), \
        (${login.faculty}, "faculty"), \
        (${login.staff}, "staff");`,
    },

    // loginId
    {
      skip: true,
      table: {
        old: 'login_ids',
        new: 'loginId',
      },
      fields: {
        loginId: 'login_id',
        type: {
          switch: {
            condition: 'type',
            cases: {
              student: login.student,
              faculty: login.faculty,
              warden: login.faculty,
              staff: login.staff,
              security: login.staff,
              superintend: login.staff,
            },
          },
        },
        passHash: { value: 'PASSWORD HASH HERE' },
        passSalt: { value: 'PASSWORD SALT HERE' },
      },
    },

    // student
    {
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
                { eval: { operator: '===', first_attribute: 'hostel', second_value: 'Thesis' } },
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

    // hostel
    {
      table: {
        old: {
          table: 'student_info',
          // TODO: find out what has to be done with the rest of the values
          where: 'hostel != "Thesis" \
            && hostel != "" \
            && hostel != "Qtrs" \
            && hostel != "Graduate" \
            && hostel != "PS2" \
            && hostel != "Temp Withd" \
            && hostel != "DAY SCHOLAR"',
        },
        new: 'hostel',
      },
      fields: {
        id: 'login_id',
        hostel: 'hostel',
        room: 'hostel_room',
      },
    },

    // bonafide
    {
      table: {
        old: 'bonafide',
        new: 'bonafide',
      },
      fields: {
        id: 'index_',
        studentId: 'login_id',
        reqDate: 'req_date',
        reason: 'reason',
        otherReason: 'other_reason',
        year: 'year',
        printed: { value: '0' },
      },
    },

    // day scholars
    {
      table: {
        new: 'dayScholar',
        old: 'day_scholars',
      },
      fields: {
        studentId: 'login_id',
      },
    },

    // day pass
    {
      table: {
        new: 'dayPass',
        old: 'daypass',
      },
      fields: {
        id: 'daypass_id',
        studentId: 'login_id',
        date: 'Date',
        reason: 'Reason',
        consentType: 'consent_type',
        approvedBy: 'ApprovedBy',
        comment: 'Comment',
      },
    },

    // csa
    {
      table: {
        new: 'csa',
        old: {
          union: ['csa', 'student_info'],
          on: 'student_info.student_name = csa.name',
        },
      },
      fields: {
        studentId: 'login_id',
        title: 'title',
        csaEmail: 'email',
      },
    },

    // disco
    {
      skip: true,
      table: {
        new: 'disco',
        old: 'discp',
      },
      fields: {
        studentId: 'login_id',
        dateOfViolation: 'date',
        subject: 'heading',
        action: 'action',
      },
    },

    // faculty
    {
      table: {
        new: 'faculty',
        old: 'wardens',
      },
      fields: {
        loginId: 'login_id',
        name: 'name',
        chamber: 'chamber',
        office: 'office',
        phone: { value: '' },
        email: { value: '' },
      },
    },

    // facultyIncharge
    {
      table: {
        new: 'facultyIncharge',
        old: 'faculty_incharge',
      },
      fields: {
        facultyId: 'login_id',
        function: 'function',
      },
    },

    // holiday
    {
      table: {
        new: 'holiday',
        old: 'holidays',
      },
      fields: {
        date: 'HolDate',
        institute: '0',
        name: { value: 'unknown' },
      },
    },
    {
      table: {
        new: 'holiday',
        old: 'institure_holidays',
      },
      fields: {
        date: 'date',
        institute: '1',
        name: { value: 'unknown' },
      },
    },

  ],
};
