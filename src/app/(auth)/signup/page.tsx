import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <div className="mt-[200px] flex items-center flex-col justify-center overflow-hidden ">
            <h4 className="font-semibold uppercase text-center text-4xl text-color-primary">Welcome to Edulearn</h4>
            <p className="font-semibold text-lg">Select your role to continue.</p>
            <div className="flex flex-wrap justify-center" style={{width: "calc(100% + 16px)"}}>
                <div className="p-4 mt-4 max-w-[420px] grow-0 basis-1/3">
                    <div className="m-auto flex p-4 items-center flex-col shadow-md rounded-md">
                        <Image src="/student.jpg" alt="Student Illustratrion" width={300} height={300}/>
                        <div className="flex p-2 items-center">
                            <Link href="/signup/student"
                                  className="border-black/20  border rounded-md cursor-pointer bg-transparent relative justify-center items-center px-4 py-1 min-w-[64px] outline-0">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-sm font-body">
                                        I&#39;m a student
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-4 mt-4 max-w-[420px] grow-0 basis-1/3">
                    <div className="m-auto flex p-4 items-center flex-col shadow-md rounded-md">
                        <Image src="/teacher.jpg" alt="Student Illustratrion" width={300} height={300}/>
                        <div className="flex p-2 items-center">
                            <Link href="/signup/teacher"
                                  className="border-black/20 border rounded-md cursor-pointer bg-transparent relative justify-center items-center px-4 py-1 min-w-[64px] outline-0">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-sm font-body">
                                        I&#39;m a teacher
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
