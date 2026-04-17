import './App.css'

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🐳 React + Vite Docker App with Volume </h1>

      <p>This application is running inside a Docker container.</p>

      <h3>📦 Docker Info</h3>
      <ul>
        <li>Containerized using Docker</li>
        <li>Built with Vite + React</li>
        <li>Served using Nginx</li>
        <li>Port: 5173 → 80</li>
      </ul>

      <h3>⚙️ Commands Used</h3>
      <pre>
{`docker build -t react-vite-app .
docker run -p 5173:80 react-vite-app`}
      </pre>

      <p>✅ If you see this, Docker setup is working correctly.</p>
    </div>
  )
}

export default App