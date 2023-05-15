import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectDataPage } from './collect-data.page';

describe('CollectDataPage', () => {
  let component: CollectDataPage;
  let fixture: ComponentFixture<CollectDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CollectDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
