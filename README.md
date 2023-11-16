# React + Vite

axios.get('http://localhost:3000/users') // GET
axios.post('http://localhost:3000/users', newUser) // CREATE

// To READ data, first put the user.id to Link want to read
// then use axios.get then put the useParams(id) to read
axios.get('http://localhost:3000/users/' + id) // Read

// To Edit data, first put the user.id to Link want to Edit
// then, First use axios.get then axios.put (note: useParams id)
axios.get('http://localhost:3000/users/' + id)
axios.put('http://localhost:3000/users/' + id, newUser) 

axios.delete('http://localhost:3000/users/' + userId) // Delete



best tailwind Library
Tailblocks

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
