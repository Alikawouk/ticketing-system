import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  apiUrl: string = '/api/TicketsNew/';
  http = inject(HttpClient);
  login(obj: any) {
    return this.http.post(this.apiUrl + 'Login', obj);
  }
  //roles services
  getAllRoles() {
    return this.http.get(this.apiUrl + 'GetAllRoles');
  }
  //departments services
  getAllDepr() {
    return this.http.get(this.apiUrl + 'GetDepartments');
  }
  createNewDep(obj: any) {
    return this.http.post(this.apiUrl + 'CreateDepartment', obj);
  }
  updateDep(obj: any) {
    return this.http.put(this.apiUrl + 'UpdateDepartment', obj);
  }
  deleteDepById(id: number) {
    return this.http.delete(this.apiUrl + 'DeleteDepartment?id=' + id);
  }
  //parent categories services
  getAllpCategoty() {
    return this.http.get(this.apiUrl + 'GetParentCategory');
  }
  createNewCat(obj: any) {
    return this.http.post(this.apiUrl + 'CreateParentCategory', obj);
  }
  updateCat(obj: any) {
    return this.http.put(this.apiUrl + 'UpdateParentCategory', obj);
  }
  deleteCatById(id: number) {
    return this.http.delete(this.apiUrl + 'DeleteParentCategory?id=' + id);
  }
  //child category services
  getChildCat() {
    return this.http.get(this.apiUrl + 'GetChildCategory');
  }
  createChildCat(obj: any) {
    return this.http.post(this.apiUrl + 'CreateChildCategory', obj);
  }
  updateChildCat(obj: any) {
    return this.http.put(this.apiUrl + 'UpdateChildCategory', obj);
  }
  deleteChildCatById(id: number) {
    return this.http.delete(this.apiUrl + 'DeleteChildCategory?id=' + id);
  }
  //employees services
  getAllEmps() {
    return this.http.get(this.apiUrl + 'GetEmployees');
  }
  createEmp(obj: any) {
    return this.http.post(this.apiUrl + 'CreateEmployee', obj);
  }
  updateEmp(obj: any) {
    return this.http.put(this.apiUrl + 'UpdateEmployee', obj);
  }
  deleteEmpById(id: number) {
    return this.http.delete(this.apiUrl + 'DeleteEmployee?id=' + id);
  }
  newTicket(obj: any) {
    return this.http.post(this.apiUrl + 'CreateNewTicket', obj);
  }
  //tickets services
  getTicketsCreatedByLoggedEmp(empId: number) {
    return this.http.get(this.apiUrl + 'GetTicketsCreatedByEmpId?empId=' + empId);
  }
  getTicketsAssignedToEmpId(empId: number) {
    return this.http.get(this.apiUrl + 'GetAssignedTicketsByEmpId?empId=' + empId);
  }

  startTicket(ticketId: number) {
    return this.http.post(this.apiUrl + 'startTicket?id=' + ticketId, {});
  }
  closeTicket(ticketId: number) {
    return this.http.post(this.apiUrl + 'closeTicket?id=' + ticketId, {});
  }
}
