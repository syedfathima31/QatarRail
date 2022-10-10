import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
   this.fetchUserDetails();
   this.getAllUserList();
  }


  /**
   * Fetch User Details
   */
  fetchUserDetails(){
     this.apiService.get('/users/me').subscribe({
      next: response => {
       console.log('response',response)
      },
      error: err => {
      }
    });
  }


  /**
   * Get ALl User list
   */
  getAllUserList(){
    const params = {
      Limit :10,
      Name : 'aneesh'
    }
    this.apiService.getAll('/admin/users',params).subscribe({
      next: response => {
       console.log('response',response)
      },
      error: err => {
      }
    });
  }

}
