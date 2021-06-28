export const formatDate = (inputDate: string) => {
    return inputDate
            .substr(5, 5)
            .split('-').join('.') + ' в '
        + inputDate.substr(11, 5);
}