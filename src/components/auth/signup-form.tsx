"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { signupUser } from "../../features/auth/authThunks"
import { isValidEmail, isStrongPassword } from "../lib/validators"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { AppDispatch } from "../../store/store"
import Link from "next/dist/client/link"

export function SignupForm() {

  const dispatch = useDispatch<AppDispatch>()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!name) return setError("Name is required")
    if (!isValidEmail(email)) return setError("Invalid email")
    if (!isStrongPassword(password))
      return setError(
        "Password must be 8+ chars with upper, lower, number & symbol"
      )

    setError("")
    dispatch(signupUser({ name, email, password }))
    setSuccess("Signup successful. Please verify your email.")
  }

  return (
    <form className="w-full max-w-sm space-y-4 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>

      {(error || success) && (
        <Alert variant={error ? "destructive" : "default"}>
          <AlertDescription>{error || success}</AlertDescription>
        </Alert>
      )}

      <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleSubmit} className="w-full">
        Sign Up
      </Button>
      <p className="text-sm text-center text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  )
}
