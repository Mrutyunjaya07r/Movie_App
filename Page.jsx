import React from 'react'

function Page({handlePrevious,handleNext,pageNo}) {
  return (
    <div style={{height:"50px",backgroundColor:"black"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button type="button" onClick={handlePrevious} style={{margin:"10px"}} className="btn btn-primary">Privious</button>
      <div className="num"  style={{margin:"10px"}}>{pageNo}</div>
      <button type="button" onClick={handleNext}  style={{margin:"10px"}} className="btn btn-primary">Next</button>
        </div>
      
    </div>
  )
}

export default Page
