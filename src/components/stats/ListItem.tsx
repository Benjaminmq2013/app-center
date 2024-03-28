import React, { useEffect, useState } from 'react'

export type dataList = {
    title: string,
    item: string,
}



export const ListItem = (data:dataList) => {

    const [score, setScore] = useState<string | null>(null)

    

    useEffect(() => {
      const storagedScore:string | null = window.localStorage.getItem(`${data.item}`)
      if( storagedScore !== null )  {
        setScore( storagedScore )        
      }
    
      return () => {
        
      }
    }, [])

    
    

  return (
    <>
      <li>{ data.title } <span>{ score } </span> </li>

      <div className="fixed inset-0 bg-cyan-600 bg-opacity-10 transition-opacity"></div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center text-3xl" >
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Select a Score</h3>
                        
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
