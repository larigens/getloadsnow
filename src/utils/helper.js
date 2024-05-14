import { ImProfile } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { IoDocumentsOutline } from "react-icons/io5";

export const GetIcon = ({icon}) => {
    if (icon === 'profile') {
        return <ImProfile className="w-80 white-img-hv" />;
    } else if (icon === 'notes') {
        return <CgNotes className="w-80 white-img-hv" />;
    } else if (icon === 'documents') {
        return <IoDocumentsOutline className="w-80 white-img-hv" />;
    }
}