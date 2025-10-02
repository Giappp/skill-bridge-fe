import React from 'react'
import CoursesBrowser from "@/app/(dashboard)/student/courses/ui/CoursesBrowser";

const Page = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center flex-wrap">
                <div>
                    <h1>Courses to get you started</h1>
                    <p>Explore courses from experienced, real-world experts.</p>
                </div>
            </div>
            <CoursesBrowser/>
        </div>
    )
}
export default Page
