import { useTableConfig } from '@hooks';
import { assignmentResultColumnConfig as columns } from './assignmentResultColumnConfig';
import { RenderResultTable } from '@components';
import { useState } from 'react';

interface AssignmentResultTableProps {
    title: string;
    results: any;
}

export const AssignmentResultTable = ({ title, results }: AssignmentResultTableProps) => {
    console.log(title, results);
    const [assignments] = useState([
        {
            name: 'hello',
            status: 'pass',
            mark: 100,
        },
        {
            name: 'hello',
            status: 'pass',
            mark: 100,
        },
        {
            name: 'hello',
            status: 'pass',
            mark: 100,
        },
    ]);
    const table = useTableConfig({ data: results, columns });
    return (
        <div className='bg-white p-6 pb-10 rounded-2xl shadow-section mb-7'>
            <h1 className='text-2xl font-medium mb-4'>{title}</h1>
            <div className='rounded-2xl border bg-clip-border overflow-x-scroll'>
                <RenderResultTable table={table} />
            </div>
        </div>
    );
};
