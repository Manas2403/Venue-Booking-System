import TextField from "@mui/material/TextField";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserCard from "../UserCard";
export default function Users() {
    return (
        <>
            <div className="w-full border-b border-light-200 dark:border-dark-100 pb-10">
                <div className="flex flex-row items-center gap-8 ">
                    <TextField
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        fullWidth
                        sx={{ m: 1 }}
                        placeholder={"Search Users"}
                    />
                    <Button
                        variant="contained"
                        className="bg-primary whitespace-nowrap min-w-fit p-4  text-md"
                        startIcon={<AddIcon />}
                    >
                        Add User
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-8 overflow-x-auto">
                <UserCard />
                <UserCard />
            </div>
        </>
    );
}
