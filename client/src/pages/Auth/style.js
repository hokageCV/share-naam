import { SECONDARY, SURFACE, ERROR_RED } from "../../Constants/Constants";
const styles = {
    PaperStyle: {
        marginTop: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2px",
        backgroundColor: SURFACE,
    },
    AvatarStyle: {
        margin: "1px",
        backgroundColor: SECONDARY,
    },
    FormStyle: {
        width: "100%",
        marginTop: "3px",
    },
    button: {
        width: "max-content",
        margin: "10px 0px",
    },
    ErrorStyle: {
        padding: "10px",
        width: "max-content",
        borderRadius: "4px",
        margin: "20px auto",
        fontSize: "x-small",

        "&empty": {
            display: "none",
        },
    },
};

export default styles;
