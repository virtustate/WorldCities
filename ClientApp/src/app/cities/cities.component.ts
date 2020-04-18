import { Component, Inject, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { City } from './city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit, AfterViewInit {
  public cities = new MatTableDataSource<City>();
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }
  
  ngAfterViewInit(): void {
    this.cities.sort = this.sort;
    this.cities.paginator = this.paginator;
  }

  ngOnInit() {
    this.http.get<City[]>(this.baseUrl + 'api/Cities')
      .subscribe(result => {
        this.cities.data = result as City[];
      }, error => console.error(error));
  }
}
