import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
export default function AddBuilding({ open, setOpen }) {
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
                <DialogTitle className="text-lg font-semibold text-dark-300">
                    Add a new Building <DomainAddIcon />
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of Building"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
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
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
