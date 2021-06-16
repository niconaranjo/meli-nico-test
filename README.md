# Mercado Libre Test

##### Description
This is the test I did for Mercado Libre recruitment process. Take into account that the structure used here is a _monorepo_ used with `yarn` workspaces, please follow the next steps to run the project.

#### instructions:
You can find the instructions [here.](./Front_End_Test_Practico.pdf)

##### version specs:
* `yarn` 1.22.10
* `Node` v14.15.0

Make sure you use these versions or higher versions to run the project

##### Installation process

1. Run `yarn install` in each folder (server and Front)
2. Once installed go to the folder _server_ ex. `cd ./server/`
3. On the folder run `yarn run dev` will start the dev project.
4. Once it runs go to your browser and type the following `http://localhost:8080/api/`
5. In the other **tab** of your favorite command line go to _front_ folder.
6. Once there run `yarn run front`.
7. Finally go to your browser and open `http://localhost:3000/`
8. There you go now you can enjoy this awesome development!

---
#### File Structure
Here is the structure of the project:
```
root
 ┣ front
 ┃ ┣ src
 ┃ ┃ ┣ assets
 ┃ ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┃ ┣ ic_Search.png
 ┃ ┃ ┃ ┣ ic_shipping.svg
 ┃ ┃ ┃ ┣ logo__large_plus@2x.png
 ┃ ┃ ┃ ┣ logo_mercado_libre.jpg
 ┃ ┃ ┃ ┗ start_search.svg
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ UI
 ┃ ┃ ┃ ┃ ┣ sections
 ┃ ┃ ┃ ┃ ┃ ┣ start.section.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ start.sections.jsx
 ┃ ┃ ┃ ┃ ┗ spinner
 ┃ ┃ ┃ ┃ ┃ ┣ spinner.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ spinner.module.css
 ┃ ┃ ┃ ┣ header
 ┃ ┃ ┃ ┃ ┣ headerForm
 ┃ ┃ ┃ ┃ ┃ ┗ headerForm.jsx
 ┃ ┃ ┃ ┃ ┣ header.jsx
 ┃ ┃ ┃ ┃ ┗ header.module.css
 ┃ ┃ ┃ ┣ searchListItem
 ┃ ┃ ┃ ┃ ┣ searchItem
 ┃ ┃ ┃ ┃ ┃ ┣ searchItem.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ searchItem.module.css
 ┃ ┃ ┃ ┃ ┗ searchListItem.jsx
 ┃ ┃ ┃ ┗ sectionHandler
 ┃ ┃ ┃ ┃ ┣ sectionHandler.jsx
 ┃ ┃ ┃ ┃ ┗ sectionHandler.module.css
 ┃ ┃ ┣ contentData
 ┃ ┃ ┃ ┣ apiUrlData.jsx
 ┃ ┃ ┃ ┗ contentData.jsx
 ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┣ contentController
 ┃ ┃ ┃ ┃ ┣ contentController.jsx
 ┃ ┃ ┃ ┃ ┗ contentController.module.css
 ┃ ┃ ┃ ┗ searchController
 ┃ ┃ ┃ ┃ ┣ searchController.jsx
 ┃ ┃ ┃ ┃ ┗ searchController.module.css
 ┃ ┃ ┣ layout
 ┃ ┃ ┃ ┗ layout.jsx
 ┃ ┃ ┣ styles
 ┃ ┃ ┃ ┗ constants
 ┃ ┃ ┃ ┃ ┣ breakpoints.module.css
 ┃ ┃ ┃ ┃ ┣ colors.module.css
 ┃ ┃ ┃ ┃ ┗ layout.module.css
 ┃ ┃ ┣ App.jsx
 ┃ ┃ ┣ App.module.css
 ┃ ┃ ┣ index.css
 ┃ ┃ ┣ logo.svg
 ┃ ┃ ┗ main.jsx
 ┃ ┣ .eslintrc.js
 ┃ ┣ .gitignore
 ┃ ┣ index.html
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┣ vite.config.js
 ┃ ┗ yarn.lock
 ┣ server
 ┃ ┣ api
 ┃ ┃ ┗ api.route.js
 ┃ ┣ config
 ┃ ┃ ┣ axios.config.js
 ┃ ┃ ┗ config.js
 ┃ ┣ controllers
 ┃ ┃ ┣ item.controller.js
 ┃ ┃ ┗ search.controller.js
 ┃ ┣ models
 ┃ ┃ ┣ autor.model.js
 ┃ ┃ ┣ controllers.model.js
 ┃ ┃ ┗ request.model.js
 ┃ ┣ test
 ┃ ┃ ┣ mocks
 ┃ ┃ ┃ ┗ requests.test.js
 ┃ ┃ ┗ search.controller.test.js
 ┃ ┣ utils
 ┃ ┃ ┣ errorHandler.utils.js
 ┃ ┃ ┗ urlHandlers.utils.js
 ┃ ┣ views
 ┃ ┃ ┗ 404.html
 ┃ ┣ .env
 ┃ ┣ .eslintrc.js
 ┃ ┣ README.md
 ┃ ┣ jest.config.js
 ┃ ┣ main.js
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┗ yarn.lock
 ┣ Front_End_Test_Practico.pdf
 ┣ README.md
 ┣ package-lock.json
 ┣ package.json
 ┗ yarn.lock
```
