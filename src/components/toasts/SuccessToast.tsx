import { NavigateFunction } from 'react-router-dom';
import Swal from "sweetalert2/src/sweetalert2";

const SuccessToast = (message: string, navigate?: NavigateFunction, path?: string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000, // 3 seconds
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    
    Toast.fire({
        icon: "success",
        title: message
    }).then(() => {
        if (navigate && path) {
            navigate(path);
        }
    });
};

export default SuccessToast;
