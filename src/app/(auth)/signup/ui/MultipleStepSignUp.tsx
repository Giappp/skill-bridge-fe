"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AnimatePresence, motion} from "framer-motion";

import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Progress} from "@/components/ui/progress";
import {z} from "zod";

const formSchema = z.object({
    email: z.email("Email không hợp lệ").min(1),
    password: z.string(),
    confirmPassword: z.string(),
    fullName: z.string(),
    dob: z.coerce.date<Date>(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type StudentSignUpFormValues = z.infer<typeof formSchema>;

export default function MultiStepSignUp() {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const form = useForm<StudentSignUpFormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    const onSubmit = (values: StudentSignUpFormValues) => {
        console.log("Submitted:", values);
    };

    return (
        <Card className="w-full mx-auto text-text-primary">
            <CardHeader className="space-y-2">
                <h2 className="text-xl font-semibold">Sign Up</h2>
                <Progress value={(step / totalSteps) * 100} className="h-2"/>
                <p className="text-sm text-muted-foreground">Step {step} of {totalSteps}</p>
            </CardHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="min-h-[200px]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -50}}
                                    transition={{duration: 0.3}}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="you@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -50}}
                                    transition={{duration: 0.3}}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="dob"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Date of Birth</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="date"
                                                        value={
                                                            field.value instanceof Date
                                                                ? field.value.toISOString().slice(0, 10)
                                                                : ""
                                                        }
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -50}}
                                    transition={{duration: 0.3}}
                                    className="space-y-4"
                                >
                                    <h3 className="text-lg font-medium">Confirm Your Details</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Email:</strong> {form.getValues("email")}</p>
                                        <p><strong>Full Name:</strong> {form.getValues("fullName")}</p>
                                        <p><strong>Date of Birth:</strong> {form.getValues("dob")?.toString()}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>

                    <CardFooter className="flex justify-between">
                        {step > 1 && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setStep(step - 1)}
                            >
                                Back
                            </Button>
                        )}
                        {step < totalSteps && (
                            <Button type="button" onClick={() => setStep(step + 1)}>
                                Next
                            </Button>
                        )}
                        {step === totalSteps && (
                            <Button type="submit">Submit</Button>
                        )}
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
