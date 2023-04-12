import { Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { theme } from '~/styles/theme';
interface ButtonProps {
  name?: string;
  value?: string;
}
var type="submit"
function ComboButton({ name, value }: ButtonProps) {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={1}>
      <Button
        size="small"
        sx={{
          color: theme.palette?.primary.main,
          borderColor: theme.palette?.primary.main,
        }}
        variant="outlined"
        onClick={() => navigate(-1)}
      >
        Cancel
      </Button>
      <Button
        name={name}
        value={value}
        size="small"
        sx={{ backgroundColor: theme.palette?.primary.main }}
        variant="contained"
        type="submit"
      >
        Save
      </Button>
    </Stack>
  );
}

export default ComboButton;
