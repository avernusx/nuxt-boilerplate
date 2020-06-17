cd /var/www
yarn
if [ $ENV = dev ]
then
  echo 'ENVIRONMENT: develop'
  yarn dev
else
  echo 'ENVIRONMENT: production'
  yarn build
  yarn start
fi