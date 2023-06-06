import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { firestore } from "../../../firebase"
import { getDocs } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"

const Board = (props) => {
  const [db, setDb] = useState([])
  
  const columnHelper = createColumnHelper()
  const columns = [
    columnHelper.accessor('clanName', {
      cell: info => info.getValue(), 
      header: () => <span>Clan Name</span>
    }),
    columnHelper.accessor('captureTheFlag', {
      cell: info => info.getValue(), 
      header: () => <span>Capture The Flag</span>
    }),
    columnHelper.accessor('monsterHunt', {
      cell: info => info.getValue(), 
      header: () => <span>Monster Hunt</span>
    }),
    columnHelper.accessor('amazingRace', {
      cell: info => info.getValue(), 
      header: () => <span>Amazing Race</span>
    }),
    columnHelper.accessor('initiationRun', {
      cell: info => info.getValue(), 
      header: () => <span>Initiation Run</span>
    }),
    columnHelper.accessor('xfiles', {
      cell: info => info.getValue(), 
      header: () => <span>X-files</span>
    }),
    columnHelper.accessor('totalScore', {
      cell: info => info.getValue(), 
      header: () => <span>Total Score</span>
    }),
  ]
  
  const table = useReactTable({
    db,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    let isMounted = true;
    const fetchData = async() => {
      try{
        const docsRef = await getDocs(collection(firestore, "VisaTimer"))
        if(isMounted){
          const docsData = docsRef.docs.map((doc) => doc.data())
          setDb(docsData)
        }

      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
    return () => {
      isMounted = false;
    }
  }, [])
  
  return (
    <div className="w-full max-w-lg"> 
      <table 
          className="bg-indigo-100 bg-opacity-30 font-blackopsone sm:text-sm
            ">
          <thead className="bg-indigo-800 text-white bg-opacity-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map(header => (
                  // CSS for headers
                  <th key={header.id} className="px-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* <tbody>
            {table.getRowModel().rows}
            {table.getRowModel().rows.map(row => (
              console.log(row)
              // <tr key={row.id}>
              //   {row.getVisibleCells().map(cell => (
              //     <td key={cell.id}>
              //       {flexRender(cell.column.columnDef.cell, cell.getContext())}
              //     </td>
              //   ))}
              // </tr>
            ))}
          </tbody> */}
      </table>
    </div>
  )
}

export default Board