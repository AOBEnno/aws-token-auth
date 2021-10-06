const { exec } = require("child_process");

//make sure to set up 
const getCogToken = () => {
  exec("aws cognito-idp admin-initiate-auth --region us-east-1 --cli-input-json file://auth.json > authKeys.json", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
  });
}

getCogToken()