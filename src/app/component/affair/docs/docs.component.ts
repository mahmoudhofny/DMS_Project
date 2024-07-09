import { Component, OnInit } from '@angular/core';
import { AffairService } from '../../../services/affair.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
})
export class DocsComponent implements OnInit {
  allDocs: any;
  constructor(private affair: AffairService) {}
  ngOnInit(): void {
    this.getALlDocs();
  }

  getALlDocs() {
    this.affair.getAllDocument().subscribe((data) => {
      this.allDocs = data;
    });
  }
}
