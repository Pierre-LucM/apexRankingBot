export interface InterfaceResponse{
    rankScore:IScore
}
export interface IScore{
    rank: number,
    percentile: number,
    displayName: string,
    displayCategory: string,
    category: number,
    metadata: {
        iconUrl: string,
        rankName: string
    },
    value: number,
    displayValue: string,
    displayType: string
}
