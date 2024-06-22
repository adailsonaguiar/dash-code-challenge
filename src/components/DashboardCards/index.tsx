import { Card, CardContent, Typography, Grid } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import WorkIcon from '@mui/icons-material/Work';

interface DashboardData {
  totalEmployees: number;
  newEmployees: number;
  resignedEmployees: number;
  jobApplicants: number;
}

const data: DashboardData = {
  totalEmployees: 150,
  newEmployees: 10,
  resignedEmployees: 3,
  jobApplicants: 25,
};

export const DashboardCards = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <PeopleIcon sx={{ fontSize: 30, color: 'primary.main' }} />
              <Typography variant="h6" component="div">
                {data.totalEmployees}
              </Typography>
              <Typography color="text.secondary">
                Total Employees
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <PersonAddIcon sx={{ fontSize: 30, color: 'success.main' }} />
              <Typography variant="h6" component="div">
                {data.newEmployees}
              </Typography>
              <Typography color="text.secondary">
                New Employees
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <PersonOffIcon sx={{ fontSize: 30, color: 'error.main' }} />
              <Typography variant="h6" component="div">
                {data.resignedEmployees}
              </Typography>
              <Typography color="text.secondary">
                Resigned Employees
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <WorkIcon sx={{ fontSize: 30, color: 'info.main' }} />
              <Typography variant="h6" component="div">
                {data.jobApplicants}
              </Typography>
              <Typography color="text.secondary">
                Job Applicants
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
