export default function InfoBar({ placeholder }){
    const infoBarStyle = {
        marginTop: '20px'
    }  

    return (
        <div style={infoBarStyle}>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}