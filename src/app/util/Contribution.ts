export interface Contribution {
    date: string,
    count: number,
    level: number,
}

export interface ContributionData {
    totals: Record<string, number>
    contributions: Record<string, Contribution[]> 
}
