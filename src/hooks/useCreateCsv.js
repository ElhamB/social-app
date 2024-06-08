
const useCreateCsv = () => {

 const downloadCsvFile = (data) =>{
     //create CSV file data in an array
    const csvFileData = data;
    var csv = '<embers name,Group name,Creator,Creation date,Creation time\n';
     
     csvFileData.forEach(function(row) {
             csv += row.join(',');
             csv += "\n";
     });
  
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     
     hiddenElement.download = 'Group members.csv';
     hiddenElement.click();
 }
 return {downloadCsvFile}
}

export default useCreateCsv
