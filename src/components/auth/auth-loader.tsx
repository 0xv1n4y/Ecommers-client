"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"
import { loadUser } from "../../features/auth/authThunks"


export const AuthLoader = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    return null
}