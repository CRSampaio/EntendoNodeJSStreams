# Guia para iniciantes sobre Node.js Streams - Pré #SemanaJSExpert

Anotações sobre a live do Erick Wendel sobre um guia para iniciantes sobre Node.JS Streams [Link](https://youtu.be/r-33Hhbvr1M).

## Pacotes utilizados

- npm init -y = Para inicializar o projeto

- npm i -D nodemon@2 = Para instalar o nodemon e utilizar o live-reload.

- npm i axios = Para instalar o AXIOS, que é um pacote utilizado para lidar com request HTTP de APIs.

## Bibliotecas de streams Node.JS

- ReadbleStreams - Producers de eventos / dados.

- Transform - Irá filtrar esse dados de eventos.

- WritebleStream - Consumers de eventos / dados.

## Anotações

- Node.JS é multithread e debaixo dos panos ele funciona todo por eventos (streaming).
Por conta da maioria dos programadores virem de bibliotecas/linguagens diferentes (.NET, Java ou PHP) e a maneira de trabalho desses bibliotecas serem diferentes, quando essas pessoas vão programar em Node.JS, elas acabam cometem erros para processar os dados.

- Para pensarmos em trabalhar com stream, imagine o Youtube ou Spotify por exemplo, eles fazem uma transmissão de dados contínua e parcial e não simplesmente obrigam vc a baixar 100 MB de uma vez.

- Na live de hoje iremos ver Producers e Consumers no NodeJS usando o NodeJS Streams.

- NVM - Node Version Manager. Ele irá permitir que trabalhemos com várias versões do NodeJS.

- Request HTTPs são ReadbleStream.

- Response HTTPs são WritableStream.

- Funções generator (que tem o asterísco), são internamente uma stream.

- UNDICI = Mais um pacote Node.JS para trabalhar com API HTTP.

- **npm run [script]** comando utilizado para executar um arquivo *.js com nodemon.

## Sobre os projeto

- O nosso **server.js** está sendo o nosso producers, produzindo dados com o formato JSON e passando a resposta para um consumidor.

- O nosso **client.js** será o nosso transformer/consumer que irá consumir informações sob demanda e dizer qual número é impar ou par.

- **promises** são funções assincrónas.

- Um chunk é um pedaço de um buffer.
