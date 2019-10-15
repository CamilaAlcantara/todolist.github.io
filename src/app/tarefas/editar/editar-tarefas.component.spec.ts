import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarefasComponent } from './editar-tarefas.component';

describe('EditarTarefasComponent', () => {
  let component: EditarTarefasComponent;
  let fixture: ComponentFixture<EditarTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
