import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscovercourseComponent } from './discovercourse.component';

describe('DiscovercourseComponent', () => {
  let component: DiscovercourseComponent;
  let fixture: ComponentFixture<DiscovercourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscovercourseComponent]
    });
    fixture = TestBed.createComponent(DiscovercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
