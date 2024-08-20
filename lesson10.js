// Write a function isFutureDate that takes a date string (e.g., "2024-12-25") as an
// argument and returns true if the date is in the future compared to the current date, and
// false otherwise.

function isFutureDate(dateStr) {
    const today = new Date().getTime()
    const dateString = new Date(dateStr).getTime()
    return dateString > today;
}

console.log(isFutureDate('2024-12-25')); // true (assuming today's date is earlier)
console.log(isFutureDate('2022-01-01')); // false