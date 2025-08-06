import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const openDropdown = (name) => {
        setActiveDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <DropdownContext.Provider value={{ activeDropdown, openDropdown }}>
            {children}
        </DropdownContext.Provider>
    );
};

export const useDropdown = () => useContext(DropdownContext);
