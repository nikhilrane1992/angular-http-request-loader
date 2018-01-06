# Angular Http Request Loader
Loader on each http request in angularjs

[![npm version](https://img.shields.io/npm/v/angular-http-request-loader.svg)](https://www.npmjs.com/package/angular-http-request-loader)
[![npm downloads](https://img.shields.io/npm/dm/angular-http-request-loader.svg?maxAge=259200)](https://www.npmjs.com/package/angular-http-request-loader)

### [DEMO](https://nikhilrane1992.github.io/angular-http-request-loader/)

### Getting started
Download it via github, npm or via bower:

```bash
npm install angular-http-request-loader
bower install --save angular-http-request-loader
```

Or use it directly from the GitHub CDN:

1) Use this URL in production(html)
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/nikhilrane1992/angular-http-request-loader/00c488f1/dist/angular-http-request-loader.min.css">
<script type="text/javascript" src="https://cdn.rawgit.com/nikhilrane1992/angular-http-request-loader/00c488f1/dist/angular-http-request-loader.min.js"></script>
```

2) Use this URL for development(html)
```html
<link rel="stylesheet" href="https://rawgit.com/nikhilrane1992/angular-http-request-loader/master/dist/angular-http-request-loader.min.css">
<script type="text/javascript" src="https://rawgit.com/nikhilrane1992/angular-http-request-loader/master/dist/angular-http-request-loader.min.js"></script>
```

Add the module name to your application dependencies:
```javascript
angular.module('app', ['angular-http.request.loader'])
```

---

Follow this example:

```html
<link rel="stylesheet" href="dist/angular-http-request-loader.min.css" media="screen" charset="utf-8">

<script type="text/javascript" src="dist/angular-http-request-loader.min.js"></script>
```

```html
<body>
    <http-request-loader></http-request-loader>
</body>
```

And in your application:
```javascript
angular.module('App', [
    'angular-http.request.loader'
])
```

If you have some doubt check the example or the index page inside the repository.

---
