import { createColumnHelper, useReactTable } from "@tanstack/react-table"
import { firestore } from "../../../firebase"
import { getDocs } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"

const Board = (props) => {
  const [db, setDb] = useState([])
  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const docsRef = await getDocs(collection(firestore, "VisaTimer"))
        const docsData = docsRef.docs.map((doc) => doc.data())
        setDb(docsData)

      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])
  
  return (
    <div>
      { 
        db.map((item) => {
          return (<div key={item.name} className="text-white">
            {item.name}
          </div>)
        })
      }
    </div>
  )
}

export default Board