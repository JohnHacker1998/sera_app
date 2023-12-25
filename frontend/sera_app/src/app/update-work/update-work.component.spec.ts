import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkComponent } from './update-work.component';

describe('UpdateWorkComponent', () => {
  let component: UpdateWorkComponent;
  let fixture: ComponentFixture<UpdateWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
