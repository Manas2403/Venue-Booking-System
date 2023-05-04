import { useEffect } from "react";

import { useRouter } from "next/router";
import LoginLogo from "../../assets/login.jpg";
import Logo from "../../assets/logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import Image from "next/image";
export default function Login() {
    return (
        <>
            <div className="flex flex-col md:grid md:grid-cols-2 h-screen">
                <div className="absolute md:top-12 right-0 left-1 top-4  md:ml-12 w-fit">
                    <Image src={Logo.src} width={200} height={200} />
                </div>
                <div className=" w-full px-4 py-40 bg-[#7298C6] md:w-auth-form flex items-center justify-center flex-col gap-12">
                    <h1 className="text-5xl font-bold text-[#313465]">Login</h1>
                    <Button
                        variant="contained"
                        startIcon={<GoogleIcon />}
                        className="bg-white text-[#313465] rounded-lg px-14 py-3 capitalize text-lg hover:bg-[#f0f0f7] border-solid border-b-4 border-[#313465] box-border"
                    >
                        Login with Google
                    </Button>
                </div>
                <div
                    style={{ backgroundImage: `url(${LoginLogo.src})` }}
                    className="h-full w-full  bg-contain bg-no-repeat bg-center"
                ></div>
            </div>
        </>
    );
}

Login.hideNavbar = true;
