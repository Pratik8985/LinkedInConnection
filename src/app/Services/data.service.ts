import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
export interface LinkedInConnection {
  id?:string;
  name?:string;
  profession?:string;
  technology?:string;
  city?:String;
  priority?:String;
  notes?:String;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore) { }

  fetchLinkedInConnectionNotes(): Observable<LinkedInConnection[]>
  {
    const notesRef=collection(this.firestore, 'LinkedInConnections');
    return collectionData(notesRef, {idField:'id'}) as Observable<LinkedInConnection[]>;
  }
  fetchLinkedInConnectionById(id:any):Observable<LinkedInConnection>
  {
    const noteDocRef=doc(this.firestore, `LinkedInConnections/${id}`);
    return docData(noteDocRef, {idField:'id'}) as Observable<LinkedInConnection>
  }
  
  addLinkedInConnection(data:LinkedInConnection)
  {
    const notesRef=collection(this.firestore, 'LinkedInConnections')
    return addDoc(notesRef,data)
  }

  deleteLinkedInConnection(user:LinkedInConnection)
  {
    const noteDocRef=doc(this.firestore, `LinkedInConnections/${user.id}`);
    return deleteDoc(noteDocRef);
  }
  updateLinkedInConnectionData(user:LinkedInConnection)
  {
    const noteDocRef=doc(this.firestore, `LinkedInConnections/${user.id}`);
    return updateDoc(noteDocRef, {name:user.name, profession:user.profession,technology:user.technology,
    city:user.city, priority:user.priority, notes:user.notes})
  }

}
