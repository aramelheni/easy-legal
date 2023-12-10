export default function AppPaper({ color, unpadded, children }) {
    const style = {
        borderRadius: "10px",
        height: "100%",
        backgroundColor: color || "white"
    }
    if(!unpadded){
        style.padding = "10px";
    }

    return (
        <div style={style}>
            {children}
        </div>
    );
}