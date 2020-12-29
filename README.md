## Markdown Blog Parser

[npm](https://www.npmjs.com/package/markdown-blog-content-parser) [Github](https://github.com/bmshamsnahid/Markdown-Blog-Parser)

### Motivation

I used to take notes for any course even for new technology. I put these notes in markdown format in the folder. To make these notes available, it's a repeated process to parse, process and render using an endpoint over and over again. This module will parse these markdown files, process and pass them to the client using a defined endpoint.

### Features

- Parse and process the folder and file structure
- Create an server and API endpoint
- Make parsed folders and files available using the created endpoint

### Usages

The folder structure be like,

    ├── ...
    │
    ├── public
    │   ├── Folder 01
    │   │    ├── File 01
    │   │    └── File 02
    │   └── Folder 02
    │        ├── Nested Folder 01
    │        │    ├── File 03
    │        │    └── File 04
    │        └── File 05
    │
    ├── index.js
    ├── ...

Install the module

```bash
npm i markdown-blog-content-parser
```

Use in the application (index.js).

```js
require('markdown-blog-content-parser').runServer();
```

### Advance Usages

The folder structure be like,

    ├── ...
    │
    ├── public
    │   ├── Folder 01
    │   │    ├── File 01
    │   │    └── File 02
    │   └── Folder 02
    │        ├── Nested Folder 01
    │        │    ├── File 03
    │        │    └── File 04
    │        └── File 05
    │
    ├── index.js
    ├── ...

Install the module

```bash
npm i markdown-blog-content-parser
```

Use in the application (index.js).

```js
const basePath = './public';
const publicDirectoryPath = 'public';
const routePath = '/tree';
const port = 8081;

require('markdown-blog-content-parser').runServer(
  basePath,
  publicDirectoryPath,
  routePath,
  port
);
```

### API

This module exports the method `runServer`;

We can tweak the methods of the method by the following options.

- `basePath`: Where the notes are provided. Should be a relative path. This will be a public directory. Default is `./public`.
- `publicDirectoryPath`: Directory name, where the notes are stored. Default is `public`.
- `routePath`: The api endpoint. Default is `tree`.
- `port`: The port, server will be listened to. Default is `8081`.

### Example

[My Daily AWS Study](https://github.com/bmshamsnahid/My-Daily-AWS-Study)
