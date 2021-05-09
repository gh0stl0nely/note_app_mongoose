import InfoBar from '../components/InfoBar';

export default function LoginPage(){
    return (
        <div>
            <InfoBar placeholder="User" />
            <InfoBar placeholder="Password" />
            <button style={{ marginTop: '20px' }}>Sign in</button>
        </div>
    )
}