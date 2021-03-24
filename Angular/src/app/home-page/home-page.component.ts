import { ClipboardModule } from '@angular/cdk/clipboard';
import { Router, Routes } from '@angular/router';
import { HomePageService } from './home-page.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service: HomePageService, private router: Router,
    public modalService: NgbModal, public fb: FormBuilder) { }
  public categories;
  public modalRef: NgbModalRef;
  public form: FormGroup;
  public baseUrl = "./assets/images"
  ngOnInit(): void {
    this.getCategories();
    this.form = this.fb.group({
      product_name: [null, Validators.compose([Validators.required])],
      product_description: [null, Validators.compose([Validators.required])],
      product_meta: null,
      product_url: null,
      product_category: '',
      product_varient: '',
    });
  }

  getCategories() {
    this.service.getCategories(data => {
      this.categories = data.data;
      console.log('categories ', this.categories)
    }, err => {
      console.log(err.stack);
    })
  }

  openModal(product) {
    this.modalRef = this.modalService.open(product);
  }

  onSubmit(value) {
    console.log(value);
    if (this.form.valid) {
      this.service.addProduct(value, data => {
        console.log('success', data)
      }, err => {
        console.log(err.stack)
      })
    }
    this.modalRef.close();
    this.router.navigateByUrl("/home/" + value.product_category);
  }

  closeModal() {
    this.modalRef.close();
  }

}
