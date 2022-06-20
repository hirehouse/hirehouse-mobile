import "intl";
import "intl/locale-data/jsonp/en";
import moment from "moment";
import "moment/locale/en-ca";
import React, { useContext, useEffect } from "react";
import { IntlProvider } from "react-intl";
import Context from "../context";
import { LANGUAGE } from "../typings/enums";

const en = require("./en.json");

const messages: any = {
    [LANGUAGE.EN]: en,
};

const TranslationProvider = (props: any) => {
    const { language } = useContext(Context);

    useEffect(() => {
        moment.locale(language);
    });

    return (
        <IntlProvider
            locale={language}
            key={language}
            messages={messages[language]}
            {...props}
        />
    );
};

export default TranslationProvider;
