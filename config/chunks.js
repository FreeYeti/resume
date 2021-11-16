module.exports = {
 react: {
    test: /[\\/]node_modules[\\/](react|react-dom|redux|react-redux|@reduxjs)[\\/]/,
    name: "react",
    chunks: "all",
    reuseExistingChunk: true,
  },
  ol: {
    test: /[\\/]node_modules[\\/](ol)[\\/]/,
    name: "ol",
    chunks: "all",
    reuseExistingChunk: true,
  },
  core:{
    test: /[\\/]node_modules[\\/](core-js)[\\/]/,
    name: "core",
    chunks: "all",
    reuseExistingChunk: true
  }, 
  mui:{
    test: /[\\/]node_modules[\\/](@mui)[\\/]/,
    name: "mui",
    chunks: "all",
    reuseExistingChunk: true
  },
}
