# daily_health_sign_in
## What`s this?
This is a daily action to complete the ECNU health daily sign-in

## How to use
After you active the github action, you need to set a secert named 'CONFIG' in settings. 

There is the content of this secret. Some arguments need network packet grabbing. For more infomation, please contact the author.
```JSON
{
  "dbId": "<Your public database ID>",
  "dbPassword": "<Your public database Password>",
  "openKey": "<Your openkey (Need network packet grabbing)>",
  "unionId": "<Your unionId (Need network packet grabbing)>"
}
```
