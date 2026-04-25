# Packages
express
mongoose
jsonwebtoken
cookie-parser
bcrypt
multer

# Project Folder

SCATCH
│
├── config
├── controllers
├── models
├── node_modules
├── public
│   ├── stylesheets
│   ├── javascripts
│   └── images
├── routes
├── utils
├── views
├── .env
├── .gitignore
└── app.js

# userModels
name - string
password - string
email - string
contact - number 
cart - array which stores user interested product 
order - array which stores ordered product Id
picture - db main save karenge through multer

# productModel
image - db main save karenge isko 
name - string
price - number
discount - number
bgcolour - string
panelcolour - string
textcolour - string

