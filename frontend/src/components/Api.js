
export function getNotes() {
    return fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
  }

export default getNotes


