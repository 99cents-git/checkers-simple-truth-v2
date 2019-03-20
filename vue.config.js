const PATHS = {
  LOCAL_PATH: '.',
  AEM_ASSETS: 'https://www.checkers.co.za/content/dam/checkerssouthafrica/websites/checkerssouthafrica/Campaigns/2019/valentines-discount/',
  AWS_ASSETS: 'https://s3.amazonaws.com/checkershosting/simple-truth/'
};

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? PATHS.AWS_ASSETS : '.',
  productionSourceMap: false
};
