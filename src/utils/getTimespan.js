export const getTimespan = (date) => {
    const
        today = new Date(),
        givenDate = new Date(date),
        month = today.getMonth() - givenDate.getMonth(),
        timespan = today.getFullYear() - givenDate.getFullYear()
    return (month < 0 || (month === 0 && today.getDate() < givenDate.getDate())) ? (timespan - 1) : (timespan)
}