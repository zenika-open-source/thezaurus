import {useCallback, useEffect, useState} from "react";

const useLocalStorageOnce = (initialState, localStorageKey) => {
    let [isActionDone, setActionDone] = useState(initialState);

    useEffect(() => setActionDone(localStorage.getItem(localStorageKey) === "true"), [localStorageKey]);

    const doAction = useCallback(() => localStorage.setItem(localStorageKey, "true"), [localStorageKey]);

    return [isActionDone, doAction];
};

export default useLocalStorageOnce;
