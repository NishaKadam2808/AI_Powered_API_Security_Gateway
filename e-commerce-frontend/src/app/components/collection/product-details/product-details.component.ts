import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/data/product';
import { PRODUCT_T } from 'src/app/data/PRODUCT_T';

@Component({
  standalone: false,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  collectionName = '';
  productName = '';
  product: PRODUCT_T = product;
  carouselWidth = 450;
  carouselHeight = 500;
  count = 1;

  images = [
    { path: this.product.img1 },
    { path: this.product.img2 },
    { path: this.product.img3 },
    { path: this.product.img4 },
  ];

  current = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  @HostListener('window:resize')
  updateCarouselSize(): void {
    const width = window.innerWidth;
    if (width < 576) {
      this.carouselWidth = 250;
      this.carouselHeight = 250;
    } else if (width < 768) {
      this.carouselWidth = 300;
      this.carouselHeight = 300;
    } else {
      this.carouselWidth = 450;
      this.carouselHeight = 500;
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.updateCarouselSize();
  }

  ngOnInit(): void {
    this.collectionName = this.route.snapshot.params['name'];
    this.productName = this.route.snapshot.params['product'];
    this.timer = setInterval(() => this.next(), 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  next(): void {
    this.current.update(i => (i + 1) % this.images.length);
  }

  goTo(index: number): void {
    this.current.set(index);
  }

  incrCount(): void {
    this.count++;
  }

  decrCount(): void {
    if (this.count > 1) this.count--;
  }

  onSubmit() {
    this.router.navigate(['/cart']);
  }
}