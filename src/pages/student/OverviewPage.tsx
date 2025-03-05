import { profile } from '@assets';
import { PersonalDetailsCard, ProfileCard, StatCard } from '@components';
import { studentOverviewConfig } from '@constants';

export const OverviewPage = () => {
    const { name, regNo, overviewStat, overviewDetails } = studentOverviewConfig;
    const studentDetails = Object.entries(overviewDetails);

    const profileCardData = {
        name,
        image: profile,
        regNo,
    };

    const personalDetails = studentDetails.reduce((acc, [key, value]) => {
        if (key === 'year') {
            acc.push(['Year/Sem', `${value}/${overviewDetails.sem}`]);
        } else if (key !== 'sem') {
            let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            if (key === 'dob') {
                formattedKey = key.toUpperCase();
            }
            acc.push([formattedKey, value]);
        }
        return acc;
    }, [] as Record<string, any>);

    return (
        <>
            <div className='bg-white p-6 pb-8 rounded-2xl shadow-section mb-7'>
                <h1 className='text-2xl font-medium mb-4'>Welcome {name}</h1>
                <div className='flex justify-center flex-wrap xl:flex-nowrap gap-5 pb-4'>
                    {overviewStat.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col xl:flex-row xl:gap-5 rounded-2xl shadow-section xl:shadow-none'>
                <ProfileCard {...profileCardData} />
                <PersonalDetailsCard personalDetails={personalDetails} />
            </div>
        </>
    );
};
