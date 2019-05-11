/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require("fs-extra")
const path = require("path")

exports.onPostBuild = async ({ pathPrefix }) => {
  const publicFolder = "./public"
  const assetFolder = path.join(publicFolder, `.${pathPrefix}`)

  // Move js and css files
  const files = fs.readdirSync(publicFolder)
  await Promise.all(files.map((file) => {
    if (/.*\.(js|css)$/.test(file)) {
      const currentPath = path.join(publicFolder, file)
      const newPath = path.join(assetFolder, file)
      return fs.move(currentPath, newPath)
    }
  }))
  const staticFolder = "static"
  const currentStaticPath = path.join(publicFolder, staticFolder)
  const newStaticPath = path.join(assetFolder, staticFolder)
  await fs.move(currentStaticPath, newStaticPath)
}