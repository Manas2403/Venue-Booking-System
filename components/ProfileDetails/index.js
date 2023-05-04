import CoverPlaceholder from "../../assets/CoverPlaceholder.jpg";
import UserPlaceholder from "../../assets/UserPlaceholder.png";
import Image from "next/image";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditProfile from "../EditProfile";
export default function ProfileDetails() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <div className="w-full border-b border-light-200 dark:border-dark-100 pb-10">
                <div className="w-full relative">
                    <div className="w-full h-48 bg-primary rounded-xl">
                        <Image
                            src={CoverPlaceholder.src}
                            fill
                            style={{ objectFit: "cover" }}
                            alt="Cover Image"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="w-28 h-28 md:h-40 md:w-40 absolute border-8 border-lightblue-100 dark:border-dark-300 rounded-full mx-auto left-6 -translate-y-2/3">
                        <Image
                            src={UserPlaceholder.src}
                            height={150}
                            width={150}
                            style={{ objectFit: "cover" }}
                            alt="Profile Avatar"
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8 mt-2">
                    <div className="pt-16  flex flex-col gap-4">
                        <div className="text-3xl font-bold text-dark-300  -mt-3">
                            Manas Gupta
                        </div>
                        <div className="text-xl text-light-300 max-w-xl">
                            iit2021146@iiita.ac.in
                        </div>
                        <div className="text-lg text-dark-300 max-w-xl">
                            Reporting Authority:{" "}
                            <span className="text-md text-light-300">
                                Student's Gymkhana
                            </span>
                        </div>
                        <div className="text-lg text-dark-300 max-w-xl">
                            Role:{" "}
                            <span className="text-md text-light-300">
                                Admin
                            </span>
                        </div>
                        <div className="w-full md:w-48">
                            <Button
                                variant="outlined"
                                color="primary"
                                className="w-full rounded-full text-md font-semibold px-6 h-12 text-dark-300"
                                startIcon={<EditIcon />}
                                onClick={handleClickOpen}
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <EditProfile open={open} setOpen={setOpen} />
        </>
    );
}
