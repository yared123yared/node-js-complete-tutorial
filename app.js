// npm - glbal commadn, comes with node
//  npm --version

// local dependency - use it only in this particulr project
// npm i <pakcageName>

// npm install -g <packageName>
//  sudo npm install -g <packageName> (mac)


// pacakge.json - mainfest file(stores important info about projec/package)
// manual approach(creat package.json)
// npm init (step by steo, press enter to skip)
// npm init -y (every thing is default)

 const l=require('loadash')
 const items=[1,[2,[3,[4]]]]
 const newItems=l.flattenDeep(items)
 console.log(newItems)