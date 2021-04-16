import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAditifComponent } from './detail-aditif.component';

describe('DetailAditifComponent', () => {
  let component: DetailAditifComponent;
  let fixture: ComponentFixture<DetailAditifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAditifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAditifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
