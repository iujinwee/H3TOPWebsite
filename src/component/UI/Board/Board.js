import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { firestore } from "../../../firebase"
import { getDocs } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import {ColumnHelper} from "@tanstack/react-table";
import {RowData} from "@tanstack/react-table";

const Board = (props) => {
  const [db, setDb] = useState([])

  const columnHelper: ColumnHelper<RowData> = createColumnHelper()
  const columns = [
    columnHelper.accessor('clanName', {
      id: 'clanName',
      cell: info => info.getValue(),
      header: () => <span>Clan Name</span>
    }),
    columnHelper.accessor('totalScore', {
      id: 'totalScore',
      cell: info => info.getValue(),
      header: () => <span>Total Score</span>
    }),
    columnHelper.accessor('captureTheFlag', {
      id: 'captureTheFlag',
      cell: info => info.getValue(),
      header: () => <span>Capture The Flag</span>
    }),
    columnHelper.accessor('amazingRace', {
      id: 'amazingRace',
      cell: info => info.getValue(),
      header: () => <span>Amazing Race</span>
    }),
    columnHelper.accessor('woh3', {
      id: 'woh3',
      cell: info => info.getValue(),
      header: () => <span>War of Hall 3</span>
    }),
    columnHelper.accessor('sideQuests', {
      cell: info => info.getValue(),
      header: () => <span>Side Quests</span>
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
          const extractedData = docsData.map(({
                                    clanName, amazingRace, captureTheFlag, woh3, totalScore,sideQuests, isPlayer
          })=>({
            clanName, totalScore, captureTheFlag, amazingRace, woh3, sideQuests, isPlayer
          }))
          setDb(extractedData)
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
    <div className="w-full max-w-screen-lg overflow-x-auto">
      <table
          className="w-full bg-indigo-100 bg-opacity-30 font-blackopsone sm:text-[14px] tracking-wider
            ">
          <thead className="bg-indigo-800 text-white bg-opacity-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map(header => (
                  // CSS for headers
                  <th key={header.id} className="py-2 whitespace-nowrap px-3 border-bottom-0
                    border-[2px] border-opacity-30 border-indigo-300 ">
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
          <tbody>
            {db.map((row, index) => {
              if(row.isPlayer){
                 return (
                      <tr key={ index } className="text-white h-10">
                        { Object.entries(row).map((data, val) => {
                          if (data[0] !== "isPlayer") {
                            if (index === 0) {
                              return (
                                  <td className="px-2 py-2 border-[2px] border-opacity-60 border-yellow-200">
                                    { isNaN(data[1]) ? data[1] :  data[1] / 60000}
                                  </td>
                              )
                            }
                            return (
                                <td className="px-2 py-2 border-[1px] border-opacity-30 border-indigo-200">
                                  { isNaN(data[1]) ? data[1] :  data[1] / 60000}
                                </td>
                            )
                          }
                        }) }
                      </tr>
                  )
              }
                }
            )}
          </tbody>
      </table>
    </div>
  )
}

export default Board