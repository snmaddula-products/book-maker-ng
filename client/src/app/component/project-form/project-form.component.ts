import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ProjectFormService } from '../../service/project-form.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    projectName: new FormControl(''),
    roles: new FormControl(''),
    gitUri: new FormControl('')
  });
  
  private rolesList: string[] = [];
  constructor(private service:ProjectFormService) { }

  ngOnInit() {
    this.service.fetchRoles().subscribe((res) => {
      console.log(res['data']);
      this.rolesList = res['data'];
    })
  }

  generateProject() {
    var data = {
      'projectName': this.form.controls['projectName'].value,
      'gitUri': this.form.controls['gitUri'].value,
      'roles' : this.form.controls['roles'].value
    };

    this.service.generateYml(data).subscribe((res) => {
      console.log(res);
    });
  }

}
