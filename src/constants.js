import Clarifai from 'clarifai';

export const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

export const app = new Clarifai.App({
  apiKey: 'baaeaf244b0a47fb8141a112851b9242'
 });