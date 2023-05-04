import ProfileDetails from "@/components/ProfileDetails";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import Buildings from "@/components/Buildings";
export default function Profile() {
    return (
        <div className="flex flex-col gap-8">
            <ProfileHeader />
            <Buildings />
        </div>
    );
}
