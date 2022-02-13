import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class CdkAppStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		// The code that defines your stack goes here

		// example resource
		// const queue = new sqs.Queue(this, 'CdkAppQueue', {
		//   visibilityTimeout: cdk.Duration.seconds(300)
		// });

		const myBucket = new s3.Bucket(this, "thabo-cdk-bucket");
	}
}
