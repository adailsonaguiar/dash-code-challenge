import { Box, Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Chip } from '@mui/material';
import { Title } from '../Title';

interface Employee {
  id: number;
  name: string;
  position: string;
  status: string;
  photo: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    status: 'Active',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Project Manager',
    status: 'Inactive',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'UI/UX Designer',
    status: 'Active',
    photo: 'https://via.placeholder.com/150',
  },
];

export const EmployeeList = () => {
  return (
    <>
      <Title>Employees</Title>
      <List>
        {employees.map((employee) => (
          <ListItem key={employee.id} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemAvatar>
              <Avatar alt={employee.name} src={`https://ui-avatars.com/api/?name=${employee.name}`} />
            </ListItemAvatar>
            <ListItemText
              primary={employee.name}
              secondary={employee.position}
            />
            <Chip 
              label={employee.status}
              color={employee.status === 'Active' ? 'success' : 'default'}
              variant="outlined"
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
