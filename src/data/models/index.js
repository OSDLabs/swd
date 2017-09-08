/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';

import bonafide from './bonafide';
import csa from './csa';
import dayPass from './daypass';
import dayScholar from './dayScholar';
import disco from './disco';
import faculty from './faculty';
import facultyIncharge from './facultyIncharge';
import holiday from './holiday';
import hostel from './hostel';
import inOutDetail from './inOutDetail';
import lateComer from './lateComer';
import leave from './leave';
import loginId from './loginId';
import loginType from './loginType';
import merchandise from './merchandise';
import merchandiseOption from './merchandiseOption';
import messBill from './messBill';
import messOption from './messOption';
import messOptionMonthYear from './messOptionMonthYear';
import miscBill from './miscBill';
import notice from './notice';
import noticeCategories from './noticeCategories';
import nucleus from './nucleus';
import ps from './ps';
import staff from './staff';
import student from './student';
import superintendent from './superintendent';
import transaction from './transaction';
import warden from './warden';

// import User from './User';
// import UserLogin from './UserLogin';
// import UserClaim from './UserClaim';
// import UserProfile from './UserProfile';

// User.hasMany(UserLogin, {
//   foreignKey: 'userId',
//   as: 'logins',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });

// User.hasMany(UserClaim, {
//   foreignKey: 'userId',
//   as: 'claims',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });

// User.hasOne(UserProfile, {
//   foreignKey: 'userId',
//   as: 'profile',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };

export { bonafide };
export { csa };
export { dayPass };
export { dayScholar };
export { disco };
export { faculty };
export { facultyIncharge };
export { holiday };
export { hostel };
export { inOutDetail };
export { lateComer };
export { leave };
export { loginId };
export { loginType };
export { merchandise };
export { merchandiseOption };
export { messBill };
export { messOption };
export { messOptionMonthYear };
export { miscBill };
export { notice };
export { noticeCategories };
export { nucleus };
export { ps };
export { staff };
export { student };
export { superintendent };
export { transaction };
export { warden };