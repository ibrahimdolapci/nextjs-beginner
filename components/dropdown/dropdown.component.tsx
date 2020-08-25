import { useState, useEffect } from "react";
import { Subject, fromEvent } from "rxjs";
import { filter, takeUntil, map } from "rxjs/operators";
import React from "react";
import { ButtonGroup, DropdownToggle, DropdownMenu, DropdownItem } from "./dropdown.style";
import { ISortOptions } from "../../interfaces";

export function Dropdown({ sort }: { sort: (options: ISortOptions) => void }) {
    const [isShown, show] = useState(false);
    const destroy$ = new Subject();
    let dropdownMenu = React.createRef<HTMLUListElement>();

    useEffect(() => {
        fromEvent(window, 'click')
            .pipe(
                filter(() => isShown && !!dropdownMenu.current),
                map(({ target }) => dropdownMenu.current.contains(target as Node)),
                takeUntil(destroy$)
            )
            .subscribe(show)

        return () => destroy$.next();
    });


    function showMenu(event) {
        event.preventDefault();

        show(true);
    }

    return (
        <ButtonGroup>
            <DropdownToggle onClick={showMenu}>Sort By</DropdownToggle>
            <DropdownMenu show={isShown} ref={dropdownMenu}>
                <DropdownItem onClick={() => sort({ by: 'year', direction: 1 })}> Sort by year in descending order </DropdownItem>
                <DropdownItem onClick={() => sort({ by: 'year', direction: -1 })}> Sort by year in ascending order </DropdownItem>
                <DropdownItem onClick={() => sort({ by: 'title', direction: 1 })}> Sort by title in descending order </DropdownItem>
                <DropdownItem onClick={() => sort({ by: 'title', direction: -1 })}> Sort by title in ascending order </DropdownItem>
            </DropdownMenu>
        </ButtonGroup>
    );
}