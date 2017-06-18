/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import Student from './student_info';
import Bonafide from './bonafide';
import CGPA from './cgpa';
import CGPA_View from './cgpa_view';
import CSA from './csa';
import Day_Scholars from './day_scholars';
import DayPass from './daypass';
import DayPassTableGate from './daypasstablegate';
import Discp from './discp';
import Discp_View from './discp_view';
import Faculty_Incharge from './faculty_incharge';
import Gate_Timings from './gate_timings';
import Holidays from './holidays';
import Info_Update from './info_update';
import InOutDetails from './inoutdetails';
import Institure_Holidays from './institure_holidays';
import LateComers from './latecomers';
import Leave_Day_Counts from './leave_day_counts';
import Leave_Requests from './leave_requests';
import Leave_Requests_View from './leave_requests_view';
import LeaveTableGate from './leavetablegate';
import Login_IDs from './login_ids';
import Mess_Option from './mess_option';
import Mess_Option_Future from './mess_option_future';
import Mess_Option_Future_View from './mess_option_future_view';
import Mess_Option_Open from './mess_option_open';
import Notices from './notices';
import Notices_Categories from './notices_categories';
import Nucleus from './nucleus';
import Product_Page_Contents from './product_page_contents';
import Products from './products';
import Staff from './staff';
import Student_Dues from './student_dues';
import Students_Basic from './students_basic';
import Superintendents from './superintendents';
import Wardens from './wardens';

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
export { Student };
export { Bonafide };
export { CGPA };
export { CGPA_View };
export { CSA };
export { Day_Scholars };
export { DayPass };
export { DayPassTableGate };
export { Discp };
export { Discp_View };
export { Faculty_Incharge };
export { Gate_Timings };
export { Holidays };
export { Info_Update };
export { InOutDetails };
export { Institure_Holidays };
export { LateComers };
export { Leave_Day_Counts };
export { Leave_Requests };
export { Leave_Requests_View };
export { LeaveTableGate };
export { Login_IDs };
export { Mess_Option };
export { Mess_Option_Future };
export { Mess_Option_Future_View };
export { Mess_Option_Open };
export { Notices };
export { Notices_Categories };
export { Nucleus };
export { Product_Page_Contents };
export { Products };
export { Staff };
export { Student_Dues };
export { Students_Basic };
export { Superintendents };
export { Wardens };