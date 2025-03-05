import { AssignmentResultTable } from '@components';
import { assignmentResultData } from '@data';
import { getAssignmentResultData } from '@utils';

export const AssignmentsPage = () => {
    const data = assignmentResultData;
    const { results } = data;
    const assignmentResultConfig = {
        title: 'Assignment',
        resultTitles: ['First Assignment', 'Second Assignment', 'Third Assignment'],
    };
    const { resultTitles } = assignmentResultConfig;

    const assignmentData = getAssignmentResultData(resultTitles, results);
    console.log(assignmentData);

    return (
        <>
            {assignmentData.map((assignment: any) => (
                <AssignmentResultTable title={assignment.title} results={assignment.result} />
            ))}
        </>
    );
};
