import { Component, OnInit } from '@angular/core';
import { CompanyRepository } from '../copmany/company.repository';
import { Company } from '../copmany/model/company';



@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'description', 'update', 'delete'];
    isVisible: boolean = false;
    isRestButtonAppear: boolean = false;
    allCompanies: Company[] = [];
    size: number = 10;
    page: number = 0;
    totalItems: number = 0;


    constructor( private companyRepository: CompanyRepository) { }

    ngOnInit(): void {
        console.log(54545)
        this.getAllCompanies();
    }
    
    
   
    getAllCompanies(): void {
        this.companyRepository.getList({
            page: this.page,
            size: this.size
        }).subscribe(result => {
            this.allCompanies = result.data;
            this.totalItems = result.pagination.itemCount
        })
    }


}