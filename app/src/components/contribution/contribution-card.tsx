// @ts-nocheck

import { useState } from 'react';
import { Typography, Fab, Box, Collapse, Avatar, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import ContributionLineCard from './contribution-line-card';
import { theme } from '../../../styles/theme';
import ContributionInput from './contribution-input';

export default function ContributionCard({ lines, index }: any) {
  const [isExpand, setIsExpand] = useState(false);
  const [isInputExpand, setIsInputExpand] = useState(false);
  const [prevLine, setPrevLine] = useState({ line: '', lineId: '' })
  const handleExpand = () => {
    if (lines.length > 1) {
      if (!isInputExpand) {
        setIsExpand(!isExpand);
      }
    }
  };
  const handleInputExpand = () => {
    setIsInputExpand(!isInputExpand);
    if(isExpand===isInputExpand)
    {
      setIsExpand(!isInputExpand)
    }
   
    setIsExpand(!isExpand);
  };
  const EditLine = (lineData) => {
    setPrevLine(lineData)
    if(!isExpand && !isInputExpand)
    {
      setIsInputExpand(!isInputExpand);
      setIsExpand(!isExpand);
    }

  }
  return (
    <Box>
      <Box className="contribution-card">
        <Avatar
          className="contribution-card-add-button"
          sx={{
            height: '16px',
            width: '15px',
            backgroundColor: theme.palette.primary.main,
          }}
        >
          {isInputExpand ? (
            <Icon
              icon="material-symbols:close-sharp"
              onClick={handleInputExpand}
            />
          ) : (
            <Icon icon="material-symbols:add" onClick={handleInputExpand} />
          )}
        </Avatar>
      </Box>
      <Box sx={{ border: 0.5, borderColor: '#D3D3D3', borderRadius: '8px' }}>
        <Fab
          aria-label="add"
          onClick={handleExpand}
          className="contribution-card-expand-button "
          sx={{
            height: '15px',
            width: '35px',
            backgroundColor: `${isExpand
              ? theme?.palette?.primary?.main
              : theme.palette?.white?.main
              }`,
          }}
        >
          <Typography
            variant="h6"
            color={
              isExpand
                ? theme.palette?.white?.main
                : theme?.palette?.primary?.main
            }
          >
            {index}
          </Typography>
        </Fab>
        <Box
          style={{
            height: `${isExpand ? 'auto' : '45px'}`,
            marginTop: '-25px',
          }}
        >
          <ContributionLineCard item={lines?.length > 0 ? lines[0] : ''} EditLine={EditLine} />
        </Box>
        {lines?.map(
          (i, idx) =>
            idx > 0 && (
              <Collapse in={isExpand || isInputExpand} timeout="auto" key={idx}>
                <Divider sx={{ my: 1, marginLeft: 8 }} />
                <ContributionLineCard item={i} EditLine={EditLine} />
              </Collapse>
            )
        )}
        <Collapse in={isInputExpand} timeout="auto">
          <ContributionInput lineNumber={index} prevLineData={prevLine} />
        </Collapse>
      </Box>
    </Box>
  );
}
