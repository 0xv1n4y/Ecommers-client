"use client";

import Link from "next/link"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authThunks";
import { isValidEmail } from "../lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { AppDispatch } from "../../store/store"

export const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();


    const { loading, error } = useSelector((state:any) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState<string | null>(null);

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        // Frontend validation BEFORE API call
        if (!isValidEmail(email)) {
        setFormError("Please enter a valid email")
        return
        }

        if (!password) {
        setFormError("Password is required")
        return
        }

        setFormError(null);
        dispatch( loginUser(email, password));
    }
    return(
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 p-6 border rounded-lg">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            {(formError || error) && (
                <Alert variant="destructive">
                <AlertDescription>{formError || error}</AlertDescription>
                </Alert>
            )}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </Button>
              <p className="text-sm text-center text-muted-foreground">
                Don’t have an account?{" "}
                <Link href="/signup" className="underline">
                Sign up
                </Link>
            </p>

        </form>

    )
}
