import React, { useEffect } from 'react';
import 'draft-js/dist/Draft.css';
import {
  ContentBlock,
  ContentState,
  convertFromHTML,
  EditorState,
  genKey,
  Editor,
  convertToRaw,
  getDefaultKeyBinding,
} from 'draft-js';
import { Box } from '@mui/material';
import { theme } from '~/styles/theme';

export function DraftEditor({ lines, collectLineData }: any) {
  const [enterCount, setEnterCount] = React.useState(0);
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const handleEditorStateChange = (editorState: EditorState) => {
    const raw = convertToRaw(editorState.getCurrentContent());

    collectLineData(raw);
    setEditorState(editorState);
  };
  useEffect(() => {
    const initialMarkup =
      lines
        ? `<ol>${lines
          ?.map((line) => `<li>${line[0].lineData}</li>`)
          .join('')}<ol>`
        : `<ol><li></li></ol>`;
    const blocksFromHTML = convertFromHTML(initialMarkup);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML?.contentBlocks
    );
    setEditorState(EditorState.createWithContent(state));
  }, []);

  const createEmptyBlock = () => {
    if (enterCount < 5) {
      // create new block
      const newBlock = new ContentBlock({
        key: genKey(),
        type: 'ordered-list-item',
        text: '',
      });

      // get current selection
      const selectionState = editorState.getSelection();

      // create new selection at start of new block
      const newSelectionState = selectionState.merge({
        anchorKey: newBlock.getKey(),
        anchorOffset: 0,
        focusKey: newBlock.getKey(),
        focusOffset: 0,
      });

      // create new editor state with new block and new selection
      const contentState = editorState.getCurrentContent();
      const newContentState = contentState.merge({
        blockMap: contentState.getBlockMap().set(newBlock.getKey(), newBlock),
        selectionAfter: newSelectionState,
      });
      const newEditorState = EditorState.push(
        editorState,
        newContentState,
        'split-block'
      );

      // update editor state
      setEditorState(newEditorState);

      const currentBlockKey = selectionState.getStartKey();
      const currentBlockIndex = contentState.getBlockMap().toList().findIndex(block => block.getKey() === currentBlockKey);
      setEnterCount(currentBlockIndex + 2)
    }

    return 'handled';
  };
  const handleKeyBinding = (e: React.KeyboardEvent<{}>) => {
    if (e.key === 'Backspace') {
      setEnterCount(enterCount - 1)

      return getDefaultKeyBinding(e);
    }
    return getDefaultKeyBinding(e);

  };
  return (
    <Box sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
      <Editor
        editorState={editorState}
        onChange={handleEditorStateChange}
        handleReturn={() => createEmptyBlock()}
        keyBindingFn={handleKeyBinding} // Add key binding function
      />
    </Box>
  );
}
