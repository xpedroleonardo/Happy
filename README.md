<div  align='center'>
  <img src="./.assets/Happy.png">

## Plataforma online para encontrar orfanatos e facilitar visitas.

---

### 🖥️ Happy Web

<img src="./.assets/HappyWeb.gif" title="Happy Web">

---

### 📱️Happy Mobile

<img width="350" src="./.assets/HappyApp.gif" title="Happy Mobile">

</div>

---



## 📑 Sobre

Projeto desenvolvido na NLW (Next Level Week) #3 da [Rocketseat](). Plataforma online para encontrar orfanatos e facilitar visitas.

- Layout Responsivo
- Cadastro de Orfanatos
- Listagem de Orfanatos (No Mapa e com detalhe)
- Total de Orfanatos cadastrados
- Android e IOS (Mobile)

## 👨‍💻 Tecnologias 

O projeto foi desenvolvido utilizando

- React
- React Native
- TypeScript
- Expo

## ⬇ Como baixar o projeto

```bash

    #Clonar o Repositório (Via Terminal)
    $ git clone https://github.com/xpedroleonardo/Happy.git

    #Ou

    #Botão verde acima (Zip)
    Baixar projeto compactado

```

## 🚀 Como executar o projeto

Ápós baixar o projeto, execute os seguintes passos:


```bash

    #Entrar na pasta do projeto
    $ cd Happy

```

Entrando na pasta do projeto, haverá outras pastas, representando cada parte do projeto: Backend, Mobile e Web.<br/>
Para executar o Site ou o Aplicativo do projeto, o Backend (Servidor) precisa estar sendo executado.<br/><br/>
Sendo assim é só seguir os próximos passos:

<br/>

### Rodando o Servidor:

<br/>

```bash

    #Entrar na pasta do Servidor
    $ cd backend

    #Instalar as depedências (npm ou yarn)
    $ npm || yarn install

    #Executando o Projeto (npm ou yarn)
    $ npm || yarn dev

```

---

<br/>

### Rodando o WebSite:

<br/>

```bash

    #Entrar na pasta do WebSite
    $ cd web

    #Instalar as depedências (npm ou yarn)
    $ npm || yarn install

    #Executando o Projeto (npm ou yarn)
    $ npm || yarn start

```
<br/>

Acesse http://localhost:3000/ e explore o projeto web.

---

<br/>

### Rodando o Aplicativo:

<br/>

Para executar o Aplicativo, você precisa de um telefone celular com o aplicativo <strong>expo</strong> instalado ou um emulador android / ios.

App Expo :  [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) | [IOS](https://apps.apple.com/br/app/expo-client/id982107779)


```bash

    #Entrar na pasta do Aplicativo
    $ cd mobile

    #Instalar as depedências (npm ou yarn)
    $ npm || yarn install

    #Executando o Projeto (npm ou yarn)
    $ npm || yarn start

```

Após executar esses comandos, aparecerá um QRCode, leia ele com o app do expo ou rode o projeto no emulador.

### ⚠ Rodando o Aplicativo !!!

Se vc estiver rodando o aplicativo em um despositivo físico será necessário configurar mais algumas coisas, quando vc executar os comandos acima, irá aparecer o IP da sua máquina local. <br/>

Ele irá aparacer assim: exp://[XXX.XXX.XX.XX](): XXXX

Copie esse endereço e altere os segintes arquivos: 

<br>

### Estando na pasta Mobile

Acesse o arquivo: src/services/api.ts 

E coloque seu endereço IP no local indicado.

```

    import axios from 'axios';

    const api = axios.create({
    baseURL: 'http://SEU_ENDEREÇO_IP:3333',
    })

    export default api;

```
---

### Estando na pasta Backend

Acesse o arquivo: src/views/images_view.ts

E coloque seu endereço IP no local indicado.

```

    import Image from "../models/Image"

    export default {
        render(image: Image) {
            return {
            id: image.id,
            url: `http://SEU_ENDEREÇO_IP:3333/uploads/${image.path}`
            }
        },
        renderMany(images: Image[]) {
            return images.map(Image => this.render(Image))
        }
    }

```

Assim só rodar os comandos que o aplicativo estará funcionando.


## ⚠ Atenção !!!

Se você fechar os terminais que o projeto está sendo executado, ele irá parar de funcionar.

E você não vai conseguir utilizar o Site e o Aplicativo

Deixe o terminal aberto após rodar os comandos para executar o projeto, e não ocorrerá
esse erro.

---

### 💻 Feito por [Pedro Leonardo](https://github.com/xpedroleonardo). 

### Gostou do projeto ? De uma estrela ⭐