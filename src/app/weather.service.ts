import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private apiKey = environment.apiKey; // Your OpenWeatherMap API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
  }
}
