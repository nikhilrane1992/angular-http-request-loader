# angular-http-request-loader
Loader on each http request in angularjs

### [DEMO](https://github.com/nikhilrane1992/angular-http-request-loader)

### Getting started
Download it via github, npm or via bower:

```bash
npm install angular-http-request-loader
bower install --save angular-http-request-loader
```

Add the module name to your application dependencies:
```javascript
angular.module('app', ['angular-http.request.loader'])
```

---

Follow this example:

```css
    <link rel="stylesheet" href="dist/angular-http-request-loader.min.css" media="screen" charset="utf-8">
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