import { useSessionStorage } from "./useSessionStorage";
import jwt_decode from "jwt-decode"
import { useCallback, useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { LoginOutput } from "../components/login/loginForm";

export interface ITokenPayload {
    email: string;
    alias: string;
    color: string;
    iat: number;
    exp: number;
}

export const useLoginService = () => {

    const [token, setToken] = useSessionStorage("token", "");
    const [payload, setPayload] = useState<ITokenPayload | undefined>();

    const [loginUser, { data, loading, error }] = useMutation<LoginOutput>(gql`
    mutation LoginUser($loginInput: LoginInput) {
      loginUser(loginInput: $loginInput) {
          message
          token
          email
        }
      }
    `);

    useEffect(() => {
        if (token.length > 1) {
            setPayload(jwt_decode<ITokenPayload>(token))
        } else {
            setPayload(undefined)
        }
    }, [token]);

    const login = useCallback(async (username: string, password: string) => {
        const data = await loginUser({
            variables: {
                loginInput: {
                    email: username,
                    password: password,
                },
            },
        });
        setToken(data.data?.loginUser.token || "");
    }, []);

    const logout = useCallback(() => {
        setToken("");
    }, [setToken])


    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        const getAuthorized = () => {
            if (!payload) {
                setIsAuthorized(false);
                return;
            }
            const now = new Date().getTime() / 1000
            const isAuthed = (payload.exp - now) > 30;
            setIsAuthorized(isAuthed);
        }
        getAuthorized();
        const id = setInterval(getAuthorized, 10000)
        return () => clearInterval(id);
    }, [payload, setIsAuthorized]);

    return { token, payload, isAuthorized, login, logout, loading, error };
}

