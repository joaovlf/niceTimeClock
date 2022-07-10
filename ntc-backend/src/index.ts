import { App } from './app'

new App().server.listen(8080, ()=>{
    console.log('servidor rodando na porta 8080')
})