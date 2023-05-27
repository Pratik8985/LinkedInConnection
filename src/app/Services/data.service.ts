import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
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

  constructor(private firestore:Firestore,
    private auth:Auth) { }

  fetchLinkedInConnectionNotes(): Observable<LinkedInConnection[]>
  {
    const user=this.auth.currentUser;
    const notesRef=collection(this.firestore, `LinkedInConnections/${user?.uid}/LinkedInConnectionsList`);
    return collectionData(notesRef, {idField:'id'}) as Observable<LinkedInConnection[]>;
  }
  fetchLinkedInConnectionById(id:any):Observable<LinkedInConnection>
  {
    const user=this.auth.currentUser;

    const noteDocRef=doc(this.firestore, `LinkedInConnections/${user?.uid}/LinkedInConnectionsList/${id}`);
    return docData(noteDocRef, {idField:'id'}) as Observable<LinkedInConnection>
  }

  addLinkedInConnection(data:LinkedInConnection)
  {
    const user=this.auth.currentUser;
    const notesRef=collection(this.firestore, `LinkedInConnections/${user?.uid}/LinkedInConnectionsList`)
    return addDoc(notesRef,data)
  }

  deleteLinkedInConnection(user:LinkedInConnection)
  {
    const user1=this.auth.currentUser;

    const noteDocRef=doc(this.firestore, `LinkedInConnections/${user1?.uid}/LinkedInConnectionsList/${user.id}`);
    return deleteDoc(noteDocRef);
  }
  updateLinkedInConnectionData(user:LinkedInConnection)
  {
    const user1=this.auth.currentUser;

    const noteDocRef=doc(this.firestore, `LinkedInConnections/${user1?.uid}/LinkedInConnectionsList/${user.id}`);
    return updateDoc(noteDocRef, {name:user.name, profession:user.profession,technology:user.technology,
    city:user.city, priority:user.priority, notes:user.notes})
  }

}
