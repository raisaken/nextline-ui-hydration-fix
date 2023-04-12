import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'justify',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalBoxInterface {
  children: React.ReactNode;
  handleClose: any;
  open: boolean;
}
const ModalBox = ({ children, handleClose, open }: ModalBoxInterface) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {<Box sx={style}>{children}</Box>}
      </Modal>
    </div>
  );
};
export default ModalBox;
