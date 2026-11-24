export const getYearOptions = (startYear = 1950) => {
    const currentYear = new Date().getFullYear()

    return Array.from(
        { length: Math.max(0, currentYear - startYear + 1) },
        (_, index) => {
            const year = String(currentYear - index)

            return {
                value: year,
                label: year,
            }
        }
    )
}
