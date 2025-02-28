interface StatCardProps {
    name: string;
    value: string;
    icon: string;
}

export const StatCard = ({ name, value, icon }: StatCardProps) => {
    return (
        <div className='flex justify-center items-center min-w-[300px] gap-5 px-4 py-4 bg-white rounded-4xl border-2 border-primary shadow-sm shadow-primary'>
            <div className='w-14 h-14 flex-shrink-0'>
                <img src={icon} alt={name} />
            </div>
            <div className='text-xl font-medium'>
                <h1 className='text-center'>{name}</h1>
                <p className='text-center'>{value}</p>
            </div>
        </div>
    );
};
