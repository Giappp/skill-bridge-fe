'use client'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const StudentLoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Add your login logic here

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <Card className="w-[400px] text-text-primary">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign in to continue</CardTitle>
                <CardDescription className="text-center">
                    Enter your email and password to sign in to your student account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline" className="w-full cursor-pointer">
                        <FontAwesomeIcon icon={faGoogle}/>
                        Google
                    </Button>
                    <Button variant="outline" className="w-full cursor-pointer">
                        <FontAwesomeIcon icon={faGithub}/>
                        Github
                    </Button>
                </div>
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-sm text-text-secondary">Or continue with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="student@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <Button className="w-full mt-2" disabled={isLoading}>
                            {isLoading && (
                                <svg
                                    className="mr-2 h-4 w-4 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            )}
                            Sign In
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
                <div className="text-sm text-center text-muted-foreground">
                    Don&#39;t have an account?{" "}
                    <a className="underline text-color-primary hover:text-color-primary/90" href="/signup/student">
                        Sign up
                    </a>
                </div>
                <div className="text-sm text-center text-muted-foreground">
                    <a className="underline text-primary hover:text-primary/90" href="/forgot-password">
                        Forgot your password?
                    </a>
                </div>
            </CardFooter>
        </Card>
    )
}

export default StudentLoginForm
