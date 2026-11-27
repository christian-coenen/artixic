
import { afterEach, describe, expect, it, vi } from 'vitest'
import { getYearOptions } from '../../../src/utils/getYearOptions'

describe('getYearOptions', () => {
    afterEach(() => {
        vi.useRealTimers()
    })

    it('should use 1950 as the default starting year', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-01-01T12:00:00Z'))

        const result = getYearOptions()

        expect(result[0]).toEqual({
            value: '2026',
            label: '2026',
        })

        expect(result[result.length - 1]).toEqual({
            value: '1950',
            label: '1950',
        })

        expect(result).toHaveLength(77)
    })

    it('should use a custom starting year', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-01-01T12:00:00Z'))

        const result = getYearOptions(2000)

        expect(result).toHaveLength(27)
        expect(result[result.length - 1]).toEqual({
            value: '2000',
            label: '2000',
        })
    })

    it('should return years in descending chronological order', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-01-01T12:00:00Z'))

        const result = getYearOptions(2020)

        expect(result.map((option) => option.value)).toEqual([
            '2026',
            '2025',
            '2024',
            '2023',
            '2022',
            '2021',
            '2020',
        ])
    })

    it('should use the year as both value and label', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-01-01T12:00:00Z'))

        const result = getYearOptions(2024)

        result.forEach((option) => {
            expect(option.value).toBe(option.label)
        })
    })

    it('should return one option when the starting year is the current year', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-01-01T12:00:00Z'))

        expect(getYearOptions(2026)).toEqual([
            {
                value: '2026',
                label: '2026',
            },
        ])
    })

    it('should return an empty array when the starting year is in the future', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-01-01T12:00:00Z'))

        expect(getYearOptions(2027)).toEqual([])
    })
})
