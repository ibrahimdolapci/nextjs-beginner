import { useState, useEffect } from "react";
import { Subject, fromEvent } from "rxjs";
import { filter, takeUntil, map } from "rxjs/operators";
import React from "react";
import { ButtonGroup, DropdownToggle, DropdownMenu, DropdownItem } from "./dropdown.style";

export function Dropdown() {
    const [isShown, show] = useState(false);
    const destroy$ = new Subject();
    let dropdownMenu = React.createRef<HTMLUListElement>();

    function showMenu(event) {
        event.preventDefault();

        show(true);
    }

    useEffect(() => {
        fromEvent(window, 'click')
            .pipe(
                filter(() => isShown),
                map(({ target }) => dropdownMenu.current.contains(target as Node)),
                takeUntil(destroy$)
            )
            .subscribe(show)

        return () => destroy$.next();
    });


    return (
        <ButtonGroup>
            <DropdownToggle onClick={showMenu}>Sort By</DropdownToggle>
            <DropdownMenu show={isShown} ref={dropdownMenu}>
                <DropdownItem> Menu item 1 </DropdownItem>
                <DropdownItem> Menu item 2 </DropdownItem>
                <DropdownItem> Menu item 3 </DropdownItem>
            </DropdownMenu>
        </ButtonGroup>
    );
}