# React + Vite

axios.get('http://localhost:3000/users') // GET
axios.post('http://localhost:3000/users', newUser) // CREATE
axios.get('http://localhost:3000/users/' + id) // READ

// Update // First need to get the id of user want to edit/update
axios.get('http://localhost:3000/users/' + id)
axios.put('http://localhost:3000/users/' + id, newUser) 

axios.delete('http://localhost:3000/users/' + userId) // Delete

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
