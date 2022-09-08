import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username) {
    const { data, error, mutate } = useSWR(() => username ? `https://api.github.com/users/${username}` : null, fetcher)

    const fetchUser = () => mutate()

    return {
        users: data,
        error,
        isLoading: !data && !error,
        onFetchUser: fetchUser,
    }
}