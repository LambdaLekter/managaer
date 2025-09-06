import './App.css'

function App() {

  return (
    <>
        <div>
            <h2>Mana-Gae-r</h2>
            <div style={{display: 'flex', gap: '10px', flexDirection: 'column', marginBottom: '10px'}}>
                <div>
                    <label>Dato 1  </label>
                    <input />
                </div>
                <div>
                    <label>Dato 2  </label>
                    <input />
                </div>
                <div>
                    <label>Dato 3  </label>
                    <input />
                </div>
            </div>
            <button>Calcola</button>
            <div>
                <h3>Risultato:</h3>
                <p>---</p>
            </div>
        </div>
    </>
  )
}

export default App
