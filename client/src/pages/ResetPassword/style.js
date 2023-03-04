import { SURFACE, PRIMARY } from "../../Constants/Constants";
const styles = {
    ContainerStyle: {
        margin: "40px auto",
    },
    PaperStyle: {
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: SURFACE,
    },

    FormStyle: {
        width: "100%",
        marginTop: "3px",
    },
    button: {
        width: "max-content",
        margin: "10px 0px",
        backgroundColor: PRIMARY,
        cursor: "pointer",
    },
    ErrorStyle: {
        padding: "20px",
        width: "max-content",
        backgroundColor: "#f44336",
        borderRadius: "4px",
        margin: "20px auto",
        fontSize: "x-small",
    },
    hidden: {
        display: "none",
    },
};

export default styles;
