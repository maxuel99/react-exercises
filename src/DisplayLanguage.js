import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage()  {

    const language = useContext(LanguageContext)

    return <h2 className="mx-3 mb-2">{language}</h2>
}