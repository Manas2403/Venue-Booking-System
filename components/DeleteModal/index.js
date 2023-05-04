import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export default function DeleteModal({ open, setOpen }) {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"sm"}
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        className="text-md"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        className="text-md"
                        autoFocus
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
