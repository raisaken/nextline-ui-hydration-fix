import { useState } from 'react';
import { Box, Stack, Typography, Chip } from '@mui/material';
import { Form } from '@remix-run/react';
import { ActionArgs, redirect } from '@remix-run/cloudflare';
import ComboButton from '~/src/components/button/combo-button';
import { DraftEditor } from '~/src/components/draft-editor';
import fetcher from '~/utils/fetcher';
import urls from '~/api/endpoint';
import { getFromStorage } from '~/src/config/local-storage';
import { toast } from 'react-toastify';

export const action = async ({ request, params }: ActionArgs) => {
  let lineDatas;
  const form = await request.formData();
  const contentTitle = form.get('contentTitle');
  const lineData = form.get('lineData');
  if (lineData) {
    lineDatas = JSON.parse(lineData)?.blocks?.map((item, index) => ({
      lineData: item.text,
      lineNumber: index + 1,
      isSelected: true,
    }));
  } else
    lineDatas = [
      {
        lineData: '',
        lineNumber: 1,
        isSelected: true,
      },
    ];
  const body = JSON.stringify({
    contentTitle,
    contentRating: 'G',
    genre: 'Romantic',
    storyBehind: 'Thunder Thunder',
    audioContentSubtype: 'Audio',
    contentStatus: 'Draft',
    lines: lineDatas,
  });
  const response = await fetcher(
    request,
    urls.content.get_content,
    'POST',
    body
  );
  return redirect(`/profile/${params.user}/${response.id}/${contentTitle}`);
};

function Add(error) {
  //need to delete remove handle from backend

  const user = getFromStorage('user');
  const id = user?.id;

  const [isEditMode, setIsEditMode] = useState(false);
  const [lineData, setLineData] = useState();

  const collectLineData = (lineDatas) => {
    setLineData(lineDatas);
  };
  return (
    <Box display={'flex'} flexDirection="column" sx={{ padding: '10px' }}>
      <Form method="post" style={{ height: '100%' }}>
        <Box
          display="flex"
          justifyContent={'space-between'}
          style={{ height: 'fit-content' }}
        >
          <Box>
            <input
              type="text"
              defaultValue={'UNTITLED DOCUMENT'}
              name="contentTitle"
              onFocus={(e) => e.target.select()}
              style={{
                border: 'none',
                borderWidth: 0,
                boxShadow: 'none',
                fontSize: '18px',
                fontWeight: '700',
                color: '#646464',
              }}
            />
          </Box>
          <Stack direction="row" spacing={1}>
            <Chip
              label={isEditMode ? 'Editing...' : 'Add Content'}
              size="small"
              sx={{ height: '24px', fontSize: '11px' }}
              onClick={() => setIsEditMode(true)}
            />
            <Chip
              size="small"
              sx={{ height: '24px', fontSize: '11px' }}
              label="   Add Details       "
              onClick={() => toast.warning('Save leaf to add details')}
            />
            <Chip
              size="small"
              label="Publish"
              sx={{ height: '24px', fontSize: '11px' }}
              onClick={() => toast.warning('Save leaf to publish leaf')}
            />
          </Stack>
        </Box>
        <Box style={{ height: '100%' }}>
          <input
            type="hidden"
            name="lineData"
            value={JSON.stringify(lineData)}
          />
          {/* need to remove after handle by backend */}
          <input type="hidden" name="userId" value={id} />

          <Box
            display={'flex'}
            justifyContent="space-between"
            flexDirection={'column'}
            style={{ padding: '10px', height: `calc(95vh - 70px)` }}
          >
            {isEditMode ? (
              <DraftEditor collectLineData={collectLineData} />
            ) : (
              <Typography variant="caption" onClick={() => setIsEditMode(true)}>
                <em>
                  Start adding content by clicking 'Add content' button or
                  simply start by clicking here....
                </em>
              </Typography>
            )}
            {isEditMode && (
              <Box display="flex" justifyContent="flex-end">
                <ComboButton name="_action" value="post_details" />
              </Box>
            )}
          </Box>
        </Box>
      </Form>
    </Box>
  );
}

export default Add;

export function ErrorBoundary({ error }) {
  return Add(error.message);
}

// export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
//   return Add(error.message);
// };
