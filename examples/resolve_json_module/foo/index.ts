import jsonData from './data.json'
const data = jsonData;
export const a: string = 'hello' + JSON.stringify(data)
export type Data = typeof data;
