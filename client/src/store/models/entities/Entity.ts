export interface BaseQuery {
    page?: number;
    count?: number;
    order?: string;
    sort?: string;
}

export default interface Entity {
    id: string;
    createdAt: Date;
    lastModified: Date;
}