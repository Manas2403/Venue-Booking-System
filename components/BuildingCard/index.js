import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function BuildingCard() {
    return (
        <>
            <div className="flex justify-between items-center flex-row border-2 rounded-lg border-primary p-4">
                <Typography className="text-lg ">CC3</Typography>
                <div className="flex flex-row gap-4">
                    <EditIcon fontSize="medium"/>
                    <DeleteIcon fontSize="medium"/>
                </div>
            </div>
        </>
    );
}
