import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function VenueCard() {
    return (
        <>
            <div className="flex justify-between items-center flex-row border-2 rounded-lg border-primary p-4 ">
                <div className="flex flex-col gap-1">
                    <Typography className="text-lg ">5504, CC3</Typography>
                    <Typography className="text-md text-light-300 ">
                        CLASSROOM
                    </Typography>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <Typography className="text-lg ">300</Typography>
                    <Typography className="text-md text-light-300  ">
                        Seating Capacity
                    </Typography>
                </div>
                <div className="flex flex-row gap-4">
                    <EditIcon fontSize="medium" />
                    <DeleteIcon fontSize="medium" />
                </div>
            </div>
        </>
    );
}
