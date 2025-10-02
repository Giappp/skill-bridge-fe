import React from 'react'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import StudentSignUpForm from "@/app/(auth)/signup/ui/StudentSignUpForm";

const Page = () => {
    return (
        <div className="mt-[120px] p-0 m-0">
            <div className="mx-auto w-full max-w-[600px]">
                <Link href="/signup"
                      className="cursor-pointer items-center flex font-semibold text-base text-color-primary">
                    <FontAwesomeIcon icon={faArrowLeft} className="pr-2"/>
                    <p>Change role</p>
                </Link>
                <StudentSignUpForm/>
            </div>
        </div>
    )
}
export default Page
