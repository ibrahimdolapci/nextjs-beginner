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
        color1: '#decdc3',
        color2: 'e5e5e5'
    },
    spacing,
    borderRadius: "4px"
}
