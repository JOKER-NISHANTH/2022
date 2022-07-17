import {useEffect} from "react";
const Table = () => {
    console.log("Before Effect")
    useEffect(() => {
        console.log("Use Effect")

    })
    console.log("After Effect")

    return (

        <div>{     console.log("Inside return")}</div>
  )
}

export default Table