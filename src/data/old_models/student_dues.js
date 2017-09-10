/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Student_Dues = Model.define('student_dues', {
  IDNO: {
    type: DataTypes.STRING(255),
    allowNull: true,
    primaryKey: true,
  },
  NAME: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Advance: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  July16_Mess: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Aug16_Mess_Bill: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Medical_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Late_comer_charges: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Insurance: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  During_Placement_IT_training_hostel_Charges: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Pre_Waves_Dance_Workshop: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PSI_Summer_Term_Accomodation_Charges: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  French_Course: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Music_Course: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  SAE_Club_Tshirt: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  IEEE_Pass: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  IEEE_Tshirt: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Coalesence_Workshop: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Coalesence_Conference: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Coalesence_Tshirts: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Bitsaa_Summit: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Sept_Mess_Bill: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Sept_Medical_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Late_Comer_charges_Sept: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DupID_Aug: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DupID_Sept: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  VGR_Sept: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Abhigyan_Tshirts: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Ganesh_Chaturthi_Contribn: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Quark_workshop: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Scrutiny: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  sursangam: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Waves_Comedy_Nites: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Zephyr_Tess: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Oct16_Mess_Bill: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Med_Dues_Oct: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Late_Comer_charges_Oct: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DupID_Oct: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Oct_VGR: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  SemII_15_16_short_paid: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Chemical_Tshirts: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  EEE_Tshirts: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  EandI_Tshirts: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  EEE_Hoodies: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  JOGW: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Waves_DOCW: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Waves_Nites: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Waves_Tshirts: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Punjabi_Contribtn: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Festival_Contribtn: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Bits_Alumni: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Nov_Mess_Bill: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Nov_Medical_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DupId_Nov: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  VGR_Nov: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  MESA_TSHIRT: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DURGA_PUJA_COLLECTION: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Dec_Mess_Bill: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Dec_Medical_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DupId_Dec: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Late_comers_Dec: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Chemistry_Lab_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Library_dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Physics_Hoodie: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Physics_Dinner: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Workshop_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Assoc_Fees: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Hostel_Damages: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Total_Dues: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Balance_Amount: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  login_id: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'student_dues',
});

export default Student_Dues;
