import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser() {
    const { data, error } = useSWR(`https://api.github.com/users`, fetcher)

    return {
        users: data,
        error,
        isLoading: !data && !error,
    }
}