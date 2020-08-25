const types: [string, number][] = [
    ['3xs', 0.25],
    ['2xs', 0.5],
    ['xs', 0.75],
    ['sm', 1.25],
    ['md', 1.5],
    ['lg', 2],
    ['xl', 2.5],
    ['2xl', 3],
    ['3xl', 4],
    ['4xl', 5],
    ['5xl', 6.25]
]

const base = 16;

const spacing = types.reduce((acc, [prefix, multiplier]) => (acc['space-' + prefix] = `${multiplier * base}px`, acc), { space: "16px" })

export const theme = {
    color: {
        primary: '#ea5455',
        secondary: '#2d4059',
        color1: "#ffffff",
        color2: "#a3a3a3",
        color3: "#f3f3f3",
        color4: "#cacaca",
        color5: "#818181",
        color6: "#7a7a7a",
        color7: "#5B5C5B",
        color8: "#211f1f"
    },
    spacing,
    borderRadius: "4px",
    boxShadow: "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)"
}
