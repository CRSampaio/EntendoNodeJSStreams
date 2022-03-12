import http from 'http'
import { Readable } from 'stream'
import { randomUUID } from 'crypto'

//Generator function
function* run() {
    for (let index = 0; index <= 99; index++) {
        const data = {
            id: randomUUID(),
            name: `Caue-${index}`
        }
        yield data
    }
}

function handler(request, response) {

    const readable = new Readable({
        read() {
            for (const data of run()) {
                console.log(`sending`, data)
                this.push(JSON.stringify(data) + "\n")
            }
            //To stop the stream
            this.push(null)
        }
    })
    //Here, we gonna to pass the data forward
    readable
        .pipe(response)
}

http.createServer(handler)
    .listen(3000)
    .on('listening', () => console.log('server running at 3000'))