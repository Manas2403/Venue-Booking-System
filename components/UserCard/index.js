import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function UserCard() {
    return (
        <>
            <div className="flex justify-between items-center flex-row border-2 rounded-lg border-primary p-4 ">
                <div className="flex flex-row gap-6">
                    <div className=" flex-column gap-2">
                        <Typography className="text-lg ">
                            Manas Gupta
                        </Typography>
                        <Typography className="text-md text-light-300 ">
                            iit2021146@iiita.ac.in
                        </Typography>
                    </div>
                    <div>
                        <Typography className="text-lg ">Admin</Typography>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <EditIcon fontSize="medium" />
                    <DeleteIcon fontSize="medium" />
                </div>
            </div>
        </>
    );
}
