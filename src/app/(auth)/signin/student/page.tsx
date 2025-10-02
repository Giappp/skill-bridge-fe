import StudentLoginForm from "../ui/StudentLoginForm"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export default function StudentSignInPage() {
    return (
        <div
            className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2 text-primary">
                        <p className="text-lg">
                            &ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;
                        </p>
                        <footer className="text-sm">William Butler Yeats</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
                    <Link href="/signin"
                          className="cursor-pointer items-center flex font-semibold text-base text-color-primary">
                        <FontAwesomeIcon icon={faArrowLeft} className="pr-2"/>
                        <p>Thay đổi vai trò </p>
                    </Link>
                    <StudentLoginForm/>
                </div>
            </div>
        </div>
    )
}
