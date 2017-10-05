[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# AnyChart Ionic Integration

This example shows how to use Anychart with
[Ionic Framework](http://ionicframework.com/docs/) projects and [Angular 4](https://angular.io/).  

* [Getting Started](#getting-started)
* [Mobile Apps](#mobile-apps)
* [Links](#links)
* [License](#license)

## Getting Started
To run this sample:

Clone the repository from github:
```
$ git clone git@github.com:anychart-integrations/anychart-angular-ionic.git
```

Navigate to the repository folder:
```
$ cd anychart-angular-ionic
```

Install Ionic framework (see [Ionic installation guide](http://ionicframework.com/docs/intro/installation/) if needed):
```
npm install -g cordova ionic
```

Install all project requirements:
```
npm install
```
 
Now the demo can be launched in a browser:
```
ionic serve
```

## Mobile Apps

To run the the mobile applications on emulators, please:
 - Add a required platform:
  ```
  ionic cordova platform add android
  ```
  ```
  ionic cordova platform add ios
  ```
 - Run the emulator:
  ```
  ionic cordova run android
  ```
  ```
  ionic cordova run ios
  ``` 
 
To compile mobile applications, please follow [Ionic Deploying Guide](http://ionicframework.com/docs/intro/deploying/):
 - Add a required platform:
  ```
  ionic cordova platform add android
  ```
  ```
  ionic cordova platform add ios
  ```
 - Build debug or release apps:
  ```
  ionic cordova build android --prod --release --device
  ```
  ```
  ionic cordova build ios --prod --release --device
  ```
  

## Links
* [AnyChart Documentation](https://docs.anychart.com)
* [AnyChart JavaScript API Reference](https://api.anychart.com)
* [AnyChart Playground](https://playground.anychart.com)
* [AnyChart Technical Support](https://www.anychart.com/support)
* [Ionic Framework](http://ionicframework.com/docs/)
* [Angular 4](https://angular.io/)


## License
AnyChart Ionic integration sample includes two parts:
- code of the integration sample that allows to use Javascript library (in this case, AnyChart) with Ionic Framework. 
You can use, edit, modify it, use it with other Javascript libraries 
without any restrictions. It is released under [Apache 2.0 License](LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. 
You can test this plugin with the trial version of AnyChart. Our trial version is 
not limited by time and doesn't contain any feature limitations. 
Check details [here](https://www.anychart.com/buy/) 

If you have any questions regarding licensing - please contact us. <sales@anychart.com>

[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/Anychart-Angular-Ionic?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)


