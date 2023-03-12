import { Oval } from "react-loader-spinner"

export const Spinner = () => (
    <Oval
        height={100}
        width={100}
        color="green"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="green"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
);