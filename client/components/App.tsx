import { useSomething } from '../hooks/useSomething.ts'

function App() {
  const { data } = useSomething()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate!</h1>
        <ul>
          {data &&
            data.map((something) => <li key={something}>{something}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
