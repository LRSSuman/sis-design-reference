import { tickMark, xMark } from '@assets';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const assignmentResultColumnConfig = [
    columnHelper.accessor('name', { header: 'Subject Name' }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => (
            <div>{info.getValue() ? <img src={tickMark} alt='true' /> : <img src={xMark} alt='false' />}</div>
        ),
    }),
    columnHelper.accessor('mark', { header: 'Mark' }),
];
