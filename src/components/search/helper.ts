export function isValidSearch(text: string) {
    const validations = [
        (text: string) => {
            return text.length >= 4;
        },
        (text: string) => {
            return text.length <= 20;
        }
    ]
    return validations.every((item) => {
        return item(text);
    });
}