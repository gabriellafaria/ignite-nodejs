// Para ler pequenas partes de algo, antes de ler o arquivo completo. 
// Caso não aparece as varriáveis do node, podemos instalar pelo comando: `npm install --save-dev @types/node`.

// process.stdin
//   .pipe(process.stdout)

//-- iniciando a criação de uma stream. 

// chunk - é o pedaço lido da stream de leitura. 
// encoding - como a info está codificada
// callback - função chamada ao termino da escrita

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    if (i >= 100) {
      this.push(null)
    } else {
      const buf = Buffer.from(String(i))
      this.push(buf)
    }
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
//push é usado para uma readble stream fornecer informações para quem a está consumindo.