import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BuildingCard from "../BuildingCard";
export default function Buildings() {
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
                        placeholder={"Search Buildings"}
                    />
                    <Button
                        variant="contained"
                        className="bg-primary whitespace-nowrap min-w-fit p-4  text-md"
                        startIcon={<AddIcon />}
                    >
                        Add Building
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <BuildingCard />
                <BuildingCard />
            </div>
        </>
    );
}
