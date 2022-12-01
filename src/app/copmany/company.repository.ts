import { ResourceService } from "src/app/core/services/config/resource.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Company } from "./model/company";
​
@Injectable({
  providedIn: 'root'
})
​
export class CompanyRepository extends ResourceService<Company>{
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'company';
  }

  toServerModel(entity: Company): any {
    if (!entity.id) {
      return {
        name: entity.name,
        description: entity.description
      }
    }
    else {
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description
      }
    }
  }

}