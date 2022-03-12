import axios from 'axios'
import { Transform, Writable } from 'stream'

// endereço do nosso server.js
const url = 'http://localhost:3000'

//função que irá fazer a chamada na API, como se fosse um AJAX
async function consume() {
    const response = await axios({
        url,
        method: 'get',
        responseType: 'stream'
    })

    return response.data
}

//cada dado retornado será armazenado na stream
const stream = await consume()

//Aqui estamos fazendo a transformação dos dados consumidos
stream
    .pipe(
        new Transform({
            transform(chunk, enc, cb) {
                const item = JSON.parse(chunk)
                const myNumber = /\d+/.exec(item.name)[0]
                let name = item.name

                if (myNumber % 2 === 0) {
                    name = name.concat(' é par')
                } else {
                    name = name.concat(' é impar')
                }
                
                item.name = name

                cb(null, JSON.stringify(item))
            }
        })
    )
    .pipe(
        new Writable({
            write(chunk, enc, cb) {
                console.log('Já chegou o disco voadooor', chunk.toString())
                cb()
            }
        })
    )