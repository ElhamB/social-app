import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSelectedUsers } from "../store/user";
const useUnsavedChangesWarning = (setEmptyInputFn,message = "Are you sure want to discard changes?") => {
    const dispatch = useDispatch();
    const [isDirty, setDirty] = useState(false);
    useEffect(() => {
        window.onbeforeunload = isDirty && (() => message);
        return () => {
            window.onbeforeunload = null;
        };
    }, [isDirty,message]);

   const routerPrompt=()=>{
    if(isDirty){
        if (window.confirm(message) === true) {
           setDirty(false);
           dispatch(clearSelectedUsers());
           setEmptyInputFn();
          } else {
            setDirty(true)
          }
    }
   }

    return [routerPrompt, () => setDirty(true),() => setDirty(false)];
};

export default useUnsavedChangesWarning;
