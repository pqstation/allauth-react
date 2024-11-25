export default function Home () {

  async function test() {
    const response = await fetch('http://localhost:8000/api/v1/rules/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('sessionToken')}`
      }
    })
    const data = await response.json()
  }
  return (
    <div>
      <h1>Welcome</h1>

      <p>Welcome to the React ❤️ django-allauth.</p>
    </div>
  )
}
