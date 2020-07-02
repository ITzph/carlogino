import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiteComponent } from './about-site.component';

describe('AboutSiteComponent', () => {
  let component: AboutSiteComponent;
  let fixture: ComponentFixture<AboutSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSiteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
