import axios from "axios";


const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"}) // criando api com axios

async function getLivros () {
    const response = await livrosAPI.get('/') // função resposta com get dos livros

    return response.data // retornando os dados
}

export {
    getLivros
}

//exportando função para poder ser acessada