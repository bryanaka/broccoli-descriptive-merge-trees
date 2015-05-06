var upstreamMergeTrees = require('broccoli-merge-trees');

function descriptiveMergeTrees(inputTree, options) {
  var tree = upstreamMergeTrees(inputTree, options);
  tree.description = options && options.description;
  return tree;
}

module.exports = descriptiveMergeTrees;
