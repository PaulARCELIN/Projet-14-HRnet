export async function postProfil (body) {  
    const response = await fetch(`http://localhost:3000/employees`, {
      method: 'POST',
      headers: { 
          "Content-Type": 'application/json',
      },
      body: JSON.stringify(body),
    })
    return await response.json()     
}

export async function getEmployees () {
    const response = await fetch(`http://localhost:3000/employees`)
    return await response.json()  
}