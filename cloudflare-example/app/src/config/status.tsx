import { toast } from 'react-toastify';

export default function Status(statusCode:number,displayText:string) {

    if (statusCode === 200) {
        return toast.success(`${displayText} successfully`);
    }
    if (statusCode === 400) {
        return toast.error(`Bad request`);
    }
    else if(statusCode===404)
    {
        return toast.error(`Not found error`);

    }
    else {
        return toast.error(`Internal server error`);
    }
}