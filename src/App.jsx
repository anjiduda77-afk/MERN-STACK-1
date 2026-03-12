function App() {
  const students = ["Manikanta", "Ravi", "Kiran", "Suresh"];

  return (
    <div>
      <h1>Rendering List Example</h1>

      <ol>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;