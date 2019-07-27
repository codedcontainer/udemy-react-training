# Setup #
1. Install live-server with `yarn global add live-server`
    - live-server public
    - `yarn global add babel-cli`
    - `yarn add babel-preset-react babel-preset-env`

#What I have learned #
- Use Babel to compile JSX code. 
- `babel input.js --out-file=out.js --presets=env,react --watch`
- Add Babel Es6/Es7 vscode plugin for better support for JSX. 
- You can put JSX tags on their own line and can add parenthesis around HTML
- You cannot just render an object, but you can render the properties
- Templates look similiar to handlebars `{}`
- You can only use expressions not statments in {}
    - Place logic in function
- A function can return a JSX expression
    - Nothing will show up if you return undefined, null, or a bool