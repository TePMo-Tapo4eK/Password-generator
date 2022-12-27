import { useEffect, useState } from "react"
import s from './App.module.scss'


function App() {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  const nums = '0123456789'
  const signs = '!@#$%^&*()_+-=?><:;[]{}`~'
  const [value, setValue] = useState<any>([])
  const [limit, setLimit] = useState<string>("6")
  const [UpperCase, setUpperCase] = useState<boolean>(false)
  const [Symbols, setSymbols] = useState<boolean>(false)
  const [Numbers, setNumbers] = useState<boolean>(false)

  useEffect(() => {
    CreatePassword()
  }, [])

  const CreatePassword = () => {
    let h: Array<any> = []
    let alphabet:any = abc.split("")
    Symbols ? Numbers ? alphabet =  abc + abc + abc + signs + nums : alphabet = abc + abc + abc + signs  : Numbers ? alphabet = abc + nums : alphabet = abc
    for (let i = 0; i < Number(limit) ; i++){
      const s = Math.floor(Math.random() * alphabet.length)
      let k:string = alphabet[s]
      UpperCase ? Math.floor(Math.random() * 10) > 6 ? 
      h.push(k.toUpperCase()) : h.push(k) : h.push(k)
    }
    setValue([...h])
  }

  const handleUpper = () => setUpperCase(!UpperCase)
  const handleSymbol = () => setSymbols(!Symbols)
  const handleNumbers = () => setNumbers(!Numbers)
  

  return (
    <div className={s.App}>
      <h1 className={s.Password}>{value}</h1>
      <div className={s.Create}>
      <button onClick={()=>CreatePassword()}>Generate</button>
      <div className={s.Settings}>
      <div className={s.Length}>
        <p>{limit} symbols</p>
        <input className={s.Range} type='range' min='6' max='20' onChange={ e => setLimit(e.target.value)} value={limit}/>
      </div>
      <div className={s.Uppercase}>
        <p>Uppercase</p>
        <input className={s.checkbox} style={{}} type='checkbox' checked={UpperCase} onChange={() => handleUpper()}/>
      </div>
      <div className={s.Symbols}>
        <p>Special symbols</p>
        <input className={s.checkbox} style={{}} type='checkbox' checked={Symbols} onChange={() => handleSymbol()}/>
      </div>
      <div className={s.Numbers}>
        <p>Numbers</p>
        <input className={s.checkbox} type='checkbox' checked={Numbers} onChange={() => handleNumbers()}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App
