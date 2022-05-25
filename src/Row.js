import Cell from "./Cell"


const Row = ({item}) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return (
          <Cell key={key} celData={JSON.stringify(value)}/>
        )
      })}
    </tr>
  )
}

export default Row