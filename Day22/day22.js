function extractMatrixColumn(matrix, column) {
    let result = [];
matrix.forEach(inner =>{
inner.forEach((colValue, index) =>{
if(index === column){
   result.push(colValue)
}

})

})
    return result;
}

// 
//###########OR
function extractMatrixColumn(matrix, column) {
    //  write code here.
    const retVal = [];
    
    for(let row of matrix){
        retVal.push(row[column])
    }
    
    return retVal;
}

//###############OR
function extractMatrixColumn(matrix, column) {
    //  write code here.
    const retVal = [];
    
    matrix.forEach( row =>{
      retVal.push(row[column])  
    })
        
    
    return retVal;
}


///##########OR
function extractMatrixColumn(matrix, column) {
    //  write code here.
    return matrix.map( row => row[column]);
            
}