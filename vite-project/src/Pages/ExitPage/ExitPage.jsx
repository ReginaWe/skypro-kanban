import PopExit from "../../components/popups/PopExit/PopExit";
import { useUser } from "../../hooks/useUser";

function ExitPage({ setUser }) {
    const { logout } = useUser
    return (
        <PopExit setUser={setUser} logout={logout} />
    )
}

export default ExitPage;
