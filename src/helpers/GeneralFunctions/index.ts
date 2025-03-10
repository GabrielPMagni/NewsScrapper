function getRandomIntInclusive(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function randomSortArray(arr: Array<any>): Array<any> {
    return arr.sort(
        () => getRandomIntInclusive(-1, 1)
    );
}