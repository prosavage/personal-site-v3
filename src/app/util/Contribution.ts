export interface Contribution {
    date: string,
    count: number,
    level: number,
}

export interface ContributionData {
    total: Record<string, number>
    contributions: Contribution[]
}
