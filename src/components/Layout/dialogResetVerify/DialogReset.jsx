import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function DialogReset({openReset}) {
 const closeForm = ()=>{
  //  setOpen(false);
 }
  const handleVerify = () => {
    // console.log(codeVerify);
  };
  return (
    <>
      {" "}
      <Dialog open={openReset}>
        <DialogTitle>Code Verify </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the confirmation code in the email
          </DialogContentText>
          <TextField
            // onChange={(e) => setCodeVerify(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeForm} >Cancel</Button>
          <Button onClick={handleVerify}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogReset;
