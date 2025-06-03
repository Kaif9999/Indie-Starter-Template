"use server"
import { APIError } from 'better-auth/api';
import { auth } from './auth/auth';
import { redirect } from 'next/navigation';

interface State{
    errorMessage?: string | null;

}

export async function signUp(prevState:State,formData: FormData) {
    const rawFormData = {
        email: formData.get('email') as string,
        fullName: formData.get('fullName') as string,
        password: formData.get('password') as string,
  
    };
    const {email, fullName, password} = rawFormData;
    try {
        await auth.api.signUpEmail({
            body: {
                name: fullName,
                email,
                password,

            },
        })
    }catch (error) {
        if (error instanceof APIError){
            switch (error.status)  {
                case "UNPROCESSABLE_ENTITY":
                    return { error: "User already exists" };
                case "BAD_REQUEST":
                    return { error: "Invalid email" };
                default:
                    return { error: "An unexpected error occurred" };        
            }

        }

    }
    redirect("/dashboard");
}

export async function signIn(prevState:State,formData: FormData) {
    const rawFormData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
  
    };
    const {email, password} = rawFormData;
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,

            },
        })
    }catch (error) {
        if (error instanceof APIError){
            switch (error.status)  {
                case "UNPROCESSABLE_ENTITY":
                    return { error: "User already exists" };
                case "BAD_REQUEST":
                    return { error: "Invalid email" };
                default:
                    return { error: "An unexpected error occurred" };        
            }

        }

    }
    redirect("/dashboard");
}