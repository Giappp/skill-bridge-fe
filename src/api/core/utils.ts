export const buildQueryStringFromOptions = (options?: { [key: string]: any; }) => {
    const queryParams = [];
    if (options == undefined || Object.keys(options).length == 0) {
        return "";
    }

    for (const key of Object.keys(options)) {
        if (options[key] == undefined) continue;
        if (options[key] instanceof Array) {
            queryParams.push(transformArrayForQueryString(key, options[key]))
        } else if (options[key] instanceof Date) {
            const d: Date = options[key];
            queryParams.push(
                `${key}=${d.toISOString().substring(0, d.toISOString().indexOf("."))}`
            );
        } else {
            queryParams.push(`${key}=${options[key]}`);
        }
    }
    const res = `?${queryParams.join('&')}`;
    return res === "?" ? "" : res;
}

const transformArrayForQueryString = (key: string, array?: string[]) => {
    let qs = "";
    if (array === undefined || array.length === 0) {
        return qs;
    }
    for (const s of array) {
        if (qs === "") {
            qs += `${key}[]=${s}`;
        } else {
            qs += `&${key}[]=${s}`
        }
    }
    return qs;
}