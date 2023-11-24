import { TestBed } from '@angular/core/testing';
import { MyName } from './app.component';

describe('MyName', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyName],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyName);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'KyleAngularApp' title`, () => {
    const fixture = TestBed.createComponent(MyName);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Kyle');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyName);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, KyleAngularApp');
  });
});
