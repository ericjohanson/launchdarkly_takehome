# Eric's ABC Store

### Getting Started

Download this repo as a zipfile or using the github cli.
https://github.com/ericjohanson/launchdarkly_takehome.git

##### Install dependencies

These steps are assuming that you are on the older Mac chips(intel) and not the M series of chips. To use this project, you will need to have Yarn and NodeJS installed. To install node and the package manager, follow the instructions here based on your development environment (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

Once you have installed node-js and npm, the next thing you need to install is Yarn(https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).  

Once you have installed those two packages, navigate to this directory in your terminal. Run the below command

`yarn install`

##### Run Eric's ABC Stores from the root directory.

Once you have installed the required packages. Run the below command to start the app. This command should automatically open a browser window with the app running.

`yarn start`

##### LaunchDarkly Objects

To actually simulate the demo that will be shown, you will need to create two objects.

1.) A LaunchDarkly feature flag named `react_gallery_flag`
2.) A LaunchDarkly context with a kind of `user` and a key named `user-key-123abc`