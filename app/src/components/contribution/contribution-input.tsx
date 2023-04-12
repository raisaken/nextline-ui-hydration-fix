import { Form, useTransition } from '@remix-run/react';
import { Avatar, Button, IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Icon } from '@iconify/react';
import { useEffect, useState, useRef } from 'react';
import { getFromStorage } from '~/src/config/local-storage';
import { theme } from '~/styles/theme';

export default function ContributionInput({ lineNumber, prevLineData }: { lineNumber: number, prevLineData: any }) {
  const formRef = useRef()
  let transition = useTransition()
  let isAdding=transition.state==='submitting' && transition.submission.formData.get("_action")==="add_line"
  let isUpdating=transition.state==='submitting' && transition.submission.formData.get("_action")==="update_line"
  const [lineData, setLineData] = useState({ line: '', lineId: '' })
  useEffect(() => {
    setLineData(prevLineData)
  }, [prevLineData])

  useEffect(()=>{
    if(!isAdding||!isUpdating)
    {
      formRef.current?.reset();
    }
  },[isAdding,isUpdating])

  const [user,setUser]=useState()
  useEffect(()=>{
  const userData=getFromStorage('user')
  setUser(userData)
  },[])
  return (
    <Box>
      <Form method="post" ref={formRef} replace>
        <Box display="flex" p={1} alignItems="center">
          <Avatar src={`${user?.photoUrl}`}alt="" sx={{ height: 26, width: 26 }} />
          <Box ml={1} width="100%" className="display-f-sb-c">
            <TextField
              size="small"
              placeholder="Add new line"
              fullWidth
              name="lineData"
              value={lineData?.line}
              onChange={(e) => setLineData(e.target.value)}
            />
            <input type="hidden" value={lineNumber} name="lineNumber" />
            <input type="hidden" value={prevLineData.lineId} name="lineId" />

            <Box
              className="contribution-send-button"
              style={{
                backgroundColor: `${theme?.palette?.primary?.main}`,
                borderColor: `${theme?.palette?.primary?.main}`,
              }}
            >
              {
                prevLineData?.line?.length > 1 ? (
                  <IconButton name="_action" value="update_line" size="small" type="submit" sx={{ color: 'white' }}>
                    <Icon icon="material-symbols:send-outline" color="white" />
                  </IconButton>
                ) : (
                  <IconButton name="_action" value="add_line" size="small" type="submit" sx={{ color: 'white' }}>
                    <Icon icon="material-symbols:send-outline" color="white" />
                  </IconButton>
                )
              }

            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          startIcon={<Icon icon="material-symbols:edit-note-rounded" />}
          sx={{
            ml: '4em',
            mb: 2,
          }}
        >
          Ask Author to add new nextline
        </Button>
      </Form>
    </Box>
  );
}
