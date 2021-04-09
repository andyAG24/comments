export interface IComment {
    id: number,
    author: string,
    message: string,
    children: Array<IComment>
}