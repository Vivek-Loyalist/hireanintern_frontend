// import AWS from "aws-sdk";

// AWS.config.update({
//   region: "ca-central-1",
//   accessKeyId:  "AKIAWTDAAMMF67BGFVUM",
//   secretAccessKey: "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",
// });

// const s3 = new AWS.S3();

// export default s3;


import AWS from "aws-sdk";

AWS.config.update({
  region: "ca-central-1",
  accessKeyId:  "AKIAWTDAAMMFRCMP56VN",
  secretAccessKey: "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",
});

const s3 = new AWS.S3();

export default s3;

