import React, { createContext, useState } from "react"

type  props={
    children: React.ReactNode
}
interface idSetId{
    id: number,
    setId: (id: number)=>void
}
export const MyContext=createContext<idSetId>(
    {
        id: 0,
        setId: ()=>{}
    }
)
export const Context=({children}:props)=>{
    const [id, setId]=useState(0)
    return(
   <MyContext.Provider value={{id, setId}}>
    {children}
   </MyContext.Provider>
    )
}