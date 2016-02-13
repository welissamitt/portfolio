OuiSite
=============


## Structure and Build Process
- Static site hosted on GitHub pages
- Two branches
    - `Master` holds all the build processes
    - `GH-Pages` is used to deploy
    - _Note:_ If you're looking to implement this, you'll need to create your `GH-Pages` branch by running `git checkout --orphan gh-pages`
- Everything is written in `Jade` and `Stylus`
- There's a `Gulp` task that builds the site and dumps all the files inside the `public` folder
- Use `npm run deploy` to move all the content of `public` into the `GH-Pages` branch

### Difference in branches
The `Master` branch and the `GH-Pages` branch have a few key difference:
- `Master` contains:
    - This README
    - A `source` folder where all the uncompiled files go
    - A `gulp` script that compiles all the files
    - `index.js`, a simple server
    - `package.json`, some basic Node configuration
- `GH-Pages` contains:
    - `CNAME` file, used for GitHub hosting

Both branches have the same `.gitignore` which includes:
- `.DS_Store`
- `npm-debug.log`
- `public`
- `node_modules`
    
### Documentation
- [http://naltatis.github.io/jade-syntax-docs/](http://naltatis.github.io/jade-syntax-docs/)
- [http://jade-lang.com/reference/includes/](http://jade-lang.com/reference/includes/)
- [https://github.com/stylus/stylus](https://github.com/stylus/stylus)
- [http://purecss.io/grids/](http://purecss.io/grids/)
