export interface DisplayResult {
    group: string,
    rows: RowData[];
}

export interface RowData {
    name: string;
    columns: ColumnData[];
}

export interface Property {
    name: string;
    value: string;
}

export interface ColumnData {
    key: string;
    display: string;
    image?: ImageData;
    messages?: string[];
    properties?: Property[];
}

export interface ImageData {
    name: string;
    mimeType: string;
    data: string;
}

export interface RowProps {
    name: string;
    columns: ColumnData[];
}

export interface ColumnProps {
    columnId: number;
    display: string;
    image?: ImageData;
    messages?: string[];
    properties?: Property[];
}

export interface HoverOverImageIconProps {
    image?: ImageData;
}

export interface MessageProps {
    messages?: string[];
}

export interface JobProps {
    properties?: Property[];
}