import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  AvatarGroup,
  LinearProgress,
} from '@mui/material';
import { Title } from '../Title';

interface Task {
  id: number;
  name: string;
  dueDate: string;
  members: string[];
  progress: number;
}

const tasks: Task[] = [
  {
    id: 1,
    name: 'Complete Project Report',
    dueDate: '2024-06-25',
    members: ['Alice', 'Bob', 'Charlie'],
    progress: 75,
  },
  {
    id: 2,
    name: 'Design Homepage',
    dueDate: '2024-06-30',
    members: ['Dave', 'Eve'],
    progress: 40,
  },
  {
    id: 3,
    name: 'Fix Bugs in App',
    dueDate: '2024-07-05',
    members: ['Frank'],
    progress: 90,
  },
];

export const Tasks = () => {
  return (
    <>
      <Title>
        Task List
      </Title>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Members</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>
                  <AvatarGroup max={4}>
                    {task.members.map((member, index) => (
                      <Avatar key={index}>{member[0]}</Avatar>
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={task.progress} />
                    <Typography variant="body2" color="textSecondary">
                      {`${task.progress}%`}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

