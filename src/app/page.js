

export default function Home() {
  return (
    <main className="container p-5 mx-auto flex flex-col gap-10 my-5 shadow-lg bg-white justify-center">
      <h1 className="text-3xl font-bold">
        Conversor de monedas
      </h1>
      <div className="flex gap-2">
        <div className="w-full bg-slate-400 p-4">
          <form className="flex flex-col gap-5 justify-center">
            <h2>1 Ringgit malayo Es igual a
              128,76 Libra sudanesa</h2>
            <div className="flex justify-between">
              <input value={'1'} min={'1'} />
              <select>
                <option value={'0'}>opción 0</option>
                <option value={'1'}>opción 1</option>
                <option value={'2'}>opción 2</option>
                <option value={'3'}>opción 3</option>
              </select>
            </div>
            <div className="flex justify-between">
              <input value={'1'} min={'1'} />
              <select>
                <option value={'0'}>opción 0</option>
                <option value={'1'}>opción 1</option>
                <option value={'2'}>opción 2</option>
                <option value={'3'}>opción 3</option>
              </select>
            </div>
          </form>
        </div>

        <div className="w-full bg-slate-400 p-4">
          <h2>Gráfico</h2>
        </div>
      </div>
    </main>
  )
}
