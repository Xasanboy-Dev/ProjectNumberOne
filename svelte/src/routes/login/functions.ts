export function emailValidator(ids: string) {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let email: any = ids;
    const result: boolean = expression.test(email); // true
    return result
}



export function passwordVaidator(ids: string) {
    let r = 0
    if (ids.length <= 3 || ids.length >= 11) {
        return false
    }
    let length = ids.length
    for (r; r <= length - 1; r++) {
        if (r != ids.length - 1 || r != 0) {
            if (ids[r] == " ") {
                return false
            }
        }
    }
    return true
}