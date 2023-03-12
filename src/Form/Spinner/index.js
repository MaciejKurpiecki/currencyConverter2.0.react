import { Oval } from "react-loader-spinner"
import { useTheme } from "styled-components";

export const Spinner = () => {

    const theme = useTheme();

    return (
        <Oval
            theme
            height={100}
            width={100}
            color={theme.colors.main}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor={theme.colors.main}
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    )
};
