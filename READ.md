### Set up
  1. Go to user pool - > app clients - >show details -> Enable username-password: (ALLOW_USER_PASSWORD_AUTH)
  2. aws configure list 
  3. if aws_access_key_id and aws_secret_access_key are [empty] else skip step 3
    * run cmd -> aws configure
    * Ex:
      aws_access_key_id = XXXXX
      aws_secret_access_key = XXXXX

      [default]
      region=us-east-1
      output=json
  4. run cmd: node index.js
  5. token spit out