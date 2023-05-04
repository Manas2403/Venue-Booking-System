import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
export default function AddVenue({ open, setOpen }) {
    const handleChange = (e) => {
        setIsAdmin(e.target.value);
    };
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
                    Add a new Venue <PersonIcon />
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3}>
                        <div className="flex flex-row gap-2">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Venue Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Enter Venue Name"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Floor"
                                type="number"
                                fullWidth
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Enter Floor Number"
                            />
                        </div>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Enter Full Name"
                        />
                        <TextField
                            margin="dense"
                            id="outlined-select-currency"
                            label="Admin"
                            fullWidth
                            select
                            variant="outlined"
                            required
                            // value={isAdmin}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            helperText="Select whether the user is admin ?"
                            onChange={handleChange}
                        ></TextField>
                    </Stack>
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
