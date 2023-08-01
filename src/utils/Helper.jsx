export const filterData = (restroList, inputText, setDevList ) => {
    let filteredData = restroList.filter((data) => data?.designation?.toLowerCase()?.includes(inputText?.toLowerCase()));
    setDevList(filteredData)

 }