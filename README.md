# Mercado Libre Test :D

##### Description
This is the test I did for Mercado Libre recruitment process. Take into account that the structure used here is a _monorepo_ used with `yarn` workspaces, please follow the next steps to run the project.

#### instructions:
You can find the instructions [here.](./Front_End_Test_Practico.pdf)

##### version specs:
* `yarn` 1.22.10
* `Node` v14.15.0

Make sure you use this versions or higher versions to run the project

##### Installation process

1. Run `yarn install`
2. Once installed go to the folder _server_ to run ex. `cd ./server/`
3. On the folder run `yarn run dev` will start the dev project.
4. Once it runs go to your browser and type the following `http://localhost:8080/api/`
5. In other **tab** of your favorite command line go to _front_ folder.
6. Once there run `yarn run front`.
7. Finally go to your browser and open `http://localhost:3000/`
8. There you go now you can enjoy this awesome development! :)

---
#### File Structure
Here is the structure of the project:

├── README.md
├── [/front/](./server/README.md)
│  ├── main.js
│  ├── /node_modules/
│  └── package.json
├── /node_modules/
├── package-lock.json
├── package.json
├── [/server/](./server/README.md)
│  ├── .env
│  ├── .eslintrc.js
│  ├── README.md
│  ├── /api/
│  │  └── api.route.js
│  ├── /config/
│  │  ├── axios.config.js
│  │  └── config.js
│  ├── /controllers/
│  │  ├── item.controller.js
│  │  └── search.controller.js
│  ├── jest.config.js
│  ├── main.js
│  ├── /models/
│  │  ├── autor.model.js
│  │  ├── controllers.model.js
│  │  └── request.model.js
│  ├── /node_modules/
│  ├── package-lock.json
│  ├── package.json
│  ├── /test/
│  │  ├── /mocks/
│  │  │  └── requests.test.js
│  │  └── search.controller.test.js
│  ├── /utils/
│  │  ├── errorHandler.utils.js
│  │  └── urlHandlers.utils.js
│  ├── /views/
│  │  └── 404.html
└── yarn.lock
