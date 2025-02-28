import { attendance, cgpa, dues } from '@assets';

export const overviewStat = [
    { name: 'CGPA', icon: cgpa, value: '8.5' },
    { name: 'Attendance', icon: attendance, value: '85' },
    { name: 'Dues', icon: dues, value: '12000' },
];

export const studentOverviewConfig = {
    name: 'John',
    overviewStat,
};
