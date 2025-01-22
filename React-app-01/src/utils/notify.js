import {toast} from "react-toastify";

export const notify = (text, color) => toast(text, {
    position: 'top-right',
    autoClose: 900,
    style:{

        background: color,
        color: "white"
    }
});

