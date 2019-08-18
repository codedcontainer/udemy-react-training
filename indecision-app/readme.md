# Setup #
1. Install live-server with `yarn global add live-server`
    - live-server public
    - `yarn global add babel-cli`
    - `yarn add babel-preset-react babel-preset-env`

# What I have learned #
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
- You cannot duplicate let variables
- var is function scoped, let and const is block level scoped
- adding `arguments` in a function shows all parameter values. Does not show in es5.
- Make sure that you re-render your template by placing your tempmlate and reactDOM.render method in a function. 
- React uses virtual dom to be efficient and not rewrite everything
- https://reactjs.org/docs/events.html 
- Form submit values `e.target.elements.option.value'`
- use `!!` to see if a value is set
- use `super()` when setting up a class inherited from a parent class. call `super` as this on parent class.
- `this.setState((prevState)=>{ return { prop: prevState + 1}  }) `
    - Get don't set prevState!
- props and functions can be accessed through child components
    - From parent to child you create a method and add into a child component method
    - the parent function can have a method with a parameter which can be used by a child component (e.g child send data to parent)
        - The child component can then call the function using the props keyword
- if you need to bind a method to `this`, this is handled in the constructor
  - The constructor and super method must pass props
- functional components are stupid and do not return 'this', you have to pass in props as a parameter
    - They are faster and should be used if only returning jsx
- `object.defaultProps = {} `


