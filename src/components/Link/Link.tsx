import { ILinkProps, Link as NativeBaseLink, useTheme } from "native-base";
import React from "react";
import { FormattedMessage } from "react-intl";

interface LinkProps extends ILinkProps {
    id: string;
}

function Link(props: LinkProps) {
    const { id } = props;
    const {
        colors: { link },
    } = useTheme();
    return (
        <FormattedMessage id={id}>
            {(txt) => (
                <NativeBaseLink
                    _text={{ color: link.color, fontWeight: link.weight }}
                    {...props}
                >
                    {txt}
                </NativeBaseLink>
            )}
        </FormattedMessage>
    );
}
export default Link;
