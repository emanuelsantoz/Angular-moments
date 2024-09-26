import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagensComponent } from './messagens.component';

describe('MessagensComponent', () => {
  let component: MessagensComponent;
  let fixture: ComponentFixture<MessagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
