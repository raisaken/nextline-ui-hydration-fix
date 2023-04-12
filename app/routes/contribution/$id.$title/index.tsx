import { Box, Button, Checkbox, Divider, Typography } from '@mui/material';
const itemfilters = [
  {
    item: {
      label: 'Time',
      details: [
        { checked: false, label: 'Last 1 hour' },
        { checked: false, label: 'Today' },
        { checked: false, label: 'Yesterday' },
        { checked: false, label: 'Last Week' },
        { checked: false, label: 'Last Month' },
      ],
    },
  },
  {
    item: {
      label: 'User',
      details: [
        { checked: false, label: 'ganesh' },
        { checked: false, label: 'rajesh43' },
        { checked: false, label: 'nick' },
        { checked: false, label: 'smith12' },
      ],
    },
  },
  {
    item: {
      label: 'Votescore',
      details: [
        { checked: false, label: 'Maximum Vote', name: 'max' },
        { checked: false, label: 'Average Vote', name: 'average' },
        { checked: false, label: 'Minimum Vote', name: 'min' },
      ],
    },
  },
];

const buttons = [
  { label: `Filter`, type: 'submit', name: '_action', value: 'filter_leaf' },
  { label: `Reset` },
];

function ContributionFilter() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      width={'100%'}
      height={`calc(100vh - 80px)`}
      sx={{ background: '#fcfcfc' }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '18px',
          }}
        >
          Filter By
        </Typography>
        <Divider sx={{ marginTop: '5px' }} />
        <Box mt={1}>
          {itemfilters?.map((itemfilter, index) => {
            return (
              <Box key={index}>
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#ACACAC',
                    my: 1,
                  }}
                >
                  {itemfilter.item.label}
                </Typography>
                {itemfilter.item.details.map((item, idx) => {
                  return (
                    <Box
                      key={idx}
                      display={'flex'}
                      alignItems={'center'}
                      sx={{
                        height: '25px',
                      }}
                    >
                      <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                        name={item.name}
                      />
                      <Typography className="default_text">
                        {item.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box display="flex" justifyContent="end">
        {buttons.map((button, index) => (
          <Button
            key={index}
            sx={{
              ml: 1,
            }}
            variant="outlined"
            type={button.type ? 'submit' : 'button'}
            name={button.name}
            value={button.value}
          >
            {button.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default ContributionFilter;
