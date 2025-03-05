import { attendance, cgpa, dues } from '@assets';

export const overviewStat = [
    { name: 'CGPA', icon: cgpa, value: '8.5' },
    { name: 'Attendance', icon: attendance, value: '85' },
    { name: 'Dues', icon: dues, value: '12000' },
];

export const overviewDetails = {
    dob: '01.04.2000',
    arrears: 4,
    gender: 'Male',
    degree: 'B.E',
    department: 'CSE',
    email: 'xyz@gmail.com',
    year: 'Third',
    sem: '06',
    mobile: 123456789,
    batch: '2020-2024',
    accomodation: 'Day scholar',
};

export const studentOverviewConfig = {
    name: 'John',
    regNo: 961321104000,
    overviewStat,
    overviewDetails,
};
