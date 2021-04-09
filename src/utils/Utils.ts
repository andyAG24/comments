export const assignBy = (key: any) => (data: any, item: any) => {
    const result = { ...data };
    
    result[item[key]] = item;
    console.log(result);
    return result;
};

export const normalizeDataByField = (data: any, field: string) => {
    let kek = data.reduce(assignBy(field), {});
    console.log(kek);
}