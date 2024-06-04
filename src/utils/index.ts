export const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


/* https://www.mathsisfun.com/leap-years.html */
export const isLeapYear = function (currentYear: number) {
    let isLeap = false;

    if (currentYear % 4 === 0) {
        isLeap = true;

        if (currentYear % 100 === 0) {
            isLeap = false;

            if (currentYear % 400 === 0) {
                isLeap = true;
            }
        }
    }

    return isLeap;
}

export function fullStringDate(date: Date) {
    return `
        ${date.getDate()} de 
        ${months[date.getMonth()]} de 
        ${date.getFullYear()} - 
        ${weekdays[date.getDay()]}`
};