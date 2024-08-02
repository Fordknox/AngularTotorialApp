import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
declare var feather: any; // Declare feather to use it

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  weather: any;
  latitude: number = 0; // Initialize with a default value
  longitude: number = 0; // Initialize with a default value
  weatherIcon: string = ''; // Variable to hold the icon name
  weatherCondition: string | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeather(); // Call getWeather after getting location
      }, (error) => {
        console.error('Error getting location', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getWeather() {
    this.weatherService.getWeather(this.latitude, this.longitude).subscribe({
      next: (data) => {
        this.weather = data;
        this.setWeatherCondition(); // Set the weather condition
      },
      error: (error) => {
        console.error('Error fetching weather data', error);
      }
    });
  }

  setWeatherCondition() {
    const condition = this.weather.weather[0].main.toLowerCase();
    const currentTime = new Date().getTime();
    const sunriseTime = new Date(this.weather.sys.sunrise * 1000).getTime();
    const sunsetTime = new Date(this.weather.sys.sunset * 1000).getTime();
  
    if (condition === 'rain') {
      this.weatherCondition = 'rain';
    } else if (condition === 'clear') {
      if (currentTime >= sunriseTime && currentTime <= sunsetTime) {
        this.weatherCondition = 'clear sky with sun';
      } else {
        this.weatherCondition = 'clear sky with moon';
      }
    } else {
      this.weatherCondition = 'cloud'; // Default condition
    }
  }
}
