import AWS from "aws-sdk";

AWS.config.update({
  region: "ca-central-1",
  accessKeyId:  "AKIAYSHIUCYP5VPIETBH",
  secretAccessKey: "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",
});

const s3 = new AWS.S3();

export default s3;
