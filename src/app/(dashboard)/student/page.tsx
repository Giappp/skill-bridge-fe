import React from 'react'
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faCheckCircle, faClock, faFire} from "@fortawesome/free-solid-svg-icons";
import CurrentCourses from "@/app/(dashboard)/student/components/CurrentCourses";
import StudyAnalystic from "@/app/(dashboard)/student/components/StudyAnalystic";
import OverAllProgress from "@/app/(dashboard)/student/components/OverAllProgress";

const Page = () => {
    return (
        <div className="p-6">
            <div className="mb-4">
                <div className="flex justify-between items-center flex-wrap">
                    <div>
                        <h1>Welcome back, Student!</h1>
                        <p>Track your learning progress and continue your educational journey</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="default">Browse Courses</Button>
                        <Button variant="secondary">My Schedule</Button>
                    </div>
                </div>
            </div>
            <Card>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="border border-border p-10 text-center rounded-lg">
                            <FontAwesomeIcon icon={faBook} size={"2x"} className="p-4" color={"blue"}/>
                            <h1>5</h1>
                            <p>Enrolled Courses</p>
                        </div>
                        <div className="border border-border p-10 text-center rounded-lg">
                            <FontAwesomeIcon icon={faCheckCircle} size={"2x"} className="p-4" color={"green"}/>
                            <h1>2</h1>
                            <p>Completed Courses</p>
                        </div>
                        <div className="border border-border p-10 text-center rounded-lg">
                            <FontAwesomeIcon icon={faFire} size={"2x"} className="p-4" color={"red"}/>
                            <h1>7</h1>
                            <p>Day Streak</p>
                        </div>
                        <div className="border border-border p-10 text-center rounded-lg">
                            <FontAwesomeIcon icon={faClock} size={"2x"} className="p-4" color={"blue"}/>
                            <h1>48h</h1>
                            <p>Study Hours</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-6">
                        {/*Left Content*/}
                        <div className="col-span-2">
                            <CurrentCourses/>
                            <StudyAnalystic/>
                        </div>
                        {/*Right Content*/}
                        <div>
                            <OverAllProgress/>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default Page
