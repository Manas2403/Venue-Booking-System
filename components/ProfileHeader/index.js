import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PersonIcon from "@mui/icons-material/Person";
import { Typography, Link } from "@mui/material";
const userHeader = [
    {
        label: "Profile",
        icon: <PersonIcon />,
    },
];
const adminHeader = [
    {
        label: "Profile",
        icon: <PersonIcon />,
        link: "/profile",
    },
    {
        label: "Manage Users",
        icon: <GroupAddIcon />,
        link: "/",
    },
    {
        label: "Manage Buildings",
        icon: <DomainAddIcon />,
        link: "/buildings",
    },
    {
        label: "Manage Venues",
        icon: <AddLocationAltIcon />,
        link: "/",
    },
];
export default function ProfileHeader() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Tabs value={value} onChange={handleChange} selectionFollowsFocus>
            {adminHeader.map((e, index) => (
                <Link href={e.link} underline="none">
                    <Tab
                        icon={e.icon}
                        key={index}
                        label={
                            <Typography className="hidden md:block text-lg font-bold capitalize">
                                {e.label}
                            </Typography>
                        }
                        iconPosition="start"
                    />
                </Link>
            ))}
        </Tabs>
    );
}
