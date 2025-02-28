import { StatCard } from '@components';
import { studentOverviewConfig } from '@constants';

export const OverviewPage = () => {
    const { name, overviewStat } = studentOverviewConfig;
    return (
        <>
            <div className='bg-white p-6 pb-8 rounded-2xl shadow-lg mb-7'>
                <h1 className='text-xl font-medium mb-4'>Welcome {name}</h1>
                <div className='grid justify-center lg:grid-cols-3  lg:gap-4 xl:gap-14 lg:px-4 xl:px-12 pb-4'>
                    {overviewStat.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-white shadow-lg h-[550px]'>hi</div>
                <div className='bg-white shadow-lg'>hi</div>
            </div>
        </>
    );
};
