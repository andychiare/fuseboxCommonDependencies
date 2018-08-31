# Sharing dependencies between independent bundles in FuseBox?

The repository contains two projects:

- *react-app*
  A React application that dynamically imports an independently compiled bundle
- *react-component*
  A module exporting a React component compiled as an independent bundle



## Test 1

- Compile `react-app` for production (`npm run dist`)
- Compile `react-component` for production (`npm run dist`)
- Copy the folder `react-component/bundle` into the `dist` folder of `react-app` project (`react-app/dist`)
- Open a browser to http://localhost:444
- The React component is successfully imported into the application and shows the string "*I am an external component* "



## Test 2

- Compile `react-app` for production (`npm run dist`)
- In `react-component` project, change the `fuse.js` file so that *FuseBox* excludes vendor packages from the resulting bundle (`.instructions(">[index.js]");` )
- Compile `react-component` for production (`npm run dist`)
- Copy the folder `react-component/bundle` into the `dist` folder of `react-app` project (`react-app/dist`)
- Open a browser to http://localhost:444
- The React component import fails

