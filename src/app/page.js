'use client'
import { useEffect, useState } from "react"


export default function Home() {

  const [data, setData] = useState({})
  const [dataArray, setDataArray] = useState([])
  const [indicator, setIndicator] = useState('')
  let counter = 0

  const getAPI = async () => {
    const API_URL = 'https://mindicador.cl/api/'
    const res = await fetch(API_URL)
    const API_DATA = await res.json()
    setData(API_DATA)
  }

  const getIndicatorValues = async () => {
    const API_URL = `https://mindicador.cl/api/${indicator}`
    const res = await fetch(API_URL)
    const API_DATA = await res.json()
    console.log(API_DATA)
  }

  useEffect(() => {
    getIndicatorValues()
  }, [indicator])



  useEffect(() => {
    getAPI()
  }, [])

  useEffect(() => {
    setDataArray(Object.values(data))
  }, [data])

  console.log(dataArray)

  return (
    <main className="container p-5 mx-auto flex flex-col gap-10 my-5 shadow-lg bg-white justify-center">
      <h1 className="text-3xl font-bold">
        Indicadores económicos diarios
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-full bg-slate-400 p-4">
          <form className="flex flex-col gap-5 justify-center">
            <h2>Seleccione un indicador</h2>
            <select onChange={(e) => setIndicator(e.target.value)}>
              {data && dataArray.map((item) => {
                counter++
                return counter > 3 ? <option key={counter} value={item.codigo}>{item.nombre}</option> : null
              })}
            </select>
          </form>
        </div>
        <div className="w-full bg-slate-400 p-4">
          <h2>Gráfico</h2>
        </div>
      </div >
    </main >
  )
}
